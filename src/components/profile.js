import React from "react";
import "../css/profile.css";
import finnProfile from "../graphics/icons/profile/finnprofile.png";
import editProfile from "../graphics/icons/profile/editprofile.png";
import country from "../graphics/icons/profile/country.png";
import age from "../graphics/icons/profile/age.png";
import job from "../graphics/icons/profile/job.png";
import plannings from "../graphics/icons/profile/plannings.png";
import highlights from "../graphics/icons/profile/highlights.png";
import time from "../graphics/icons/profile/time.png";
import newHighlight from "../graphics/icons/profile/newhighlight.png";
import chalk from "../graphics/images/chalk.png";
import {Highlight} from "./highlight";
import {ReactSession} from 'react-client-session';
import {Link} from "react-router-dom";
import {Navigation} from "./navigation";
import axios from "axios";
//import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

export class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            highlightList: [],
            highlightCreation: false,
            highlightObj: {
                title: "",
                description: ""
            }
        };
        this.isCreatingHighlight = this.isCreatingHighlight.bind(this);
        this.addHighlight = this.addHighlight.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.descriptionChanged = this.descriptionChanged.bind(this);
        this.getHlList = this.getHlList.bind(this);
    }

    isCreatingHighlight() {
        this.setState({
            highlightCreation: true
        });
    }

    addHighlight() {
        let result = <div><Highlight highlightObj={this.state.highlightObj}/></div>;
        this.setState({
            highlightList: [...this.state.highlightList, result]
        });
        this.setState({
            highlightCreation: false
        });
        let newId = axios.get('/highlights/count') + 1;
        axios.post('/highlights/new', {
            "id" : newId,
            "title" : this.state.highlightObj.title,
            "description" : this.state.highlightObj.description,
            "username" : ReactSession.get("user").username
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    titleChanged(event) {
        this.setState({
            highlightObj: {
                title: event.target.value,
                description: this.state.highlightObj.description
            }
        });
    }

    descriptionChanged(event) {
        this.setState({
            highlightObj: {
                title: this.state.highlightObj.title,
                description: event.target.value
            }
        });
    }

    async getHlList()
    {
        const {data:response} = await axios.get('/highlights/' + ReactSession.get('user').username);
        console.log(response);
        return response;
    }


    componentDidMount() {
        const hlList = this.getHlList();
        console.log(hlList);
        for (let hl in hlList)
        {
            console.log(hl);
            let hlObj = {
                title: hl.title,
                description: hl.description
            };
            console.log(hlObj);
            let hlDiv = <div><Highlight highlightObj={hlObj}/></div>;
            console.log(hlDiv);
            this.setState({
                highlightList: [...this.state.highlightList, hlDiv]
            });
        }
    }

    render() {
        return (
            <div>
                <Navigation/>
                <div className={"container profile-container"}>
                    <div className={"container row profile-header"}>
                        <div className={"col-md-auto profile-pic-container"}>
                            <img src={finnProfile} className={"profile-pic"}/>
                        </div>
                        <div className={"col name-container"}>
                            <label><h1>{ReactSession.get("user").firstName} {ReactSession.get("user").lastName}</h1>
                            </label>
                        </div>
                        <div className={"col-md-auto edit-profile"}>
                            <Link to={"/edit-profile"}>
                                <img src={editProfile} width={"20px"} height={"20px"}/>
                                <label className={"edit-profile-label"}>Edit profile</label>
                            </Link>
                        </div>
                    </div>
                    <div className={"row container justify-content-center info-row"}>
                        <div className={"col"}> {/*here*/}
                            <div className={"row info-element-row"}>
                                <div className={"col info-label"}>
                                    <img src={country} height={"20px"} width={"20px"}/>
                                    <label>Country:</label>
                                </div>
                                <div className={"col-md-auto info-label"}>
                                    <label>{ReactSession.get("user").country}</label>
                                </div>
                            </div>
                            <div className={"row info-element-row"}>
                                <div className={"col info-label"}>
                                    <img src={age} height={"20px"} width={"20px"}/>
                                    <label>Birth:</label>
                                </div>
                                <div className={"col-md-auto info-label"}>
                                    <label>{ReactSession.get("user").birth}</label>
                                </div>
                            </div>
                            <div className={"row info-element-row"}>
                                <div className={"col info-label"}>
                                    <img src={job} height={"20px"} width={"20px"}/>
                                    <label>Occupation:</label>
                                </div>
                                <div className={"col-md-auto info-label"}>
                                    <label>{ReactSession.get("user").occupation}</label>
                                </div>
                            </div>
                        </div>
                        <div className={"col separate-cols"}>{/*and here*/}
                            <div className={"row info-element-row"}>
                                <div className={"col info-label"}>
                                    <img src={plannings} height={"20px"} width={"20px"}/>
                                    <label>Trips planned:</label>
                                </div>
                                <div className={"col-md-auto info-label"}>
                                    <label>{ReactSession.get("user").tripsPlanned}</label>
                                </div>
                            </div>
                            <div className={"row info-element-row"}>
                                <div className={"col info-label"}>
                                    <img src={highlights} height={"20px"} width={"20px"}/>
                                    <label>Highlights posted:</label>
                                </div>
                                <div className={"col-md-auto info-label"}>
                                    <label>{ReactSession.get("user").highlightsPosted}</label>
                                </div>
                            </div>
                            <div className={"row info-element-row"}>
                                <div className={"col info-label"}>
                                    <img src={time} height={"20px"} width={"20px"}/>
                                    <label>Member since:</label>
                                </div>
                                <div className={"col-md-auto info-label"}>
                                    <label>{ReactSession.get("user").time}</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Division between page layout*/}

                </div>
                <div className={"container py-3 justify-content-center highlight-board rounded"}>
                    <div className={"row justify-content-center new-highlight-row"}>
                        <div className={"col-md-auto new-highlight-col"}>
                            <a onClick={this.isCreatingHighlight}>
                                <img src={newHighlight} width={"50px"} height={"50px"}/>
                                <label className={"new-highlight-label"}><strong>Create new
                                    highlight</strong></label>
                            </a>
                        </div>
                    </div>
                    {this.state.highlightCreation
                        ?
                        <div className={"row justify-content-center create-highlight-row"}>
                            <div className={"col-md-auto create-highlight-col"}>
                                <div className={"row justify-content-center"}>
                                    <div className={"col-md-auto"}>
                                        <img src={chalk} width={"60px"} height={"70px"}/>
                                    </div>
                                </div>
                                <div className={"row input-row"}>
                                    <input type={"text"} id={"title-input"} onChange={this.titleChanged}
                                           className={"form-control title-input"} placeholder={"Highlight title"}/>
                                </div>
                                <div className={"row input-row"}>
                                    <input type={"text"} id={"description-input"} onChange={this.descriptionChanged}
                                           className={"form-control description-input"}
                                           placeholder={"Highlight description"}/>
                                </div>
                                <div className={"row input-row justify-content-center"}>
                                    <input type={"submit"} className={"form-control save-highlight-button"}
                                           value={"Save"} onClick={this.addHighlight}/>
                                </div>
                            </div>
                        </div>
                        : <div></div>
                    }
                    <div className={"row highlights-row justify-content-center"}>
                        {this.state.highlightList}
                    </div>
                </div>
            </div>
        );
    }
}