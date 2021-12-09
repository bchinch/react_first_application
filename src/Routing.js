import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HotelListApi from './components/HotelListApi';
import Home from "./Home";
import Detail from "./components/Detail";
import PlaceBooking from './components/PlaceBooking';
import ViewBookingApi from './components/ViewBookingApi';

class Routing extends React.Component {
  render() {
    return (
      <Router>
        
        <Fragment>
            <Route exact path='/' component={Home} />
            <Route  path='/list/:id' component={HotelListApi} />
            <Route  path='/details/:id' component={Detail} />
            <Route  path='/booking/:hotel_name' component={PlaceBooking} />
            <Route  path='/viewbooking' component={ViewBookingApi} />
        </Fragment>
        
      </Router>
    )
  }
}
export default Routing;