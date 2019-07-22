import produce from "immer";
import { GET_CHOCOLATE, GET_CHOCOLATE_SUCCESS, GET_CHOCOLATE_FAILURE } from "../actionTypes/chocolateAT";
const initialState= { chocolates:[], isLoading: false};

export default(prevState=initialState, action) =>

    produce(prevState, draft => {
        switch(action.type) {
            case GET_CHOCOLATE:
               //draft.chocolates=action.chocolates;
                draft.isLoading=true;
                break;
            case GET_CHOCOLATE_SUCCESS:
                draft.chocolates=action.chocolates;
                draft.isLoading=false;
                break;
            case GET_CHOCOLATE_FAILURE:
                draft.isLoading=false;
                draft.error=action.error;
                break;
        }
    });

