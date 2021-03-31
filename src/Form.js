import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap/";

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: "",
      miles: 0,
      startTime: 0,
      endTime: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      rate: "",
      miles: 0,
      startTime: 0,
      endTime: 0,
    });
    console.log("submitted state", this.state);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
                value={this.state.rate}
                onChange={this.handleChange}
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
                value={this.state.miles}
                onChange={this.handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <label htmlFor="startTime">Charging times:</label>
              <select
                name="startTime"
                id="startTime"
                value={this.state.value}
                onChange={this.handleChange}
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
                value={this.state.value}
                onChange={this.handleChange}
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
  }
}
