import React, { Component } from "react"
export default class Image extends Component {
    constructor(props) {
        super(props)


    }


    render() {
        return (
            <div className="card col-lg-12" >
                <img src={this.props.src} />
            </div>

        )
    }
}