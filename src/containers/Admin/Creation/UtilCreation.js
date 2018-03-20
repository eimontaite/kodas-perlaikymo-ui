import React, { Component } from 'react';
import axios from 'axios';

import Aux from '../../../hoc/Aux';
import UtilCreationForm from '../Forms/UtilCreationForm';
import './Creation.css';

class UtilCreation extends Component {
    state = {
        image: '',
        title: '',
        price: '',
        description: '',
        type: 'BEAUTY'
    }

    fieldHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log("Input field name: " + e.target.name)
        console.log("Input field value: " + e.target.value)
    }
    submitHandler = (e) => {
        e.preventDefault();
        const utilParams = {
            image: this.state.image,
            title: this.state.title,
            price: this.state.price,
            description: this.state.description,
            type: this.state.type
        }
        axios.post('http://localhost:8080/api/util', utilParams)
            .then((response) => {
                console.log(response.status)
            })
            .catch((erorr) => {
                console.log(erorr)
            })
    }

    render() {
        return (
            <Aux>
                <h3 className="creationHeader">Nauja paslauga</h3>
                <div><UtilCreationForm onSubmit={this.submitHandler} back={this.props.history.goBack} fieldHandler={this.fieldHandler} /></div>
            </Aux>)
    }
}

export default UtilCreation;