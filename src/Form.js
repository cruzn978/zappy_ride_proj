import React from "react";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap/";

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
          <Col className="center end-row" >
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control
                required
                as="select"
                name="rate"
                id="rate"
                value={props.rate}
                onChange={props.handleChange}
              >
                <option value="">Select rate</option>
                <option value="A">Rate A</option>
                <option value="B">Rate B</option>
              </Form.Control>
            </Form.Group>
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
            <FormControl
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
          <Col className="center">
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control
                required
                as="select"
                name="startTime"
                id="startTime"
                value={props.startTime}
                onChange={props.handleChange}
              >
                <option value="">Choose an start time</option>
                {options.map((option) => (
                  <option value={option.val}>{option.time}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control
                required
                as="select"
                name="endTime"
                id="endTime"
                value={props.endTime}
                onChange={props.handleChange}
              >
                <option value="">Choose an end time</option>
                {options.map((option) => (
                  <option value={option.val}>{option.time}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="center end-row">
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
