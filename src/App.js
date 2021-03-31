// import logo from './logo.svg';
import React from 'react'
import "./App.css";
import Form from './Form'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Results from './Results';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: "",
      miles: 0,
      startTime: "",
      endTime: "",
      submitted: false
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
    //   rate: "",
    //   miles: 0,
    //   startTime: "",
    //   endTime: "",
      submitted: true
    });
    console.log("submitted state", this.state);
  }
  render() {
    return (
      <Container>
        <Form
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.submitted && <Results {...this.state}/>}
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

