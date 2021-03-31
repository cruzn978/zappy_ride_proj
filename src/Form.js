import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap/";

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Container>
        <Row>
          <Col>EV bill cost</Col>
        </Row>
        <Row>
          <Col>
            <label htmlFor="rate">Choose a rate:</label>
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
          <Col>
            <label htmlFor="miles">Miles driven yearly:</label>
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
          <Col>
            <label htmlFor="startTime">Charging times:</label>
            <select
              name="startTime"
              id="startTime"
              value={props.value}
              onChange={props.handleChange}
            >
              <option value="">--Please choose a start time--</option>
              <option value="0">12:00 AM</option>
              <option value="1">1:00 AM</option>
              <option value="2">2:00 AM</option>
              <option value="3">3:00 AM</option>
              <option value="4">4:00 AM</option>
              <option value="5">5:00 AM</option>
              <option value="6">6:00 AM</option>
              <option value="7">7:00 AM</option>
              <option value="8">8:00 AM</option>
              <option value="9">9:00 AM</option>
              <option value="10">10:00 AM</option>
              <option value="11">11:00 AM</option>
              <option value="12">12:00 PM</option>
              <option value="13">1:00 PM</option>
              <option value="14">2:00 PM</option>
              <option value="15">3:00 PM</option>
              <option value="16">4:00 PM</option>
              <option value="17">5:00 PM</option>
              <option value="18">6:00 PM</option>
              <option value="19">7:00 PM</option>
              <option value="20">8:00 PM</option>
              <option value="21">9:00 PM</option>
              <option value="22">10:00 PM</option>
              <option value="23">11:00 PM</option>
            </select>
            <select
              name="endTime"
              id="endTime"
              value={props.value}
              onChange={props.handleChange}
            >
              <option value="">--Please choose an end time--</option>
              <option value="0">12:00 AM</option>
              <option value="1">1:00 AM</option>
              <option value="2">2:00 AM</option>
              <option value="3">3:00 AM</option>
              <option value="4">4:00 AM</option>
              <option value="5">5:00 AM</option>
              <option value="6">6:00 AM</option>
              <option value="7">7:00 AM</option>
              <option value="8">8:00 AM</option>
              <option value="9">9:00 AM</option>
              <option value="10">10:00 AM</option>
              <option value="11">11:00 AM</option>
              <option value="12">12:00 PM</option>
              <option value="13">1:00 PM</option>
              <option value="14">2:00 PM</option>
              <option value="15">3:00 PM</option>
              <option value="16">4:00 PM</option>
              <option value="17">5:00 PM</option>
              <option value="18">6:00 PM</option>
              <option value="19">7:00 PM</option>
              <option value="20">8:00 PM</option>
              <option value="21">9:00 PM</option>
              <option value="22">10:00 PM</option>
              <option value="23">11:00 PM</option>
            </select>
          </Col>
        </Row>
        <Row>
          <Col>
            <input type="submit" value="Submit" />
          </Col>
        </Row>
      </Container>
    </form>
  );
};
export default Form
