import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap/";
import calcEVBillA from './addEVBillA'
import calcEVBillB from './addEVBillB'

const Results = (props) => {
  const { rate, miles, startTime, endTime, handleReset } = props
  const rateA = calcEVBillA(Number(miles), Number(startTime), Number(endTime))
  const rateB = calcEVBillB(Number(miles), Number(startTime), Number(endTime))
  let currentRateCost = (rate === "A") ? rateA : rateB
  let otherRateCost = (rate === "A") ? rateB : rateA
  let rateSuggestion = currentRateCost > otherRateCost ? true : false
  let otherRate = (rate === "A") ? "B" : "A"
  return (
    <div>
      <p>Your Current Rate: {currentRateCost}</p>
      {rateSuggestion && <p>Rate {otherRate}: {otherRateCost}</p>}
      <button onClick={handleReset}>Start Over</button>
    </div>
  );
};
export default Results
