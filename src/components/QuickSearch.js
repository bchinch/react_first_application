import React from 'react';
import QuickDisplay from './QuickDisplay'

const url = 'https://developerfunnel.herokuapp.com/booking';

class QuickSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            quickList:''
        }
    }
    componentDidMount() {
        fetch(url,{method: 'GET'})
        .then((resp)=>resp.json())
        .then((data)=>{
            this.setState({quickList:data})
        })
    }
    render() {
        return (
            <>
                <QuickDisplay tripData = {this.state.quickList}/>
            </>
        )
    }
}
export default QuickSearch;