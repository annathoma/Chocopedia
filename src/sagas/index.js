import { takeLatest,all } from "redux-saga/effects";
import { GET_CHOCOLATE, GET_BRAND, GET_USER, GET_CHOCOLATEBYBRAND, GET_LOGIN } from "../actionTypes/chocolateAT";
import { getChocolate } from "./ChocolateSaga";
import { getBrand } from "./BrandSaga";
import { getUser } from "./UserSaga";
import { getChocolatebybrand } from "./ChocolateByBrand";
import { getLogin } from "./LoginSaga";




export function* chocolateWatcherSaga()
{
    yield all([ 
        takeLatest(GET_CHOCOLATE, getChocolate),
        takeLatest(GET_BRAND, getBrand),
        takeLatest(GET_USER, getUser),
        takeLatest(GET_CHOCOLATEBYBRAND, getChocolatebybrand),
        takeLatest(GET_LOGIN, getLogin)
    ]);
}