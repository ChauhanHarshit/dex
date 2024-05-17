use crate::types::UserData;
use crate::{api, with_state};
use ic_cdk::{caller, query, update};
// #[query]
// fn check_username(username: String) -> bool {
//     with_state(|state| api::username_exists(state, username.clone()))
// }
#[update(name = "create_account")]
fn insert() -> Result<(), String> {
    let user_principal = caller();
    with_state(|state| api::set_post_data(state, user_principal))
}
#[query(name = "get_user_principal")]
fn fetch() -> Result<UserData, String> {
    let user_principal = caller();
    with_state(|state| api::get_post_data(state, user_principal))
}
#[update(name = "remove_principal")]
fn remove() -> Result<UserData, String> {
    let user_principal = caller();
    with_state(|state| api::remove_user_post(state, user_principal))
}
