import React from 'react';
import cooperCalculator from "../modules/cooperCalculator";
import { saveData } from "../modules/performanceData";
import { Message , Container } from 'semantic-ui-react'

const DisplayCooperResult = ({
  distance,
  gender,
  age,
  authenticated,
  entrySaved,
  entryHandler
 }) => {
  const result = cooperCalculator(distance, gender, age);

  const propsPassed = distance && age ? true : false;

  return (
    <>
      {propsPassed && (
        <Container>
          <Message 
            id="cooper-message"
            icon=''
          > 
            <Message.Header>Your Results</Message.Header>
              <Message.Item>{`${age} year old ${gender} running ${distance} meters.`}</Message.Item>
              <Message.Item>{`Result: ${result}`}</Message.Item>
          </Message>
          <p id="cooper-result">Result: {result}</p>
          {authenticated && !entrySaved ? (
            <button
            id="save-result"
            onClick={() => saveData(result, entryHandler)}
            >
              Save Entry
            </button>
          ) :  
           ( 
            <p id="response-message">Your entry was saved</p>
          )}
        </Container>
      )}
    </>
  );
};

export default DisplayCooperResult;
