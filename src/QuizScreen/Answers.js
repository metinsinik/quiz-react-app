import React from "react";
import { Container, Button } from "@material-ui/core";
import "./Answers.css";

const Answers = ({ answers, onChoice }) => {
  const Choice = ({ answer }) => {
    return (
      <Button
        className="choice-button"
        variant="contained"
        size="small"
        onClick={() => onChoice(answer)}
      >
        {answer}
      </Button>
    );
  };
  return (
    <Container className="answers-container">
      {answers &&
        answers.map((answer, index) => <Choice key={index} answer={answer} />)}
    </Container>
  );
};

export default Answers;
