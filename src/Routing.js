import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HotelListApi from './components/HotelListApi';
import Home from "./Home";
import Detail from "./components/Detail";

class Routing extends React.Component {
  render() {
    return (
      <Router>
        
        <Fragment>
          
            <Route exact path='/' component={Home} />
            <Route  path='/list/:id' component={HotelListApi} />
            <Route  path='/details/:id' component={Detail} />
        </Fragment>
        
      </Router>
    )
  }
}
export default Routing;