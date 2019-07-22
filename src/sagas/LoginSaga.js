import {put} from "redux-saga/effects";
import { getLoginSuccess, getLoginFailure } from "../actionCreators/chocolateAC";
import {Redirect  } from "react-router-dom";
import Login from "../components/Login";
import NavBar from "../components/NavBar";

export function* getLogin(action)
{
        try
        {
            let loginResponse =yield fetch(`http://localhost:4000/users/?email=${action.email}&password=${action.password}`);
            let login =yield loginResponse.json();
            console.log(login);
            if(login.length==0)
            {
                alert("Invalid email or password");
            }
            else{
                
                yield put(getLoginSuccess(login));
                
            }
           
          
        } catch(err) {
                yield put(getLoginFailure(err));
        }
}