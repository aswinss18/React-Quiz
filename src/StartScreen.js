import React from "react";

export default function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React Mastery</h3>
      <button className="btn btn-ui">Let's start</button>
    </div>
  );
}
