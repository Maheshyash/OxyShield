import { secretkeyActionTypes } from "../ActionTypes/SecretKeyActionTypes"
export const setSecretKeyUserData = (userData) => {
    return{
        type:secretkeyActionTypes.SECRET_KEY_USER_DATA,
        payload:userData
    }
}
export const deleteSecretKeyUserData = () => {
    return{
        type:secretkeyActionTypes.DELETE_SECRET_KEY_USER_DATA,
    }
}