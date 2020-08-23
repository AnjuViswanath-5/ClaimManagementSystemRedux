import axios from 'axios';

  export function GetClaimList() {
    return function(dispatch) {
        return axios("http://localhost:7000/claims/list")
        .then(response => response.data)
        .then(data => {
          dispatch({ type: "GET_CLAIMS", payload: data });
        });
    };
  }