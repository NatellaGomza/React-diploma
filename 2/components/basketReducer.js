const initState = [];

function counterReducer(state=initState,action, newProduct) {
console.log(action.payload)
let item = action.payload
    switch (action.type) {
  
      case "addToCart": {
        let newState=[...state, item];
        return newState;
      }
      
      case "deleteFromCart": {
        console.log('state до обработки редьюсером:',state);
        let newState={...state};
        newState.cnt--;
        console.log('state после обработки редьюсером:',newState);
        return newState;
      }
  
      default:
        return state;
    }
  }
  
  export default counterReducer;
