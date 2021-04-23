import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PrivateRoute from"./components/PrivateRoute";
import Login from "./components/Login";
import BubblePage from"./components/BubblePage";
import "./styles.scss";

function App() {
  const logoutFunc = ()=> {
    window.localStorage.removeItem("token");
  }

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <Link onClick={logoutFunc} to="/" data-testid="logoutButton" >logout</Link>
        </header> 

        
        <Switch>
         <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/colors" component={BubblePage}/>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.