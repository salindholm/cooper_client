import React from 'react'
import Home from './Home'
import Header from './components/Header'
import About from './components/About'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
     </Switch>
    </>
  );
};

export default App;