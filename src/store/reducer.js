// create the initial state

const initialState = {
  counter: 21
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === 'ADD') {
    newState.counter++;
  }
  if (action.type === 'SUBTRACT') {
    newState.counter--;
  }
  return newState;
};

export default reducer;
