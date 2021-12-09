import React from 'react';
import axios from 'axios';

const url = 'https://developerfunnel.herokuapp.com/rooms';


class RoomFilter extends React.Component {
    render() {
        return (

            <div>
                <div className="heading">Filter</div>
                <input type="radio" value="Male" name="gender" /> Male <br/>
                <input type="radio" value="Female" name="gender" /> Female <br/>
                <input type="radio" value="Other" name="gender" /> Other <br/>
            </div>

        )
    }
}
export default RoomFilter;