import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import Header from "./Header";
import Questions from "./Questions";
import Answers from "./Answers";
import Score from "./Score";
import Results from "./Results";
import config from "../config";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./QuizScreen.css";

const QuizScreen = () => {
  const [quiz, setQuiz] = useState([]);
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    async function loadAllQuestions() {
      console.log("Response will be fetched ");
      const response = await fetch(config.apiUrl);
      const results = await response.json();
      const quiz = results.results;
      setQuiz(quiz);
      setDone(false);
    }
    loadAllQuestions();
  }, []);

  useEffect(() => {
    const loadQuestion = () => {
      const content = quiz[questionIndex];
      if (content) {
        setQuestion(content.question);

        const correctAnswer = content.correct_answer;
        let choices = content.incorrect_answers;
        choices.push(correctAnswer);
        choices = shuffle(choices);
        setAnswers(choices);
      }
    };
    loadQuestion();
  }, [quiz, questionIndex]);

  const shuffle = (array) => {
    var currentIndex = array.length,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  const onChoice = (answer) => {
    const content = quiz[questionIndex];
    const correntAnswer = content.correct_answer;
    if (correntAnswer === answer) {
      setScore(score + 1);
    }
    if (questionIndex + 1 === quiz.length) {
      setDone(true);
    }
    setQuestionIndex(questionIndex + 1);
  };
  return (
    <Container className="quiz-container">
      <Header index={questionIndex} done={done}></Header>
      {!done ? (
        <>
          {!question ? (
            <CircularProgress />
          ) : (
            <>
              <Questions question={question}></Questions>
              <Answers answers={answers} onChoice={onChoice}></Answers>
            </>
          )}
        </>
      ) : (
        <Results score={score} numberOfQuestions={(quiz && quiz.length) || 0} />
      )}

      <Score
        score={score}
        numberOfQuestions={(quiz && quiz.length) || 0}
      ></Score>
    </Container>
  );
};

export default QuizScreen;
