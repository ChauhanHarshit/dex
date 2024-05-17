use crate::types::UserData;
use crate::State;
use candid::Principal;
use ic_cdk::api::time;
// use ic_cdk::api::call::{ call_with_payment128, CallResult};
// use crate::types::{CreateCanisterArgument,CanisterInstallMode,CanisterIdRecord,CreateCanisterArgumentExtended,InstallCodeArgument,InstallCodeArgumentExtended};

pub fn set_post_data(state: &mut State, user_principal: Principal) -> Result<(), String> {
    let user_principal_text = user_principal.to_string();
    let data = UserData {
        user_principal: user_principal_text,
        created_at: time().to_string(),
    };
    let response = state.userdata.insert(user_principal, data);
    if let Some(_res) = response {
        Err("Not Able to upload data".to_string())
    } else {
        Ok(())
    }
}

pub fn get_post_data(state: &State, user_principal: Principal) -> Result<UserData, String> {
    let post_data = state.userdata.get(&user_principal);
    if let Some(post) = post_data {
        Ok(post)
    } else {
        Err("No Post Exist!".to_string())
    }
}

pub fn remove_user_post(state: &mut State, user_principal: Principal) -> Result<UserData, String> {
    let remove_success = state.userdata.remove(&user_principal);
    if let Some(remove) = remove_success {
        Ok(remove)
    } else {
        Err("no User found!".to_string())
    }
}

// async fn create_canister(
//     arg: CreateCanisterArgument,
//     // cycles: u128,
// ) -> CallResult<(CanisterIdRecord,)> {
//     let extended_arg = CreateCanisterArgumentExtended {
//         settings: arg.settings,
//         sender_canister_version: Some(canister_version()),
//     };
//     let cycles: u128 = 100_000_000_000;
//     call_with_payment128(
//         Principal::management_canister(),
//         "create_canister",
//         (extended_arg,),
//         cycles,
//     )
//     .await
// }
// async fn install_code(arg: InstallCodeArgument) -> CallResult<()> {
//     // let wasm_base64: &str = "3831fb07143cd43c3c51f770342d2b7d0a594311529f5503587bf1544ccd44be";
//     // let wasm_module_sample: Vec<u8> = base64::decode(wasm_base64).expect("Decoding failed");

//     let wasm_module_sample: Vec<u8> = include_bytes!("").to_vec();
    
    
//     let cycles: u128 = 10_000_000_000; 
    
//     let extended_arg = InstallCodeArgumentExtended {
//         mode: arg.mode,
//         canister_id: arg.canister_id,
//         wasm_module: wasm_module_sample,
//         arg: arg.arg,
//         sender_canister_version: Some(canister_version()),
//     };
    
   
//     call_with_payment128(
//         Principal::management_canister(),
//         "install_code",
//         (extended_arg,),
//         cycles,
//     ).await
// }
// #[cfg(test)]
// mod tests {
//     use super::*;

//     fn get_principal() -> Principal {
//         Principal::from_text("bxquz-fu76r-igixs-bw537-mgkyg-h4goq-ldrwe-q4zg2-zxtqy-zupgm-nqe")
//             .unwrap()
//     }
//     fn generate_user_data() -> PostData {
//         let user_data = PostData {
//             title: "No".to_string(),
//             data: "New".to_string(),
//             created_by: "32334".to_string(),
//         };
//         return user_data;
//     }
//     #[test]
//     fn test_post_creation() {
//         let mut state = State::default();
//         let data = generate_user_data();
//         let response = state.set_post_data(get_principal(), data.clone());
//         match response {
//             Ok(res) => assert_eq!(res, ()),
//             Err(e) => assert_eq!(e, "Already uploaed the post of the User".to_string()),
//         }
//     }
//     #[test]
//     fn test_post_exist() {
//         let state = State::default();
//         let data = generate_user_data();
//         let user_data = state.get_post_data(get_principal());
//         match user_data {
//             Ok(res) => assert_eq!(res, data),
//             Err(e) => assert_eq!(e, "No data found".to_string()),
//         };
//     }
//     #[test]
//     fn test_post_exist_after_remove() {
//         let mut state = State::default();
//         let data = generate_user_data();
//         let user_data = state.remove_user_post(get_principal());
//         match user_data {
//             Ok(res) => assert_eq!(res, data),
//             Err(e) => assert_eq!(e, "no User found!".to_string()),
//         };
//     }
// }
