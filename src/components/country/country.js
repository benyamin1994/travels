import React, { Component } from "react"
import Image from "../image/image";



export default class Country extends Component {
    constructor(props) {
        super(props)


        this.state = { config: 0 }
        this.changeConfig = this.changeConfig.bind(this);
    }
    changeConfig() {
        if (this.state.config < this.props.images.length - 1) {
            this.setState({
                config: this.state.config + 1
            })
        }
        else {
            this.setState({
                config: 0
            })
        }

    }


    render() {
        return (
            <div className="container">
                <div className="row">

                    <div className="card col-lg-12" >
                        <h1> {this.props.name} </h1>
                        <img src={this.props.flag}></img>
                    </div >
                    <button onClick={this.changeConfig} className="btn btn-primary" >Next pic</button>
                    <Image src={this.props.images[this.state.config]} />


                </div >

            </div >

        )
    }
}