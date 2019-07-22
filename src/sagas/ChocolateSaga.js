import {put } from "redux-saga/effects";
import { getChocolateSuccess, getChocolateFailure } from "../actionCreators/chocolateAC";

export function* getChocolate()
{
    try
    {
        let chocolateResponse =yield fetch(`http://localhost:4000/chocolates`);
        let chocolates =yield chocolateResponse.json();
        yield put(getChocolateSuccess(chocolates));
    } catch(err) {
        yield put(getChocolateFailure(err));
    }
}