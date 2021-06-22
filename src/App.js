import './App.css';
import { Home } from './components/home';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Root} from "./components/root";
import {Account} from "./components/account";
import React from "react";
import {Register} from "./components/register";
import {Profile} from "./components/profile";
import {ReactSession} from 'react-client-session';
//import { useCookies, withCookies } from 'react-cookie';
//import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import {EditProfile} from "./components/edit-profile";

function App() {
    const user = {
        username:"",
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        birth: "",
        occupation: "",
        tripsPlanned: "",
        highlightsPosted: "",
        time: ""};
    //const [cookies, setCookie] = useCookies(['user']);
    //if(!read_cookie('user'))
    //    bake_cookie('user', user);
    //setCookie('user', user);
    ReactSession.setStoreType("localStorage");
    if(!ReactSession.get("user"))
        ReactSession.set("user", user);
    //if(!read_cookie('loggedIn'))
    //    bake_cookie('loggedIn', false);
    //setCookie("loggedIn", false);
    if(!ReactSession.get("loggedIn"))
        ReactSession.set("loggedIn", false);
  return (
                <Route path={"/"}>
                    <Root>
                        <Switch>
                            <Route path={"/home"}>
                                <Home/>
                            </Route>
                            <Route path={"/account"}>
                                <Account/>
                            </Route>
                            <Route path={"/register"}>
                                <Register/>
                            </Route>
                            <Route path={"/profile"}>
                                <Profile/>
                            </Route>
                            <Route path={"/edit-profile"}>
                                <EditProfile/>
                            </Route>
                        </Switch>
                    </Root>
                </Route>
  );
}

export default App;