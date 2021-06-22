import React from "react";

export class LoginButton extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isHover: false
        };

        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    }

    onMouseEnterHandler() {
        this.setState({
            isHover: true
        });
    }

    onMouseLeaveHandler() {
        this.setState({
            isHover: false
        });
    }

    render()
    {
        return(
          <div className={"row"} onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
              {
                  this.state.isHover
                      ? <div className={"col-md-auto login-icon-label"}><img src={this.props.icon} width={"50px"}
                                                            height="50px"/><label className={"login-label"}><strong>{this.props.labelValue}</strong></label></div>
                      : <div className={"col-md-auto"}><img src={this.props.icon} width={"50px"} height="50px"/></div>
              }
          </div>
        );
    }
}