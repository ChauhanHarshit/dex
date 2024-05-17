
use crate::types::UserData;
use crate::Memory;
use candid::Principal;
use ic_stable_structures::StableBTreeMap;

pub struct State {
    pub userdata: StableBTreeMap<Principal, UserData, Memory>,

}

impl State {
    pub fn new() -> Self {
        Self {
            userdata: init_file_contents(),
        }
    }
}

impl Default for State {
    fn default() -> Self {
        State::new()
    }
}

fn init_file_contents() -> StableBTreeMap<Principal, UserData, Memory> {
    StableBTreeMap::init(crate::memory::get_postdata_memory())

}