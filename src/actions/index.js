export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const RESET = "RESET";

export const M_PLUS = "M_PLUS";
export const M_CLEAR = "M_CLEAR";
export const M_REVERT = "M_REVERT";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};

export const reset = () => {
  return { type: RESET };
};

export const m_plus = () => {
  return { type: M_PLUS };
};

export const m_revert = () => {
  return { type: M_REVERT };
};

export const m_clear = () => {
  return { type: M_CLEAR };
};