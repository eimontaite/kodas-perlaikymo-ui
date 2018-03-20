import React from 'react';
import { Button } from "react-bootstrap";
import { Paper, TextField } from 'material-ui';

import Aux from "../../../hoc/Aux"
import './Forms.css';

const SupplierCreationForm = props => {

    return (
        <Aux>
            <form onSubmit={props.onSubmit} className="form">
                <Paper className='bookCreationForm' zDepth={2}>
                    <div className="form-group">
                        <label className="control-label">Pavadinimas:</label>
                        <input type="text" className="form-control" value={props.title} onChange={props.fieldHandler} name="title" />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Miestas:</label>
                        <input type="text" className="form-control" value={props.city} onChange={props.fieldHandler} name="city" />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Įmonės kodas:</label>
                        <input type="number" className="form-control" value={props.companyCode} onChange={props.fieldHandler} name="companyCode" />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Reitingas:</label>
                        <input type="number" className="form-control" value={props.rating} onChange={props.fieldHandler} name="rating" />
                    </div>
                    <div className="form-group" >
                        <label className="control-label" >Tiekėjo tipas:</label>
                        <select onChange={props.fieldHandler} className="form-control" name="institutionType">
                            <option value='COMPANY'>Įmonė</option>
                            <option value='STATE'>Valstybinė įmonė</option>
                            <option value='NATURAL_PERSON'>Fizinis asmuo</option>
                        </select>
                    </div>
                </Paper>
                <div className='buttonBlock'>
                    <Button id='supplierCreationSubmit' bsStyle="success" bsSize='lg' type="submit">Registruoti</Button>
                    {' '}
                    <Button id='supplierCreationCancel' bsStyle="danger" bsSize='lg' type="button" onClick={props.back}>Atšaukti</Button>
                </div>
            </form>
        </Aux>
    )
};

export default SupplierCreationForm;
