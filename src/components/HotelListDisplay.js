import React from "react";
import './HotelList.css';
import {Link} from "react-router-dom"

const HotelListDisplay = (props) => {

    const dataDisplay = ({ dataTransfer }) => {
        if (dataTransfer) {
            if (dataTransfer.length > 0) {
                return (
                    dataTransfer.map((item) => {
                        return (
                            <div className="containers">
                                <div className="image">
                                    <img src={item.thumb} alt={item.name}></img>
                                </div>
                                <Link className="Hotelname" to={`/details/${item._id}`}>
                                    <h4>{item.name}</h4>
                                    
                                </Link>
                                <div className="address">
                                   <p> {item.address}</p>
                                </div>
                                <Link className="btn" to="/">{item.type[0].name}</Link>
                                <Link className="btn" to="/">{item.type[1].name}</Link>
                                <Link className="btn" to="/">{item.tripType[1].name}</Link>
                                
                            </div>
                        )
                    })
                )

            } else {
                return (
                    <p>no data found</p>
                )
            }


        } else {
            return (
                <p> Loading.....</p>
            )
        }

    }

    return (
        <>
            <div className="data_disp">
                {dataDisplay(props)}
            </div>
        </>
    )
}
export default HotelListDisplay;