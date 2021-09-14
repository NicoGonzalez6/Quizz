import React from "react";
import { useGlobalContext } from "./Context";
import Loading from "./Loading";

const Questions = () => {
  const {
    loading,
    questions,
    value,
    iQuestionHandler,
    answerHandler,
    correct,
    resetHandler,
  } = useGlobalContext();

  if (loading) {
    return (
      <section className="questions-container">
        <div className="loaderr">
          <Loading></Loading>
        </div>
      </section>
    );
  }

  if (questions.length >= 1) {
    const { question, incorrect_answers, correct_answer } = questions[value];

    const answers = [...incorrect_answers];
    const newIndex = Math.floor(Math.random() * 4);

    if (newIndex === 3) {
      answers.push(correct_answer);
    } else {
      answers.push(answers[newIndex]);
      answers[newIndex] = correct_answer;
    }

    const info = questions.length;
    if (value >= questions.length - 1) {
      return (
        <section className="end-container">
          <h1 className="title-end">Congrats!</h1>
          <p className="par-end">
            {Math.round((correct / (info - 1)) * 100)}% of the questions
            answered correctly
          </p>
          <button className="btn-end" onClick={resetHandler}>
            Play Again
          </button>
        </section>
      );
    }

    return (
      <section className="questions-container">
        <h1
          dangerouslySetInnerHTML={{ __html: question }}
          className="question"
        />
        <div className="answers">
          {answers.map((answer, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  answerHandler(answer, correct_answer, info);
                }}
                dangerouslySetInnerHTML={{ __html: answer }}
                className="question-btn"
              ></button>
            );
          })}
          <button
            className="next-btn"
            onClick={() => {
              iQuestionHandler();
            }}
          >
            Skip Question
          </button>
        </div>
      </section>
    );
  }

  return <section className="questions-container"></section>;
};

export default Questions;
