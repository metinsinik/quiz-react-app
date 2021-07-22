import React from "react";

const Score = ({ score, numberOfQuestions }) => {
  return (
    <h5>
      Score: {score}/{numberOfQuestions}
    </h5>
  );
};

export default Score;
