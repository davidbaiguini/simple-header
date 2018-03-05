/*
 * action types
 */
export const CHANGE_USER = 'CHANGE_USER'

/*
 * action creators
 */
export function changeUser(id) {
    return {
        type: CHANGE_USER,
        payload: {id}
    }
}
 