export function usersTableReducer (state = { users: [] }, action) {
    switch (action.type) {
        case 'WRITE_USERS': {
            return {
                ...state, users: action.payload
            }
        }
        case 'SAVE_USER': {
            return {
                ...state
            }
        }
        case 'DELETE_USER': {
            return {
                ...state
            }
        }
        default: {
            return {...state}
        }
    }
}