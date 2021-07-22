import React from "react";
import { Container } from "@material-ui/core";
import "./Questions.css";

const Questions = ({ question }) => {
  return (
    <Container className="questions-container">
      <h5 dangerouslySetInnerHTML={{ __html: question }}></h5>
    </Container>
  );
};

export default Questions;
