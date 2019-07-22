import produce from "immer";
import { GET_USER, GET_USER_SUCCESS, GET_USER_FAILURE, CHANGE_INPUT } from "../actionTypes/chocolateAT";
const initialState= { users:[], isReg: false,firstName:"",lastName:"",email:"",password:""};

export default (prevState=initialState, action) =>

    produce(prevState, draft => {
        switch(action.type) {
            case GET_USER:
                draft.users=action.users;
                //draft.isLoading=true;
                break;
            case GET_USER_SUCCESS:
               
                draft.isReg=true;
                break;
            case GET_USER_FAILURE:
                draft.isReg=false;
                draft.error=action.error;
                break;

            case CHANGE_INPUT:
                draft[action.fieldName]= action.fieldValue;
                 break;
        }
    });

