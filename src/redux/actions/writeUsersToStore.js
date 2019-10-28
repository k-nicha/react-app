export function writeUsersToStore (data) {
    return {
        type: 'WRITE_USERS',
        payload: data
    }
}

export function addUserToStore (user) {
    return {
        type: 'SAVE_USER',
        payload: user
    }
}

export function removeUserFromStore (data) {
    return {
        type: 'DELETE_USER',
        payload: data
    }
}