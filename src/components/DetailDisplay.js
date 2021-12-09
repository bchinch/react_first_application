import React from 'react';
import './Detail.css';
import { Link } from 'react-router-dom';

const DetailDisplay = (props) => {

console.log(props)
    const hotelDetails = ({ data }) => {
        if (data) {
            return (
                data.map((item) => {
                    return (
                        <div className="containers_con" key={item._id}>
                            <div className="images_img">
                                <img src={item.thumb} alt="item.name" />
                            </div>
                            <div className="data">
                                <div className="data_name">
                                    <h2>{item.name}</h2>
                                </div>
                                <div className="data_cityname">
                                    <p>231 custmor Rating</p>
                                </div>
                                <div className="data_city">
                                    <p>  old Price:<span>1000</span></p>
                                </div>
                                <div className="data_cost">
                                    <h5>New Price:{item.cost}</h5>
                                </div>
                                <div className="data_address">
                                    <h4> you can find your best rooms and environments here</h4>
                                </div>
                                <div className="data_instock">
                                    <h1> Available</h1>
                                </div>

                                <button><Link to={`/booking/${item.name}`}>Book Now</Link></button>


                            </div>
                        </div>
                    )
                })
            )
        }

    }
    return (
        <div className="container">
            <div className="title">
                {hotelDetails(props)}
                
            </div>

        </div>


    )

}
export default DetailDisplay;