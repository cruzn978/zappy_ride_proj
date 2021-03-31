import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap/";
import calcEVBillA from './addEVBillA'
import calcEVBillB from './addEVBillB'

const Results = (props) => {
  const { rate, miles, startTime, endTime } = props
  const rateA = calcEVBillA(Number(miles), Number(startTime), Number(endTime))
  const rateB = calcEVBillB(Number(miles), Number(startTime), Number(endTime))

  return (
    <div>
      <p>{rateA}</p>
      <p>{rateB}</p>

      {/* <p>{miles}</p>
      <p>{startTime}</p>
      <p>{endTime}</p> */}
    </div>

  );
};
export default Results
