export function writeUsersToStore (data) {
    return {
        type: 'WRITE_USERS',
        payload: data
    }
}

export function addUserToStore (data) {
    return {
        type: 'SAVE_USER',
        payload: data
    }
}

export function removeUserFromStore (data) {
    return {
        type: 'DELETE_USER',
        payload: data
    }
}