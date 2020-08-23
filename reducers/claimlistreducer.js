

const initialState = {
  claimList: []
};

function rootReducer(state = initialState, action) {
 
  if (action.type === "GET_CLAIMS") {
    return Object.assign({}, state, {
      //claimList: state.claimList.concat(action.payload)
      claimList:action.payload
    });
  }
  return state;
}
export default rootReducer;

