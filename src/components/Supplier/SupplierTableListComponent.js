import React from 'react';
import {Table} from 'react-bootstrap';

const SupplierTableListComponent = (props) => {
    return (
        <Table condensed hover responsive>
            <thead>
                <tr>
                    <th>Nuotrauka</th>
                    <th>Pavadinimas</th>
                    <th>Miestas</th>
                    <th>Įmonės kodas</th>
                    <th>Reitingas</th>
                    <th>Tipas</th>
                    {/* <th>OTHER</th> */}
                </tr>
            </thead>
            <tbody>
                {props.suppliers}
            </tbody>
        </Table>)
}

export default SupplierTableListComponent;