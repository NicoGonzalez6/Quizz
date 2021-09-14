import React from "react";
import { useGlobalContext } from "./Context";
import Form from "./Form";
import "./index.css";
import Questions from "./Questions";

const App = () => {
  const { waiting } = useGlobalContext();

  return (
    <main className="main-Container">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      {waiting ? <Form></Form> : null}
      {!waiting ? <Questions></Questions> : null}
    </main>
  );
};

export default App;
