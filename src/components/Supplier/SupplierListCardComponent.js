import React from 'react';

const SupplierListCardComponent = (props) => {
    return (
        <tr>
            <td>{props.image}</td>
            <td>{props.title}</td>
            <td>{props.city}</td>
            <td>{props.companyCode}</td>
            <td>{props.rating}</td>
            {/* <td>{props.type}</td> */}
            <button className="btn btn-danger" onClick={() => props.deleteHandler(props.id)} >Pašalinti</button>
            </tr>)
}
        //     {props.basicList ? <button className="btn btn-danger" onClick={() => props.deleteHandler(props.id)} >Pašalinti</button> : <button className="btn btn-success" onClick={() => props.addHandler(props.id)} >Priskirti paslaugai</button>}
        // </tr>)


export default SupplierListCardComponent