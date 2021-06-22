import React from "react";
import {ReactSession} from 'react-client-session';
import {Navigation} from "./navigation";

export class EditProfile extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            localUser: {
                firstName: ReactSession.get("user").firstName,
                lastName: ReactSession.get("user").lastName,
                country: ReactSession.get("user").country,
                age: ReactSession.get("user").age,
                occupation: ReactSession.get("user").occupation,
                tripsPlanned: ReactSession.get("user").tripsPlanned,
                highlightsPosted: ReactSession.get("user").highlightsPosted,
                time: ReactSession.get("user").time
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlefNameChange = this.handlefNameChange.bind(this);
        this.handlelNameChange = this.handlelNameChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleOccupationChange = this.handleOccupationChange.bind(this);
    }

    handleSubmit(event)
    {
        ReactSession.set("user", this.state.localUser)
    }

    handlefNameChange(event)
    {
        this.setState({
            localUser:{
                firstName: event.target.value,
                lastName: this.state.localUser.lastName,
                country: this.state.localUser.country,
                age: this.state.localUser.age,
                occupation: this.state.localUser.occupation,
                tripsPlanned: this.state.localUser.tripsPlanned,
                highlightsPosted: this.state.localUser.highlightsPosted,
                time: this.state.localUser.time
                }
            });
    }

    handlelNameChange(event)
    {
        this.setState({
            localUser:{
                firstName: this.state.localUser.firstName,
                lastName: event.target.value,
                country: this.state.localUser.country,
                age: this.state.localUser.age,
                occupation: this.state.localUser.occupation,
                tripsPlanned: this.state.localUser.tripsPlanned,
                highlightsPosted: this.state.localUser.highlightsPosted,
                time: this.state.localUser.time
            }
        });
    }

    handleCountryChange(event)
    {
        this.setState({
            localUser:{
                firstName: this.state.localUser.firstName,
                lastName: this.state.localUser.lastName,
                country: event.target.value,
                age: this.state.localUser.age,
                occupation: this.state.localUser.occupation,
                tripsPlanned: this.state.localUser.tripsPlanned,
                highlightsPosted: this.state.localUser.highlightsPosted,
                time: this.state.localUser.time
            }
        });
    }

    handleAgeChange(event)
    {
        this.setState({
            localUser:{
                firstName: this.state.localUser.firstName,
                lastName: this.state.localUser.lastName,
                country: this.state.localUser.country,
                age: event.target.value,
                occupation: this.state.localUser.occupation,
                tripsPlanned: this.state.localUser.tripsPlanned,
                highlightsPosted: this.state.localUser.highlightsPosted,
                time: this.state.localUser.time
            }
        });
    }

    handleOccupationChange(event)
    {
        this.setState({
            localUser:{
                firstName: this.state.localUser.firstName,
                lastName: this.state.localUser.lastName,
                country: this.state.localUser.country,
                age: this.state.localUser.age,
                occupation: event.target.value,
                tripsPlanned: this.state.localUser.tripsPlanned,
                highlightsPosted: this.state.localUser.highlightsPosted,
                time: this.state.localUser.time
            }
        });
    }
    render()
    {
        return(
            <div>
                <Navigation/>
            <div className={"py-5 container"}>
                    <div className={"row justify-content-center"}>
                        <div className={"col-md-auto"}>
                            <input type={"text"} className={"form-control"} value={this.state.localUser.firstName} onChange={this.handlefNameChange} placeholder={"First Name"}/>
                        </div>
                    </div>
                    <div className={"row justify-content-center"}>
                        <div className={"col-md-auto"}>
                            <input type={"text"} className={"form-control"} value={this.state.localUser.lastName} onChange={this.handlelNameChange} placeholder={"Last Name"}/>
                        </div>
                    </div>
                    <div className={"row justify-content-center"}>
                        <div className={"col-md-auto"}>
                            <input type={"text"} className={"form-control"} value={this.state.localUser.country} onChange={this.handleCountryChange} placeholder={"Country"}/>
                        </div>
                    </div>
                    <div className={"row justify-content-center"}>
                        <div className={"col-md-auto"}>
                            <input type={"text"} className={"form-control"} value={this.state.localUser.age} onChange={this.handleAgeChange} placeholder={"Age"}/>
                        </div>
                    </div>
                    <div className={"row justify-content-center"}>
                        <div className={"col-md-auto"}>
                            <input type={"text"} className={"form-control"} value={this.state.localUser.occupation} onChange={this.handleOccupationChange} placeholder={"Occupation"}/>
                        </div>
                    </div>
                    <div className={"row justify-content-center"}>
                        <div className={"col-md-auto"}>
                            <input type={"submit"} className={"form-control"} value={"Save"} onClick={this.handleSubmit}/>
                        </div>
                    </div>
            </div>
            </div>
        );
    }
}