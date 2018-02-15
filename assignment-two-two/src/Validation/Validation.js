import React from 'react';

const validation = (props) => {
  let validationText = "Your text is long enough";

  if (props.inputLength <= 5) {
    validationText = "Your text is not not long enough";
  }

  return (
    <div>
      <p>{validationText}</p>
    </div>
  );
};


export default validation;