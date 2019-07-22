import produce from "immer";
import {GET_CHOCOLATEBYBRAND, GET_CHOCOLATEBYBRAND_SUCCESS, GET_CHOCOLATEBYBRAND_FAILURE } from "../actionTypes/chocolateAT";
const initialState= { isLoading: false, id:"", chocolates:[]};

export default(prevState=initialState, action) =>

    produce(prevState, draft => {
        switch(action.type) {
            case GET_CHOCOLATEBYBRAND:
                draft.id=action.id;
                draft.isLoading=true;
                break;
            case GET_CHOCOLATEBYBRAND_SUCCESS:
                draft.chocolates=action.chocolates;
                draft.isLoading=false;
                break;
            case GET_CHOCOLATEBYBRAND_FAILURE:
                draft.isLoading=false;
                draft.error=action.error;
                break;
        }
    });

