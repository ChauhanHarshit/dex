use crate::State;

pub fn username_exists(state: &State, username: String) -> bool {
    state.users.values().any(|val| val.username == username)
}

#[cfg(test)]
mod test {
    use super::username_exists;
    use crate::State;

    #[test]
    fn check_username_exist() {
        let mut state = State::default();
        let username_state = username_exists(&state, "abhishek".to_string());

        assert_eq!(username_state, false);
    }
}
