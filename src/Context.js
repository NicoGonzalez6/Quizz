import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
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
import axios from "axios";
const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const AppContext = React.createContext();

const initialState = {
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

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const categoryHandler = (name) => {
    dispatch({ type: SET_CATEGORY, payload: name });
  };

  const difficultHandler = (difficulty) => {
    dispatch({ type: SET_DIFFICULTY, payload: difficulty });
  };

  const amountHandler = (amount) => {
    dispatch({ type: SET_AMOUNT, payload: amount });
  };

  const answerHandler = (answer, correct) => {
    if (answer === correct) {
      dispatch({ type: SET_CORRECT });
    }
    iQuestionHandler();
  };

  const iQuestionHandler = () => {
    dispatch({ type: SET_NXTQUESTION });
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    if (state.category && state.difficulty && state.amount) {
      const URL = ` https://opentdb.com/api.php?amount=${
        state.amount
      }&category=${table[state.category]}&difficulty=${
        state.difficulty
      }&type=multiple`;
      fetchQuestions(URL);
      dispatch({ type: SET_ERROR, payload: false });
      dispatch({ type: SET_WAITING, payload: false });
    } else {
      dispatch({ type: SET_ERROR, payload: true });
    }
  };

  const fetchQuestions = async (url) => {
    dispatch({ type: SET_LOADING, payload: true });
    const response = await axios(url).catch((err) => console.log(err));
    if (response) {
      const info = response.data.results;
      if (info.length > 1) {
        dispatch({ type: SET_LOADING, payload: false });
        dispatch({ type: SET_QUESTIONS, payload: info });
      }
    }
  };

  const resetHandler = () => {
    dispatch({ type: SET_RESET });
  };

  return (
    <AppContext.Provider
      value={{
        resetHandler,
        answerHandler,
        iQuestionHandler,
        categoryHandler,
        ...state,
        difficultHandler,
        submitHandler,
        amountHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
