// import logo from './logo.svg';
import React from 'react'
import EVBillForm from './Form'
import { Container, Row, Col } from "react-bootstrap";
import Results from './Results';
import "./App.css";

const defaultState = {
  rate: "",
  miles: 0,
  startTime: "",
  endTime: "",
  submitted: false
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);

  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submitted: true
    });
  }

  handleReset(event) {
    event.preventDefault();
    this.setState(defaultState);
  }
  render() {
    return (
      <Container>
        <Row>
          <Col className="center"><h1>EV bill cost</h1></Col>
        </Row>
        <EVBillForm
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.submitted && (
          <Results {...this.state} handleReset={this.handleReset} />
        )}
      </Container>
    );
  }
}


export default App;


  /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Col md={8} style={{backgroundColor: 'orange',}}>md=8</Col>
          <Col style={{backgroundColor: 'yellow',}}>??</Col>

      </header> */

