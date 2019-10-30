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
            try {
                if (!newUser.id) {
                    newArray = state.users.slice()
                    newUser.id = state.users[state.users.length - 1].id + 1
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
                alert('User successfully added')
                return {
                    ...state, users: newArray
                }
            }
            catch (error) {
                console.warn(error)
                alert('Something went wrong!')
                return {
                    ...state
                }
            }
            /* finally {
                return {
                    ...state, users: newArray
                }
            } */
        }
        case 'DELETE_USER': {
            const newUser = action.payload
            let newArray = []
            try {
                newArray = state.users.slice()
                for (let i = 0; i < newArray.length; i++) {
                    if (newArray[i].id === newUser.id) {
                        newArray.splice(i, 1)
                        break
                    }
                }
                alert('User successfully deleted')
                return {
                    ...state, users: newArray
                }
            }
            catch (error) {
                console.warn(error)
                alert('Something went wrong!')
                return {
                    ...state
                }
            }
        }
        default: {
            return {...state}
        }
    }
}