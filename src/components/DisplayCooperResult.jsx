import React from 'react';
import cooperCalculator from "../modules/cooperCalculator";
import saveData from "../modules/performanceData";

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
        <>
          <p id="cooper-message">
            {age} year old {gender} running {distance} meters.
          </p>
          <p id="cooper-result">Result: {calculate()}</p>
          {authenticated && !entrySaved ? (
            <button
            id="save-result"
            onClick={() => saveData(result, entryHandler)}
            >
              Save Entry
            </button>
          ) : (
            <p id="response-message">Your entry was saved</p>
          )}
        </>
      )}
    </>
  );
};

export default DisplayCooperResult;
