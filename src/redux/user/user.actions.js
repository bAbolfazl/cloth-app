// types
export const SET_CURRENT_USER = 'SET_CURRENT_USER'


// actions
export const setCurrentUser = user => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}
