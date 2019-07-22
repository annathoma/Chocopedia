import produce from "immer";
import { GET_BRAND, GET_BRAND_SUCCESS, GET_BRAND_FAILURE } from "../actionTypes/chocolateAT";
const initialState= { brands:[], isLoading: false};

export default(prevState=initialState, action) =>

    produce(prevState, draft => {
        switch(action.type) {
            case GET_BRAND:
                draft.isLoading=true;
                break;
            case GET_BRAND_SUCCESS:
                draft.brands=action.brands;
                draft.isLoading=false;
                break;
            case GET_BRAND_FAILURE:
                draft.isLoading=false;
                draft.error=action.error;
                break;
        }
    });

