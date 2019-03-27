import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Login}/>
        <Route path="/dashboard" exact component={(props) => {props.history.push('/dashboard/foods'); return <div></div>}}/>
        <Route path="/dashboard/:id" exact component={Dashboard}/>
      </BrowserRouter>      
    );
  }
}

export default App;
