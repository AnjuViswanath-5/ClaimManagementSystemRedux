import{createStore} from 'redux';

const reducer=(state,action)=>{
    switch(action.type){
        case "ADD":
            state=state+action.payload;
            break;
        case "SUBSTRACT":
        state=state-action.payload;
        break;
    }
    return state;
};

const store=createStore(reducer,1);
//View Part used in React --subscribe methods
//later handled by react.js
store.subscribe(()=>
console.log("store updated-->",JSON.stringify(store.getState()))
);

//Action and payload using dispatcher
store.dispatch({
    type:'ADD',
    payload: 10
})