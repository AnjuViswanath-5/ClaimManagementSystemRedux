export const FETCH_CLAIMS_BEGIN = 'FETCH_CLAIMS_BEGIN';
export const FETCH_CLAIMS_SUCCESS = 'FETCH_CLAIMS_SUCCESS';
export const FETCH_CLAIMS_ERROR = 'FETCH_CLAIMS_ERROR';
import axios from 'axios'

export function fetchClaimList() {
    return async dispatch => {
      dispatch(fetchClaimsBegin());
      try {
            const res = await axios
                .get(`http://localhost:7000/claims`);
            //console.log('DATA', res);
            dispatch(fetchClaimsSuccess(res.data));
            return res.data;
        }
        catch (error) {
            return dispatch(fetchClaimsError(error));
        }
    };
  }
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
export function fetchClaimsBegin() {
    return {
        type: FETCH_CLAIMS_BEGIN
    }
}

export function fetchClaimsSuccess(data) {
    return {
        type: FETCH_CLAIMS_SUCCESS,
        payload: {data}
    }
}

export function fetchClaimsError(error) {
    return {
        type: FETCH_CLAIMS_ERROR,
        payload: {error}
    }
}
// import axios from 'axios';

//   export function GetClaimList() {
//     return function(dispatch) {
//         return axios("http://localhost:7000/claims/list")
//         .then(response => response.data)
//         .then(data => {
//           dispatch({ type: "GET_CLAIMS", payload: data });
//         });
//     };
//   }