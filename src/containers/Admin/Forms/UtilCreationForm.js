import React from 'react';
import { Button } from "react-bootstrap";
import { Paper } from 'material-ui';

import Aux from "../../../hoc/Aux";
import './Forms.css';

const SupplierCreationForm = props => {

  return (
    <Aux>
      <form onSubmit={props.onSubmit} className="form">
        <Paper className='formPaper' zDepth={2}>
          <div className="form-group">
            <label className="control-label">Pavadinimas:</label>
            <input type="text" className="form-control" value={props.title} onChange={props.fieldHandler} name="title" />
          </div>
          <div className="form-group">
            <label className="control-label">Kaina:</label>
            <input type="number" className="form-control" value={props.price} onChange={props.fieldHandler} name="city" />
          </div>
          <div className="form-group">
            <label className="control-label">Aprašymas:</label>
            <input type="text" className="form-control" value={props.description} onChange={props.fieldHandler} name="category" />
          </div>
          <div className="form-group" >
            <label className="control-label" >Paslaugos tipas:</label>
            <select onChange={props.fieldHandler} className="form-control" name="institutionType">
              <option value='BEAUTY'>Grožio paslaugos</option>
              <option value='EDUCATION'>Ugdymas</option>
              <option value='FOOD'>Maistas</option>
              <option value='IT'>Informacinės technologijos</option>
              <option value='TRANSPORT'>Transportas</option>
            </select>
          </div>
        </Paper>
        <div className='buttonBlock form-group'>
          <Button id='supplierCreationSubmit' bsStyle="success" bsSize='lg' type="submit">Registruoti</Button>
          {' '}
          <Button id='supplierCreationCancel' bsStyle="danger" bsSize='lg' type="button" onClick={props.back}>Atšaukti</Button>
        </div>
      </form>
    </Aux>
  )
}

export default SupplierCreationForm;