import {put } from "redux-saga/effects";
import { getChocolatebybrandSuccess, getChocolatebybrandFailure } from "../actionCreators/chocolateAC";

export function* getChocolatebybrand(action)
{
    try
    {
        let chocolatebybrandResponse =yield fetch(`http://localhost:4000/chocolates/?brandId=${action.id}`);
        let chocolates =yield chocolatebybrandResponse.json();
        console.log(chocolates)
        yield put(getChocolatebybrandSuccess(chocolates));
    } catch(err) {
        yield put(getChocolatebybrandFailure(err));
    }
}