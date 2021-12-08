import React from 'react';
import axios from 'axios';
import DetailDisplay from './DetailDisplay';

const url = "https://developerfunnel.herokuapp.com/hotelsdetails/";

class Detail extends React.Component {
    constructor(props) {
        super();
        this.state = {
            details: '',
        }
    }

    componentDidMount() {
        //console.log(this.props.match.params.id);
        const id = this.props.match.params.id;
        axios.get(`${url}${id}`)
            .then((resp) => {
                this.setState({ details: resp.data });
            })
    }
    render() {
        return (
            <>
                
                    <DetailDisplay data={this.state.details} />
                
            </>
        )
    }
}

export default Detail;