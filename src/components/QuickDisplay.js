import React from 'react';
import { Link } from 'react-router-dom';
import './QuickDisp.css';

const QuickDisplay = (props) => {
    const listDrip = ({ tripData }) => {
        if (tripData) {
            return (tripData.map((item) => {
                return (
                    <Link to={`/list/${item._id}`} key={item._id}>
                        <div className="imagecontainer">
                            <div className="imagetitle">
                                <img src={item.image} alt="error"></img>
                            </div>
                            <div className="imagetitle2">
                                <div className="titles">
                                    {item.name}
                                </div>
                                <div className="subtitle">
                                    Start your  {item.name} Trip with US.
                                </div>
                            </div>

                        
                    </div>
                    </Link >
                )

            }))
        }

    }
return (
    <>
        <div className="QuickSearchcontainer">
            <div className="QuickSearchHeading">
                QuickDisplay
            </div>
            <div className="QuickSearchSubHeading">
                Discover trip By Type
            </div>
            <br />
            <div> {listDrip(props)}</div>


        </div>
    </>
)
}
export default QuickDisplay;