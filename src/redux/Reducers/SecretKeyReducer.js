import { secretkeyActionTypes } from "../ActionTypes/SecretKeyActionTypes"

const initialState = {
    userDetails:[]
}

export const SecretKeyReducer = (state = initialState, {type,payload}) =>{
    switch(type){
        case secretkeyActionTypes.SECRET_KEY_USER_DATA:
            return {...state, userDetails:[...state.userDetails, payload]};
        // case secretkeyActionTypes.DELETE_SECRET_KEY_USER_DATA:
        //     return {...state, userDetails:[]};
        case secretkeyActionTypes.UPDATE_SECRET_KEY_USER_DATA:
            return {...state, userDetails:[...payload]};
        default:
            return state;
    }
}