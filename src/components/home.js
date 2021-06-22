import React from "react";
import {Navigation} from "./navigation";

export class Home extends React.Component
{
    render()
    {
        return(
            <div>
                <Navigation/>
            <div className={"container py-5 home-container rounded"}>
                <div className="row justify-content-center">
                    <div className="col-md-auto">
                        <h1><strong>Welcome to Travel Assistant</strong></h1>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}