import React, { Component } from "react";
import { countries } from "../../config/data"
import Country from "../country/country";
import { uiKeyGen } from "../../config/uiKeygenerator";

export default class CountryList extends Component {

    constructor(props) {
        super(props)

        this.state = { config: countries[0].Name }
        this.changeConfig = this.changeConfig.bind(this);
    }
    // changeConfig() {
    //     if (this.state.config < countries.length - 1) {
    //         this.setState({
    //             config: this.state.config + 1
    //         })
    //     }
    //     else {
    //         this.setState({
    //             config: 0
    //         })
    //     }

    // }

    changeConfig(e) {
        this.setState({
            config: e.target.innerText.toLowerCase()
        })
    }





    render() {
        var currentCountry = countries.find(obj => {
            return obj.Name === this.state.config
        })
        return (
            <div>
                <h1> Countries</h1>

                {/* <button onClick={this.changeConfig} className="btn btn-primary" > NEXT COUNTRY</button> */}
                {countries.map((country) => {
                    return <button onClick={this.changeConfig} className="btn btn-primary" > {country.Name}</button>
                })}


                <Country key={uiKeyGen()} data={currentCountry}
                    config={currentCountry.Name}
                    name={currentCountry.Name}
                    flag={currentCountry.flag}
                    images={currentCountry.images} />

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