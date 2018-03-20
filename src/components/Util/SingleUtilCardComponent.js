import React from 'react'

const SingleUtilCardComponent = (props) => {
    return (
        <tr key={props.key}>
            <td>Nuotrauka:{props.image}</td>
            <td>Pavadinimas:{props.title}</td>
            <td>Kaina:{props.city}</td>
            <td>{props.description}</td>
            <td>{props.type}</td>
        </tr>
    )
}

export default SingleUtilCardComponent