import React from 'react';
import {Table} from 'react-bootstrap';


const InstitutionTableListComponent = (props) => {
    return (
        <Table condensed hover responsive>
            <thead>
                <tr>
                    <th>Nuotrauka</th>
                    <th>Pavadinimas</th>
                    <th>Kaina</th>
                    <th>Aprašymas</th>
                    <th>Kategorija</th>
                </tr>
            </thead>
            <tbody>{props.util}</tbody>
        </Table>

    )
}

export default InstitutionTableListComponent;