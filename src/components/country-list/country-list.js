import React, { Component } from "react";
import { countries } from "../../config/data"
import Country from "../country/country";
import { uiKeyGen } from "../../config/uiKeygenerator";

export default class CountryList extends Component {

    constructor(props) {
        super(props)

        this.state = { config: 0 }
        this.changeConfig = this.changeConfig.bind(this);
    }
    changeConfig() {
        if (this.state.config < countries.length - 1) {
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
            <div>
                <h1> Countries</h1>

                <button onClick={this.changeConfig} className="btn btn-primary" > NEXT COUNTRY</button>



                <Country key={uiKeyGen()} data={countries[this.state.config]} config={this.state.config} name={countries[this.state.config].Name} flag={countries[this.state.config].flag} images={countries[this.state.config].images} />

            </div>

        )
    }
}






    // changeConfigCard() {
    //     this.setState({
    //         config: "card"
    //     })
    // }

    // changeConfigLi() {
    //     this.setState({
    //         config: "li"
    //     })
    // }





 //this is an option - bad one
    // renderCars() {
    //     let carsLi = [];
    //     cars.forEach((car) => {
    //         carsLi.push(<li> {car.Name} </li>)
    //     })
    //     return carsLi;
    // }

    //this is another option
    // renderCars() {
    //     let cars = cars.map((car) => {
    //         return <li> {car.Name} </li>
    //     })
    //     return cars;
    // }