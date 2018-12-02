import React, { Component } from "react"




export default class Country extends Component {
    constructor(props) {
        super(props)


    }


    render() {
        return (
            <div className="container">
                <div className="row">

                    <div className="card col-lg-12" >
                        <h1> {this.props.name} </h1>
                        <img src={this.props.flag}></img>
                    </div >

                    {this.props.images.map((image) => {
                        return <div className="card col-lg-4" >
                            <img src={image} />
                        </div>
                    })}
                </div >

            </div >

        )
    }
}