import React from 'react';

const ViewBooking = (props) => {
    
    const displayData = ({ data }) => {
        console.log(data)
        if (data) {
            return( data.map((item) => {
                console.log(item)
                return (
                    <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <td>{item.user_firstname}</td>
                        <td>{item.hotel_name}</td>
                        <td>{item.hotel_cost}</td>
                    </tr>
                )
            }))
        }
        else{
            <div>error</div>
        }


    }
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">User name</th>
                    <th scope="col">hotel name</th>
                    <th scope="col">cost</th>
                </tr>
            </thead>
            <tbody>
                {displayData(props)}
            </tbody>
        </table>
    )
}

export default ViewBooking;