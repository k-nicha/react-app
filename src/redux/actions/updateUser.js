export function updateUser (username, password, address) {
    return {
        type: 'UPDATE_USER_AND_PASS',
        payload: {
            username, password, address
        }
    }
}

export function deleteUser () {
    return { type: 'DELETE_USER' }
}