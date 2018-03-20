import React from 'react';
import { Link } from 'react-router-dom';

const UtilListCardComponent = (props) => {
    return (
        <tr key={props.key}>
            <td>{props.image}</td>
            <td>{props.title}</td>
            <td>{props.price}</td>
            <td>{props.description}</td>
            <td>{props.type}</td>
            <td><Link to={'/util/' + props.id + '/edit'} className='btn btn-primary'>Redaguoti</Link></td>
            <td><Link to={'/util/' + props.id} className='btn btn-success'>Detaliau</Link></td>
            <td><button onClick={() => props.removeHandler(props.id)} className='btn btn-danger'>Pašalinti</button></td>
        </tr>
    )
}

export default UtilListCardComponent;