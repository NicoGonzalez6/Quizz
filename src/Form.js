import React, { useState } from "react";
import politic from "./assets/politic.png";
import history from "./assets/history.png";
import sports from "./assets/sports.png";
import easy from "./assets/easy.jpg";
import medium from "./assets/medium.jpg";
import hard from "./assets/hard.jpg";
import { useGlobalContext } from "./Context";

const Form = () => {
  const {
    categoryHandler,
    category,
    difficultHandler,
    difficulty,
    submitHandler,
    amountHandler,
    error,
  } = useGlobalContext();

  const [value, setValue] = useState("");

  return (
    <main className="form-container">
      <div className="cateogry-Container">
        <div className="title">
          <h1>Welcome to the quiz APP</h1>
          <h3>Please select your category</h3>
        </div>
        <div className="cateogry-form">
          <div className="categoryIMG">
            <img
              src={politic}
              className="politic"
              id="politics"
              name="politics"
              alt="politicsIMG"
              onClick={(e) => {
                categoryHandler(e.target.name);
              }}
            ></img>
            <label htmlFor="politic">Politics</label>
          </div>
          <div className="categoryIMG">
            <img
              src={history}
              className="history"
              id="history"
              name="history"
              alt="historyIMG"
              onClick={(e) => {
                categoryHandler(e.target.name);
              }}
            ></img>
            <label htmlFor="history">history</label>
          </div>
          <div className="categoryIMG">
            <img
              src={sports}
              className="sports"
              id="sports"
              name="sports"
              alt="sportsIMG"
              onClick={(e) => {
                categoryHandler(e.target.name);
              }}
            ></img>
            <label htmlFor="sports">sports</label>
          </div>
        </div>
        <div className="chosen">
          {category ? <p>category chosen {category}</p> : null}
        </div>
      </div>
      <div className="difficulty">
        <div className="title-difficulty">
          <h3>Please select the difficulty</h3>
        </div>
        <div className="form-dificulty">
          <div className="DificultyImg">
            <img
              src={easy}
              alt="easyImg"
              name="easy"
              onClick={(evt) => {
                difficultHandler(evt.target.name);
              }}
            ></img>
            <label htmlFor="Easy">Easy</label>
          </div>
          <div className="DificultyImg">
            <img
              src={medium}
              alt="MediumImg"
              name="medium"
              onClick={(evt) => {
                difficultHandler(evt.target.name);
              }}
            ></img>
            <label htmlFor="Medium">Medium</label>
          </div>
          <div className="DificultyImg">
            <img
              src={hard}
              alt="HardImg"
              name="hard"
              onClick={(evt) => {
                difficultHandler(evt.target.name);
              }}
            ></img>
            <label htmlFor="Hard">Hard</label>
          </div>
        </div>
        <div className="chosen">
          {difficulty ? <p>difficulty chosen {difficulty}</p> : null}
        </div>
      </div>
      <form className="submit-form" onSubmit={submitHandler}>
        <label>Chose the amount of questions!</label>
        <input
          type="number"
          min={5}
          max={20}
          value={value}
          onChange={(evt) => {
            setValue(evt.target.value);
            amountHandler(evt.target.value);
          }}
        ></input>
        <div className="chosen">
          {value ? <p>{value} question chosen!</p> : null}
        </div>
        <button className="btn-form">Start the quiz!</button>
      </form>
      {error ? (
        <p className="error-text">
          please, check if all the values are complete
        </p>
      ) : null}
    </main>
  );
};

export default Form;
