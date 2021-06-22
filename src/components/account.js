import React from "react";
import "../App.css";
import History from '../utils/history';
import {Link} from "react-router-dom";
import {ReactSession} from "react-client-session";
//import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import {Navigation} from "./navigation";
import axios from "axios";

export class Account extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            inputUsername: '',
            inputPassword: '',
            showError: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
        async handleClick() {
        /*let tempUser = axios.get("/users/" + this.state.inputUsername)
                .then(function (response) {
                    console.log(response.status);
                    tempUser = response;
                    console.log(tempUser.data);
                })
                .catch(function (error) {
                    console.log(error);
                });*/
            let res = await axios.get("/users/" + this.state.inputUsername);

            let tempUser = res.data;


            console.log(tempUser);
            console.log((String)(this.state.inputUsername));
            if((String)(tempUser.username) === (String)(this.state.inputUsername) && (String)(tempUser.password) === (String)(this.state.inputPassword))
            {
                //this.props.cookies.set("loggedIn", true);
                //this.props.cookies.set("user", tempUser)
                ReactSession.set("loggedIn",true);
                ReactSession.set("user", tempUser);
                History.push("/home");
            }
            else
            {
                this.setState({
                    showError: true
                });
            }
        }

        handleInputChange(event){
            switch(event.target.id)
            {
                case "username":
                    this.setState({
                        inputUsername: event.target.value
                    });
                    break;
                case "password":
                    this.setState({
                        inputPassword: event.target.value
                    });
                    break;
                default:
                    break;
            }
        }

    render() {
            return (
                <div>
                    <Navigation/>
                    <div className={"container py-5"}>
                        {
                            this.state.showError
                                ?<div className={"row justify-content-center"}>
                                    <div className={"col-md-auto"}>
                                        <h1 className={"error-message-text"}>An error occurred while trying to login!</h1>
                                        <h2 className={"error-message-text"}>Please make sure you filled in the information correctly!</h2>
                                    </div>
                                </div>
                                :<div></div>
                        }
                        <div className={"row justify-content-center border-down div-transparent rounded-pill"}>
                            <div className={"col-md-auto"}>
                                <h1><strong>Login</strong></h1>
                            </div>
                        </div>
                        <div className={"row py-5 login-content rounded-pill div-transparent"}>
                            <div className={"row justify-content-center"}>
                                <input id={"username"} type={"text"} value={this.state.inputUsername} onChange={this.handleInputChange} className={"form-control login-input"} placeholder={"Username"}/>
                            </div>
                            <div className={"row justify-content-center"}>
                                <input id={"password"} type={"password"} value={this.state.inputPassword} onChange={this.handleInputChange} className={"form-control login-input"} placeholder={"Password"}/>
                            </div>
                            <div className={"row justify-content-center"}>
                                <input type={"button"} className={"form-control login-input-button"} value={"Connect"}
                                       onClick={this.handleClick}/>
                            </div>
                            <div className={"row justify-content-center signup-link"}>
                                <div className={"col-md-auto signup-div rounded"}>
                                    <Link to={"/register"}><label className={"signup-link-text"}><strong>Sign
                                        up!</strong></label></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
}
