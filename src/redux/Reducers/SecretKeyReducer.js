import { secretkeyActionTypes } from "../ActionTypes/SecretKeyActionTypes"

const initialState = {
    userDetails:[
        {
            secret_key:"ILQYFDXK4RZJMUWWPNWYJI2P4TK6H64U"
        }
    ]
}

export const SecretKeyReducer = (state = initialState, {type,payload}) =>{
    switch(type){
        case secretkeyActionTypes.SECRET_KEY_USER_DATA:
            return {...state, userDetails:[...state.userDetails, payload]};
        case secretkeyActionTypes.DELETE_SECRET_KEY_USER_DATA:
            return {...state, userDetails:[]};
        default:
            return state;
    }
}