const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const temp = () => ({ type: TEMP });

const initialState = 0;
const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log("인크리먼트!");
      console.log(state);
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counter;
