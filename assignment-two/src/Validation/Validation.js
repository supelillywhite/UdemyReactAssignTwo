import React from 'react';

const validation = (props) => {
  let validationMessage = "Text long enough";
  let validationMessageChecker = "You guessed my magic message!";

  if (props.inputLength <= 5) {
    validationMessage = "Text too short";
  }

  if (props.inputText !== "Nice guess fool") {
    validationMessageChecker = "You did not guess my magic message!";
  }

  return (
    <div>
      <p>{validationMessage}</p>
      <p>{validationMessageChecker}</p>
    </div>
  );
};

export default validation;