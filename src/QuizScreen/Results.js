import { Container, Typography } from "@material-ui/core";
import React from "react";

const Results = ({ score, numberOfQuestions }) => {
  return (
    <Container className="questions-container">
      <Typography>
        Your score: {score} / {numberOfQuestions}
      </Typography>
      <Typography>{score > 5 ? "You did it!" : "You suck!"}</Typography>
    </Container>
  );
};

export default Results;
