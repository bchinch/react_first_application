import React from 'react';

const url = "http://localhost:7090/booking";

class PlaceBooking extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: Math.floor(Math.random() * 1000000),
            user_firstname: 'bhagya',
            user_lastname: '',
            user_email: '',
            user_num: '',
            hotel_name: this.props.match.params.hotel_name,
            hotel_cost: sessionStorage.getItem('cost'),
            date: ''
        }
    }
    onChanges = (e) => {
        console.log(e.target.name);
        this.setState({ [e.target.name]: e.target.value });
    }
    onHandles = () => {
        fetch(url,
            {
                method: 'POST',
                headers:
                {
                    'Content-Type': 'application/json',
                    'accept':'application/json'
                },
                body: JSON.stringify(this.state)

            })
            .then(this.props.history.push('/viewbooking'));
    }
    render() {
        return (
            <div className="container">

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Booking Id</label>
                    <input type="hotel" readOnly className="form-control" value={this.state.id} onChange={this.onChanges} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Hotel Name</label>
                    <input type="hotel" readOnly className="form-control" placeholder="Enter Hotel Name" onChange={this.onChanges} value={this.state.hotel_name} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">User firstname</label>
                    <input type="email" className="form-control" name="user_firstname" placeholder="Enter Firstname" onChange={this.onChanges} value={this.state.user_firstname} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">User Lastname</label>
                    <input type="Lastname" className="form-control" name="user_lastname" placeholder="Enter Lastname" onChange={this.onChanges} value={this.state.user_lastname} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" name="user_email" placeholder="Enter Email" onChange={this.onChanges} value={this.state.user_email} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Phone num</label>
                    <input type="phone" className="form-control" name="user_num" placeholder="Enter Phone num" onChange={this.onChanges} value={this.state.user_num} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Date</label>
                    <input type="Date" className="form-control" name="date" placeholder="Enter Date" onChange={this.onChanges} value={this.state.date} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Hotel Cost</label>
                    <input type="cost" readOnly className="form-control" onChange={this.onChanges} value={this.state.hotel_cost} />
                </div>
                <button type="button" onClick={this.onHandles} class="btn btn-primary">Submit</button>

            </div>
        )
    }
}
export default PlaceBooking;