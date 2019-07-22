import produce from "immer";
import { CHANGE_INPUT,GET_SEARCH, GET_SEARCH_SUCCESS, GET_SEARCH_FAILURE } from "../actionTypes/chocolateAT";
const initialState= { name:""};

export default (prevState=initialState, action) =>

    produce(prevState, draft => {
        switch(action.type) {
            case GET_SEARCH:
                draft.name=action.name;
                break;
            case GET_SEARCH_SUCCESS:
                break;
            case GET_SEARCH_FAILURE:
                draft.error=action.error;
                break;
            case CHANGE_INPUT:
                draft[action.fieldName]= action.fieldValue;
                 break;
        }
    });

