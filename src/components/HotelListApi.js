import React from 'react';
import HotelListDisplay from './HotelListDisplay'
import axios from 'axios';
import './HotelList.css';
import RoomFilter from './RoomFilter';

const url = 'https://developerfunnel.herokuapp.com/hotellist/';

class HotelListApi extends React.Component {
    constructor(props) {
        super();

        this.state = {
            hotelList: ''
        };
    }
    //Call Api using axios.
    componentDidMount() {
        const ids = this.props.match.params.id?this.props.match.params.id:1;
        sessionStorage.setItem('termid' ,ids)
        axios.get(`${url}${ids}`)
            .then((resp) => {
                this.setState({ hotelList: resp.data });
            })

    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="filter">
                    <RoomFilter />
                    </div>
                    <div className="Displaydata">
                        <div className="Display">
                            <HotelListDisplay dataTransfer={this.state.hotelList} />
                            
                        </div>
                    </div>


                </div>
            </>
        )
    }
}
export default HotelListApi;