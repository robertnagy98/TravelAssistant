import React from "react";
import "../App.css";
import History from '../utils/history';
import {ReactSession} from 'react-client-session';
//import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import {Navigation} from "./navigation";
import axios from "axios";

export class Register extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            newUser:{
                username:"",
                firstName: "",
                lastName: "",
                email: "",
                country: "unspecified",
                birth: "unspecified",
                occupation: "unspecified",
                tripsPlanned: "0",
                highlightsPosted: "0",
                time: "tbd",
                password: ""
            },
            pass:'',
            cPass:'',
            showError: false,
            postResponse: -1
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.cPasswordChange = this.cPasswordChange.bind(this);
    }

    async handleClick() {
        if(this.state.pass === this.state.cPass && this.state.pass !== ''
        && this.state.newUser.username !== "" && this.state.newUser.email !== "" && this.state.newUser.firstName !== "" && this.state.newUser.lastName !== "") {
            this.setState({newUser: {
                    username: this.state.username,
                    firstName: this.state.newUser.firstName,
                    lastName: this.state.newUser.lastName,
                    email: this.state.newUser.email,
                    country: this.state.newUser.country,
                    birth: this.state.newUser.birth,
                    occupation: this.state.newUser.occupation,
                    tripsPlanned: this.state.newUser.tripsPlanned,
                    highlightsPosted: this.state.newUser.highlightsPosted,
                    time: this.state.newUser.time,
                    password: this.state.pass
                }
            });
            console.log("Doing post request");

            axios.post('/users/new', {
                "username":this.state.newUser.username,
                "firstName":this.state.newUser.firstName,
                "lastName":this.state.newUser.lastName,
                "email":this.state.newUser.email,
                "country":this.state.newUser.country,
                "birth":this.state.newUser.birth,
                "occupation":this.state.newUser.occupation,
                "tripsPlanned":this.state.newUser.tripsPlanned,
                "highlightsPosted":this.state.newUser.highlightsPosted,
                "time":this.state.newUser.time,
                "password":this.state.pass
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            console.log("Done post request");
            ReactSession.set("user", {

                "username": this.state.newUser.username,
                "firstName": this.state.newUser.firstName,
                "lastName": this.state.newUser.lastName,
                "email": this.state.newUser.email,
                "country": this.state.newUser.country,
                "birth": this.state.newUser.birth,
                "occupation": this.state.newUser.occupation,
                "tripsPlanned": this.state.newUser.tripsPlanned,
                "highlightsPosted": this.state.newUser.highlightsPosted,
                "time": this.state.newUser.time,
                "password": this.state.pass
            });
            ReactSession.set("loggedIn", true);
            History.push("/profile");
        }
        else
        {
            this.setState({
                showError: true
            });
        }
    }

    passwordChange(event){
        this.setState({
            pass:event.target.value
        });
    }

    cPasswordChange(event){
        this.setState({
            cPass:event.target.value
        });
    }

    handleInputChange(event){
        switch(event.target.id)
        {
            case "username":
                this.setState({newUser: {
                        username:event.target.value,
                        firstName: this.state.newUser.firstName,
                        lastName: this.state.newUser.lastName,
                        email: this.state.newUser.email,
                        country: this.state.newUser.country,
                        birth: this.state.newUser.birth,
                        occupation: this.state.newUser.occupation,
                        tripsPlanned: this.state.newUser.tripsPlanned,
                        highlightsPosted: this.state.newUser.highlightsPosted,
                        time: this.state.newUser.time,
                        password: this.state.newUser.password
                }
                });
                break;
            case "firstName":
                this.setState({newUser: {
                        username:this.state.newUser.username,
                        firstName: event.target.value,
                        lastName: this.state.newUser.lastName,
                        email: this.state.newUser.email,
                        country: this.state.newUser.country,
                        birth: this.state.newUser.birth,
                        occupation: this.state.newUser.occupation,
                        tripsPlanned: this.state.newUser.tripsPlanned,
                        highlightsPosted: this.state.newUser.highlightsPosted,
                        time: this.state.newUser.time,
                        password: this.state.newUser.password
                    }
                });
                break;
            case "lastName":
                this.setState({newUser: {
                        username:this.state.newUser.username,
                        firstName: this.state.newUser.firstName,
                        lastName: event.target.value,
                        email: this.state.newUser.email,
                        country: this.state.newUser.country,
                        birth: this.state.newUser.birth,
                        occupation: this.state.newUser.occupation,
                        tripsPlanned: this.state.newUser.tripsPlanned,
                        highlightsPosted: this.state.newUser.highlightsPosted,
                        time: this.state.newUser.time,
                        password: this.state.newUser.password
                    }
                });
                break;
            case "email":
                this.setState({newUser: {
                        username:this.state.newUser.username,
                        firstName: this.state.newUser.firstName,
                        lastName: this.state.newUser.lastName,
                        email: event.target.value,
                        country: this.state.newUser.country,
                        birth: this.state.newUser.birth,
                        occupation: this.state.newUser.occupation,
                        tripsPlanned: this.state.newUser.tripsPlanned,
                        highlightsPosted: this.state.newUser.highlightsPosted,
                        time: this.state.newUser.time,
                        password: this.state.newUser.password
                    }
                });
                break;
            default:
                break;
        }
    }

    render()
    {
    return(
        <div>
            <Navigation/>
        <div className={"container py-5"}>
            {
                this.state.showError
                ?<div className={"row justify-content-center"}>
                        <div className={"col-md-auto"}>
                            <h1 className={"error-message-text"}>An error occurred while trying to register!</h1>
                            <h2 className={"error-message-text"}>Please make sure you filled in the information correctly!</h2>
                        </div>
                    </div>
                    :<div></div>
            }

            <div className={"row justify-content-center border-down div-transparent rounded-pill"}>
                <div className={"col-md-auto"}>
                    <h1><strong>Register</strong></h1>
                </div>
            </div>
            <div className={"row py-5 login-content rounded-pill div-transparent"}>
                <div className={"row justify-content-center"}>
                    <input id={"username"} type={"text"} value={this.state.newUser.username} onChange={this.handleInputChange} className={"form-control login-input"} placeholder={"Username"}/>
                </div>
                <div className={"row justify-content-center"}>
                    <input type={"password"} className={"form-control login-input"} onChange={this.passwordChange} placeholder={"Password"}/>
                </div>
                <div className={"row justify-content-center"}>
                    <input type={"password"} className={"form-control login-input"} onChange={this.cPasswordChange} placeholder={"Confirm password"}/>
                </div>
                <div className={"row justify-content-center"}>
                    <input id={"email"} type={"text"} value={this.state.newUser.email} onChange={this.handleInputChange} className={"form-control login-input"} placeholder={"Email"}/>
                </div>
                <div className={"row justify-content-center"}>
                    <input id={"firstName"} type={"text"} value={this.state.newUser.firstName} onChange={this.handleInputChange} className={"form-control login-input"} placeholder={"First name"}/>
                </div>
                <div className={"row justify-content-center"}>
                    <input id={"lastName"} type={"text"} value={this.state.newUser.lastName} onChange={this.handleInputChange} className={"form-control login-input"} placeholder={"Last Name"}/>
                </div>
                <div className={"row justify-content-center"}>
                    <input type={"submit"} onClick={this.handleClick} className={"form-control login-input-button"} value={"Create Account"}/>
                </div>
            </div>
        </div>
        </div>
    );
}
}