export function userReducer (
    state = {username: null, password: null, address: null}, action) {
    switch (action.type) {
        case 'UPDATE_USER_AND_PASS': {
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password,
                address: action.payload.address
            }
        }
        case 'DELETE_USER': {
            return {
                ...state,
                username: null,
                password: null,
                address: null,
            }
        }
        default : {
            return {...state}
        }
    }
}