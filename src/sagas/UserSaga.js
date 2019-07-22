import {put } from "redux-saga/effects";
import {getUserSuccess, getUserFailure } from "../actionCreators/chocolateAC";
/*try
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
*/
export function* getUser(action)
{      
  try {
      let userResponse= 
        fetch(`http://localhost:4000/users`, {
            method: "POST",
            body: JSON.stringify(action.users),
            headers: {
              "Content-Type": "application/json"
            }
          } );
          console.log(userResponse);
         // let user = yield userResponse.json()
          if(userResponse.length==0)
          {
              alert("Try again");
          }
          else{
              yield put(getUserSuccess(userResponse));
              alert("Success");
          }

        }catch(err) {
          yield put(getUserFailure(err));
        }

          /*
          if(user.id !=null || user.id!="")
          {
              console.log("success")
            yield put(getUserSuccess(user));
          }
          else{
            yield put(getUserFailure(user));
          }
*/
}