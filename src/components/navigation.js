import React from "react";
import "../App.css";
import logo from "../graphics/icons/logo.png";
import {Link} from "react-router-dom";
import {LoginButton} from "./login-button";
import login from "../graphics/icons/login.png"
import profile from "../graphics/icons/profile.png";
//import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import {ReactSession} from "react-client-session";
import History from "../utils/history";

export class Navigation extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            isLoggedIn : ReactSession.get("loggedIn")
        }
        this.loggingOut = this.loggingOut.bind(this);
    }

    loggingOut(e){
        ReactSession.set("user", null);
        ReactSession.set("loggedIn", false);
        this.setState({
            isLoggedIn: false
        });
        History.push("/home");
    }

    render()
    {
        /*function addLoginLabel(e){
            let label = document.createElement("label");
            label.id = "loginLabel";
            label.value = "LOGIN";
            let parentDiv = document.getElementById("loginDiv");
            parentDiv.appendChild(label);
        }
        function removeLoginLabel(e){
            let parentDiv = document.getElementById("loginDiv");
            parentDiv.removeChild(document.getElementById("loginLabel"));
        }*/
        return(
            <div className="navbar light shadow-lg div-transparent-dark">
                <div className="container">
                    <div className="row flex-fill justify-content-between">
                        <div className="col-md-auto">
                            <Link to={"/home"} className="navbar-brand">
                                <img src={logo} width="50px" height="50px"/>
                                <strong>Travel Assistant</strong>
                            </Link>
                        </div>
                        <div className={"col-md-auto"}>
                            {
                                ReactSession.get("loggedIn")
                                    ?<div className={"row"}>
                                        <div className={"col-md-auto"}>
                                            <Link to={"/profile"}>
                                                <LoginButton labelValue={"Profile"} icon={profile}/>
                                            </Link>
                                        </div>
                                        <div className={"col-md-auto"}>
                                            <button className={"form-control log-out-button"} onClick={this.loggingOut}>Log out</button>
                                        </div>
                                    </div>
                                    :<Link to={"/account"}><LoginButton labelValue={"Login"} icon={login}/></Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}