import axios from 'axios';
import React from 'react';
import ViewBooking from './ViewBooking';

const url = "http://localhost:8090/booking";


class ViewBookingApi extends React.Component {
    constructor(props) {
        super();
        this.state = {
            details: ''
        }
    }
    

    render() {
        return (
            <>
            <div className="hello">
                <ViewBooking data={this.state.details} />
                 {/* {ViewBooking item_data={this.state.details}  */}
                 
            </div>
            </>
        )
    }

    componentDidMount() {
        axios.get(`${url}`)
            .then((resp) => {
                console.log(resp.data)
                this.setState({ details: resp.data });
            })
    }
}


export default ViewBookingApi;