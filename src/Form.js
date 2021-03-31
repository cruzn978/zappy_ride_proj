import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap/";

const makeOptions = (opts) => {
  for (let i = 0; i < opts.length; i++) {
    const amOrPm = i > 11 ? "PM" : "AM";
    let hour = "";
    if (!i) hour = "12";
    else if (i > 12) hour = (i - 12).toString();
    else hour = i.toString();
    const time = `${hour}:00 ${amOrPm}`;
    console.log("time results:", time, hour);
    opts[i] = { val: i.toString(), time: time };
  }
  return opts;
};

const options = makeOptions(Array(24));

const EVBillForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <Container>
        <Row>
          <Col className="center">
            <label htmlFor="rate">
              <h3>Choose a rate:</h3>
            </label>
          </Col>
        </Row>
        <Row>
          <Col className="center end-row">
            <select
              name="rate"
              id="rate"
              value={props.rate}
              onChange={props.handleChange}
            >
              <option value="">--Select rate--</option>
              <option value="A">Rate A</option>
              <option value="B">Rate B</option>
            </select>
          </Col>
        </Row>
        <Row>
          <Col className="center">
            <label htmlFor="miles">
              <h3>Miles driven yearly:</h3>
            </label>
          </Col>
        </Row>
        <Row>
          <Col className="center end-row">
            <input
              type="number"
              id="miles"
              name="miles"
              min="1"
              value={props.miles}
              onChange={props.handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col className="center">
            <label htmlFor="startTime">
              <h3>Charging times:</h3>
            </label>
          </Col>
        </Row>
        <Row>
          <Col className="center end-row">
            <select
              name="startTime"
              id="startTime"
              value={props.startTime}
              onChange={props.handleChange}
            >
              <option value="">--Choose a start time--</option>
              {options.map((option) => (
                <option value={option.val}>{option.time}</option>
              ))}
            </select>
            <select
              name="endTime"
              id="endTime"
              value={props.endTime}
              onChange={props.handleChange}
            >
              <option value="">--Choose an end time--</option>
              {options.map((option) => (
                <option value={option.val}>{option.time}</option>
              ))}
            </select>
          </Col>
        </Row>
        <Row>
          <Col className="center">
            <button
              type="submit"
              value="Submit"
              class="btn btn-outline-success btn-pill"
            >
              Submit
            </button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};
export default EVBillForm;
