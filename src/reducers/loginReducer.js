import produce from "immer";
import { CHANGE_INPUT, GET_LOGIN, GET_LOGIN_SUCCESS, GET_LOGIN_FAILURE, GET_LOGIN_SEARCH, GET_LOGOUT } from "../actionTypes/chocolateAT";
const initialState= { isLogged: false,email:"",password:""};

export default (prevState=initialState, action) =>

    produce(prevState, draft => {
        switch(action.type) {
            case GET_LOGIN:
                draft.email=action.email;
                draft.password=action.password;
               // draft.isLogged=true;
                break;
            case GET_LOGIN_SUCCESS:
                    draft.isLogged=true;
                break;
            case GET_LOGIN_FAILURE:
                draft.isLogged=false;
                draft.error=action.error;
                break;
            case CHANGE_INPUT:
                draft[action.fieldName]= action.fieldValue;
                 break;
                 case GET_LOGOUT:
                    draft.isLogged=false;
        }
    });

