export function userReducer (state = {username: 'Koco'}, action) {
    switch (action.type) {
        case 'CHANGE': {
            return {...state, username: 'Niki'}
        }
        default : {
            return {...state}
        }
    }
}