const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };

    case "reset":
      return { ...state, count: 0 };

    case "increaseBy":
        return{...state,count:state.count+action.payload}
    case "decreaseBy":
        return{...state,count:state.count-action.payload}
  }
};

export { initialState, counterReducer };