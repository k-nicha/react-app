export function usersTableReducer (state = { users: [] }, action) {
    switch (action.type) {
        case 'WRITE_USERS': {
            return {
                ...state, users: action.payload
            }
        }
        case 'SAVE_USER': {
            const newUser = action.payload
            let newArray = []
            if (!newUser.id) {
                newArray = state.users.slice()
                newUser.id = state.users.length + 1
                newArray.push(newUser)
            } else {
                newArray = state.users.slice()
                for (let i = 0; i < newArray.length; i++) {
                    if (newArray[i].id === newUser.id) {
                        newArray.splice(i, 1, newUser)
                        break
                    }
                }
            }
            return {
                ...state, users: newArray
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