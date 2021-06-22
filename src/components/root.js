import React from "react";
import {Redirect} from "react-router";

export class Root extends React.Component {
    render() {
        return (
                <div >
                    {this.props.children}
                </div>
        );
    }
}