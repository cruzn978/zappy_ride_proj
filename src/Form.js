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
              <option value="12:00 AM">12:00 AM</option>
              <option value="1:00 AM">1:00 AM</option>
              <option value="2:00 AM">2:00 AM</option>
              <option value="3:00 AM">3:00 AM</option>
              <option value="4:00 AM">4:00 AM</option>
              <option value="5:00 AM">5:00 AM</option>
              <option value="6:00 AM">6:00 AM</option>
              <option value="7:00 AM">7:00 AM</option>
              <option value="8:00 AM">8:00 AM</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="7:00 PM">7:00 PM</option>
              <option value="8:00 PM">8:00 PM</option>
              <option value="9:00 PM">9:00 PM</option>
              <option value="10:00 PM">10:00 PM</option>
              <option value="11:00 PM">11:00 PM</option>
            </select>
            <select
              name="endTime"
              id="endTime"
              value={props.value}
              onChange={props.handleChange}
            >
              <option value="">--Please choose an end time--</option>
              <option value="12:00 AM">12:00 AM</option>
              <option value="1:00 AM">1:00 AM</option>
              <option value="2:00 AM">2:00 AM</option>
              <option value="3:00 AM">3:00 AM</option>
              <option value="4:00 AM">4:00 AM</option>
              <option value="5:00 AM">5:00 AM</option>
              <option value="6:00 AM">6:00 AM</option>
              <option value="7:00 AM">7:00 AM</option>
              <option value="8:00 AM">8:00 AM</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="7:00 PM">7:00 PM</option>
              <option value="8:00 PM">8:00 PM</option>
              <option value="9:00 PM">9:00 PM</option>
              <option value="10:00 PM">10:00 PM</option>
              <option value="11:00 PM">11:00 PM</option>
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
