import React, { Component } from 'react'
import DisplayCooperResult from "./components/DisplayCooperResult";
import DisplayPerformanceData from './components/DisplayPerformanceData';
import InputFields from './components/InputFields';
import LoginForm from "./components/LoginForm";
import { authenticate } from './modules/auth';
import { Button, Container, Segment, Icon, Header, Divider } from "semantic-ui-react";

class App extends Component {
  state = {
    distance: "",
    gender: "female",
    age: "",
    renderLoginForm: false,
    authenticated: false,
    message: "",
    entrySaved: false,
    renderIndex: false
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value, entrySaved: false });
  };


  onLogin = async e => {
   e.preventDefault();
   const response = await authenticate(
     e.target.email.value,
     e.target.password.value
   );
   if (response.authenticated) {
     this.setState({ authenticated: true });
   } else {
     this.setState({ message: response.message, renderLoginForm: false });
   }
  };

  render() {
    const { renderLoginForm, authenticated, message } = this.state;
    let renderLogin;
    let performanceDataIndex;
    switch(true) {
      case renderLoginForm && !authenticated:
        renderLogin = <LoginForm submitFormHandler={this.onLogin} />;
        break;
      case !renderLoginForm && !authenticated:
        renderLogin = (
          <Segment basic textAlign='center'>
            <Header as='h4'>Log In To Save</Header>
          <Button animated='fade'
          id="login"
          onClick={() => this.setState({ renderLoginForm: true })}>
            <Button.Content visible>Login </Button.Content>
            <Button.Content hidden><Icon name='sign in'/></Button.Content>
          </Button>
          <p id="login-error">{message}</p>
         </Segment>
       );
      break;
    case authenticated:
      renderLogin = (
        <Segment basic textAlign='center'>
          <Divider horizontal id="login-success">
            Welcome {JSON.parse(sessionStorage.getItem("credentials")).uid}
          </Divider>
        </Segment>
      );
      if (this.state.renderIndex) {
        performanceDataIndex = (
          <>
            <DisplayPerformanceData
              updateIndex={this.state.updateIndex}
              indexUpdated={() => this.setState({ updateIndex: false })}
            />
            <Button color='red' onClick={() => this.setState({ renderIndex: false })}>Hide Past Entries</Button>
          </>
        ) 
        
      } else {
        performanceDataIndex = (
          <Button id="show-index" onClick={() => this.setState({ renderIndex: true })}>Show Past Entries</Button>
        )
      }
    }

    return (
      <Container>
      <InputFields onChangeHandler={this.onChangeHandler} />
      {renderLogin}
      <DisplayCooperResult
        distance={this.state.distance}
        gender={this.state.gender}
        age={this.state.age}
        authenticated={this.state.authenticated}
        entrySaved={this.state.entrySaved}
        entryHandler={() => this.setState( { entrySaved: true, updateIndex: true })}
        />
        {performanceDataIndex}
      </Container>
    );
  }
  
}

export default App;