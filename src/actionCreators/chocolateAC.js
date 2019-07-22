import { GET_CHOCOLATE, GET_CHOCOLATE_SUCCESS, GET_CHOCOLATE_FAILURE, 
    GET_BRAND, GET_BRAND_SUCCESS, GET_BRAND_FAILURE, CHANGE_INPUT, 
    GET_USER, GET_USER_SUCCESS, GET_USER_FAILURE, GET_CHOCOLATEBYBRAND, GET_CHOCOLATEBYBRAND_SUCCESS, GET_CHOCOLATEBYBRAND_FAILURE, GET_LOGIN, GET_LOGIN_SUCCESS, GET_LOGIN_FAILURE, GET_SEARCH, GET_SEARCH_SUCCESS, GET_SEARCH_FAILURE, GET_LOGOUT
   } from "../actionTypes/chocolateAT";

export function getChocolateAC() {
    return {type : GET_CHOCOLATE}
}

export function getChocolateSuccess(chocolates) {
    return { type :GET_CHOCOLATE_SUCCESS, chocolates};
}

export function getChocolateFailure(error) {
    return { type: GET_CHOCOLATE_FAILURE, error};
}


export function getBrandAC() {
    return {type : GET_BRAND}
}

export function getBrandSuccess(brands) {
    return { type :GET_BRAND_SUCCESS, brands};
}

export function getBrandFailure(error) {
    return { type: GET_BRAND_FAILURE, error};
}

export function changeInput(fieldName, fieldValue) {
    return { type: CHANGE_INPUT, fieldName, fieldValue };
}


export function getUserAC(users) {
    return {type : GET_USER, users}
}

export function getUserSuccess() {
    return { type :GET_USER_SUCCESS};
}

export function getUserFailure(error) {
    return { type: GET_USER_FAILURE, error};

}

export function getChocolatebybrandAC(id)
{
    return{ type:GET_CHOCOLATEBYBRAND, id};
}

export function getChocolatebybrandSuccess(chocolates)
{
    return{ type: GET_CHOCOLATEBYBRAND_SUCCESS,chocolates};
}

export function getChocolatebybrandFailure(error)
{
    return {
        type:GET_CHOCOLATEBYBRAND_FAILURE, error
    };
}


export function getLoginAC(email,password) {
    return {type : GET_LOGIN, email,password}
}



export function getLoginSuccess() {
    return {type : GET_LOGIN_SUCCESS}
}

export function getLoginFailure(error) {
    return {type : GET_LOGIN_FAILURE, error}
}

export function getSearchAC(name) {
    return {type : GET_SEARCH, name}
}

export function getSearchSuccess() {
    return {type : GET_SEARCH_SUCCESS}
}

export function getSearchFailure(error) {
    return {type : GET_SEARCH_FAILURE, error}
}

export function getLogout() {
    return {type : GET_LOGOUT}
}





