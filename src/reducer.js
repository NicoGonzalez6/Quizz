import {
  SET_CATEGORY,
  SET_DIFFICULTY,
  SET_AMOUNT,
  SET_ERROR,
  SET_WAITING,
  SET_LOADING,
  SET_QUESTIONS,
  SET_NXTQUESTION,
  SET_CORRECT,
  SET_RESET,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return { ...state, category: action.payload };
    case SET_DIFFICULTY:
      return { ...state, difficulty: action.payload };
    case SET_AMOUNT:
      return { ...state, amount: 1 + parseInt(action.payload, 10) };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_WAITING:
      return { ...state, waiting: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_QUESTIONS:
      return { ...state, questions: action.payload };
    case SET_NXTQUESTION:
      return { ...state, value: state.value + 1 };
    case SET_CORRECT:
      return { ...state, correct: state.correct + 1 };
    case SET_RESET:
      return {
        ...state,
        category: "",
        difficulty: "",
        amount: "",
        waiting: true,
        error: false,
        loading: false,
        questions: [],
        value: 0,
        correct: 0,
      };
    default:
      throw new Error(`no mathching "${action.type}" action type`);
  }
};

export default reducer;
