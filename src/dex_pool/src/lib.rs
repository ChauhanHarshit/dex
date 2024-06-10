pub mod api;
mod memory;
mod state_handler;
mod types;
mod upgrade;
mod user;
use ic_cdk:: export_candid;
use memory::Memory;
use state_handler::State;
use std::cell::RefCell;
use types::UserData;
use candid::CandidType;
use ic_cdk_macros::{init, query, update};
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, CandidType, Deserialize, Serialize)]
struct PoolShare {
    token_a: f64,
    token_b: f64,
    mv_token_a: f64,
    mv_token_b: f64,
}

impl PoolShare {
    fn new() -> PoolShare {
        PoolShare {
            token_a: 100.0,
            token_b: 20.0,
            mv_token_a: 10.0,
            mv_token_b: 50.0,
        }
    }
}


thread_local! {
    static STATE: RefCell<State> = RefCell::new(State::new());
    static POOL_SHARE: RefCell<Option<PoolShare>> = RefCell::new(None);
    static K: RefCell<f64> = RefCell::new(0.0);
    static TOTAL_VALUE : RefCell<f64> = RefCell::new(0.0);
}

pub fn with_state<R>(f: impl FnOnce(&mut State) -> R) -> R {
    STATE.with(|cell| f(&mut cell.borrow_mut()))
}

// // PreUpgrade and PostUpgrade for stable memory
// #[pre_upgrade]
// fn pre_upgrade() {
//     upgrade::pre_upgrade();
// }

// #[post_upgrade]
// fn post_upgrade() {
//     upgrade::post_upgrade();
// }



#[init]
fn init() {
    POOL_SHARE.with(|pool| {
        *pool.borrow_mut() = Some(PoolShare::new());
    });
}

#[query]
fn get_tokens() -> Option<PoolShare> {
    POOL_SHARE.with(|pool| pool.borrow().clone())
}

#[update]
fn create_pool(pool_s: PoolShare) {
    let temp = pool_s.token_a * pool_s.token_b;
    let temp1 = pool_s.token_a + pool_s.token_b;
    K.with(|k| {
        *k.borrow_mut() = temp;
    });

    TOTAL_VALUE.with(|total_value| {
        *total_value.borrow_mut() = temp1;
    });
}

#[update]
fn share_calculation() -> f64 {
    let total_value = TOTAL_VALUE.with(|total_value| *total_value.borrow());
    let k = K.with(|k| *k.borrow());
    let total_shares: f64 = (k as f64).sqrt() as f64;
    let price_of_single_share: f64 = total_value / total_shares;
    total_shares
}

// #[update]
// fn swap(pool_s: PoolShare , change : f64) {   //can dynamically take token from frontend 
//     let db = (pool_s.token_b)
// }

// yet to complete

#[update]
fn remove_liquidity(burn_percent:f64 , pool_s: PoolShare) {
    let total_shares = share_calculation();
    let shares_burnt = (total_shares * burn_percent * burn_percent);
    let token_a_burnt = pool_s.token_a * (burn_percent/total_shares);
    let token_b_burnt = pool_s.token_b * (burn_percent/total_shares);
    // pool_s.token_a = pool_s.token_a - token_a_burnt;
}

export_candid!();


