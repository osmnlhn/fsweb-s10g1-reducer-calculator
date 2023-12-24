import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  RESET,
  M_PLUS,
  M_REVERT,
  M_CLEAR,
} from "./../actions";

export const initialState = {
  total: 0,
  operation: "+",
  memory: 0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    default:
      return;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        total: state.total + 1,
      };

    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
      };

    case RESET:
      return initialState;

    case M_PLUS:
      return {
        ...state,
        memory: state.total,
      };
    case M_REVERT:
      return {
        ...state,
        total: state.memory,
      };
    case M_CLEAR:
      return {
        ...state,
        memory: initialState.memory,
      };

    default:
      return state;
  }
};

export default reducer;