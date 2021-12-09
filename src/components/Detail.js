import React from 'react';
import axios from 'axios';
import DetailDisplay from './DetailDisplay';
import { Link } from 'react-router-dom';
import './Detail.css';

const url = "https://developerfunnel.herokuapp.com/hotelsdetails/";

class Detail extends React.Component {
    constructor(props) {
        super();
        this.state = {
            details: '',
            termid : sessionStorage.getItem('termid')
        }
    }

    componentDidMount() {
        //console.log(this.props.match.params.id);
        const id = this.props.match.params.id;
        axios.get(`${url}${id}`)
            .then((resp) => {
                this.setState({ details: resp.data });
                
                sessionStorage.setItem('cost' ,resp.data[0].cost);
            })
    }
    render() {
        return (
            <>
                <div  className="Back">
                    <button><Link to={`/list/${this.state.termid}`}>Back</Link></button>
                    </div>
                    <DetailDisplay data={this.state.details} />
                    
                
            </>
        )
    }
}

export default Detail;