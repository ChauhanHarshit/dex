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

thread_local! {
    static STATE: RefCell<State> = RefCell::new(State::new());
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

export_candid!();
