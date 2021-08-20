import './App.css';
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink 
  } from "react-router-dom";
import ContentWrapper from './Components/HomePage/ContentWrapper';
import Login from "./Components/AuthPages/Login"
import Register from "./Components/AuthPages/Register"

export default function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                    <Link to="/" >Courses</Link>
                    </li>
                    <li>
                    <Link to="/SignUp"> Sign Up </Link>
                    </li>
                    <li>
                    <Link  to="/SignIn"> Sign In</Link>
                    </li>
                </ul>   
            </nav>

            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/SignUp">
                    <Register />
                </Route>
                <Route path="/SignIn">
                    <Login />
                </Route>

            </Switch>
        </Router>
    )
}
