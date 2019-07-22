import {put } from "redux-saga/effects";
import { getBrandSuccess, getBrandFailure } from "../actionCreators/chocolateAC";

export function* getBrand()
{
    try
    {
        let brandResponse =yield fetch(`http://localhost:4000/brands`);
        let brands =yield brandResponse.json();
        yield put(getBrandSuccess(brands));
    } catch(err) {
        yield put(getBrandFailure(err));
    }
}