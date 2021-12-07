import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HotelListApi from './components/HotelListApi';
import Home from "./Home"

class Routing extends React.Component {
  render() {
    return (
      <Router>
        
        <Fragment>
          
            <Route exact path='/' component={Home} />
            <Route  path='/list/:id' component={HotelListApi} />
          
        </Fragment>
        
      </Router>
    )
  }
}
export default Routing;