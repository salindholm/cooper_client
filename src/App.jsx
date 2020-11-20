import React, { Component } from 'react'
import DisplayCooperResult from "./components/DisplayCooperResult";
import DisplayPerformanceData from './components/DisplayPerformanceData';
import InputFields from './components/InputFields';
import LoginForm from "./components/LoginForm";
import { authenticate } from './modules/auth';
import { Button, Container, Icon } from "semantic-ui-react";

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
          <>
          <Button animated='fade'
          id="login"
          onClick={() => this.setState({ renderLoginForm: true })}>
            <Button.Content visible>Login </Button.Content>
            <Button.Content hidden><Icon name='arrow right'/></Button.Content>
          </Button>
          <p id="login-error">{message}</p>
         </>
       );
      break;
    case authenticated:
      renderLogin = (
        <p id="login-success">Hi {JSON.parse(sessionStorage.getItem("credentials")).uid}</p>
      );
      if (this.state.renderIndex) {
        performanceDataIndex = (
          <>
            <DisplayPerformanceData
              updateIndex={this.state.updateIndex}
              indexUpdated={() => this.setState({ updateIndex: false })}
            />
            <button onClick={() => this.setState({ renderIndex: false })}>Hide past entries</button>
          </>
        ) 
        
      } else {
        performanceDataIndex = (
          <button id="show-index" onClick={() => this.setState({ renderIndex: true })}>Show past entries</button>
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
