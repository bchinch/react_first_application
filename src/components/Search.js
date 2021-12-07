import React, { Component } from 'react'
import './search.css'

const url = "http://developerfunnel.herokuapp.com/location";
const urls = "http://developerfunnel.herokuapp.com/hotels?city=";

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            city: '',
            hotels: ''
        }
    }
    componentDidMount() {
        fetch(url, { method: 'GET' })
            //return promises object
            .then((resp) => resp.json())
            //return data
            .then((data) => {
                this.setState({ city: data })
            })
    }
    renderCity = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option key={item._id} value={item._id}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }
    selectValue = (e) => {
        const val = e.target.value;
        const name = `${urls}${val}`;
        fetch(name, { method: 'GET' })
            //return promises object
            .then((resp) => resp.json())
            //return data
            .then((datas) => {
                this.setState({hotels:datas})
            })
    }
    renderHotel = (data) => {
        if(data){
        return (data.map((item) => {
            return (
                <option key={item._id}>
                    {item.name} | {item.city_name}
                </option>
            )
        }))}
    }
    render() {
        return (
            <>
                <div className="imageContainer">
                    <div className="logo">
                        D!
                    </div>
                    <div className="title">
                        Plan Trip with US
                    </div>
                    <select className="list" onChange={this.selectValue}>
                        <option>--select City ----</option>
                        {this.renderCity(this.state.city)}
                    </select>
                    <select className="hotelList">
                        <option>--select Hotel ---</option>
                        {this.renderHotel(this.state.hotels)}
                    </select>
                </div>
            </>
        )
    }
}
