export const INITIAL_STATE = {
    user: null
}
export const ACTION_TYPES = {
    SET_USER: 'SET_USER'
}
export type ReduserAction = {
    type: string;
    user: string;
}
const reduser = (state: any, action: any) => {
    switch (action.type) {
        case ACTION_TYPES.SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}
export default reduser