import React from "react";
import "../css/highlight.css";

export class Highlight extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={

        }
    }
    render()
    {
        return(
            <div className={"container py-5 highlight-container"}>
                <div className={"row justify-content-center highlight-section-title"}>
                    <div className={"col-md-auto underline-title"}>
                        <p>{this.props.highlightObj.title}</p>
                    </div>
                </div>
                <div className={"row highlight-section-description"}>
                    <div className={"col-md-auto"}>
                        <p><strong>{this.props.highlightObj.description}</strong></p>
                    </div>
                </div>
            </div>
        );
    }
}