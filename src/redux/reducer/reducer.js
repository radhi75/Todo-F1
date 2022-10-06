const initialState = {
  todos: [
    { id: Math.random(), text: "learn redux", isComplit: false },
    { id: Math.random(), text: "learn react", isComplit: false },
  ],
};

const reducer = (state = initialState, action) => {
  return state;
};
export default reducer;
