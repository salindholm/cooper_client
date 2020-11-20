import React from 'react';
import cooperCalculator from "../modules/cooperCalculator";
import { saveData } from "../modules/performanceData";
import { Message , Button, Icon, Container } from 'semantic-ui-react'

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
          > 
            <Message.Header><Icon name='flag checkered'/>Your Results</Message.Header>
              <Message.Item >{`${age} year old ${gender} running ${distance} meters.`}</Message.Item>
              <Message.Item >{`Result: ${result}`}</Message.Item>
          </Message>
          {authenticated && !entrySaved ? (
            <Button primary
            id="save-result"
            onClick={() => saveData(result, age, distance, entryHandler)}
            >
              Save Entry
            </Button>
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
