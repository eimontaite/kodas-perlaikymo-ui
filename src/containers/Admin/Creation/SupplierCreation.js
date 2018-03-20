import React, {Component} from 'react';
import axios from 'axios';

import Aux from '../../../hoc/Aux';
import SupplierCreationForm from '../Forms/SupplierCreationForm';
import './Creation.css';

class SupplierCreation extends Component {
state = {
            title:'',
            city:'',
            companyCode:'',
            image:'',
            rating:'',
            type:'',
        }

      submitHandler = (e) =>{
        e.preventDefault();
        const supplierParams = {
            title: this.state.title,
            city: this.state.city,
            companyCode: this.state.companyCode,
            image: this.state.image,
            rating: this.state.rating,
            type: this.state.type,
        }

        axios.post('http://localhost:8080/api/supplier', supplierParams)
        .then((response)=>{
            console.log(response.status)
            console.log(response.data)
        })
        .catch((erorr) => {
            console.log(erorr)
        })
    }
      fieldHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
        console.log("Input value: " + e.target.value)
      }

    render(){
        return(
            <Aux>
            <h3 className="creationHeader">Naujas tiekėjas</h3>
        <div>
            <SupplierCreationForm 
            fieldHandler={this.fieldHandler} back={this.props.history.goBack} onSubmit={this.submitHandler}/>
            </div>
            </Aux>
        )
    }
}

export default SupplierCreation;