import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import AuthoLogin from "./components/AuthoLogin";
import UserLogin from "./components/UserLogin";
import UserView from "./view/UserView";
import AddEventView from "./view/AddEventView";
import ListEventView from "./view/ListEventView";
import MyEventsView from "./view/MyEventsView";
import NavBar from "./components/NavBar";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
            <Route exact={true} path="/" component={HomePage}/>
            <Route exact={true} path="/autho-login" component={AuthoLogin}/>
            <Route exact={true} path="/user-login" component={UserLogin}/>
            <Route exact={true} path="/user-sign" component={UserView}/>
            <Route exact={true} path="/add-event" component={AddEventView}/>
            <Route exact={true} path="/list-events" component={ListEventView}/>
            <Route exact={true} path="/my-events" component={MyEventsView}/>
        </Switch>
      </BrowserRouter>
      
    </div>  
  );
}

export default App;

