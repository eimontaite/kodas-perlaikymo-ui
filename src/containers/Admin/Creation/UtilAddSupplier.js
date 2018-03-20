import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import SupplierListCardComponent from '../../../components/Supplier/SupplierListCardComponent';
import SupplierTableListComponent from '../../../components/Supplier/SupplierTableListComponent';
import '../../Containers.css';

class UtilAddSupplier extends Component {
    utilId = this.props.utilId;
    state = {
        suppliers: ''
    }
    componentWillMount = () => {
        this.getSuppliers()
    }

    getSuppliers = () => {
        axios.get('http://localhost:8080/api/supplier')
            .then((response) => {
                this.setState({
                    books: response.data.map(this.composeSuppliers)
                })
                console.log(response.status)
            })
            .catch((erorr) => {
                console.log(erorr)
            })
    }

    addHandler = (supplierId) => {
        axios.post('http://localhost:8080/api/util/' + this.utilId + '/supplier/' + supplierId)
            .then((response) => {
                console.log(response.status)
            })
            .catch((erorr) => {
                console.log(erorr)
            })
    }

    composeSuppliers = (supplier, index) => {
        return (
            <SupplierListCardComponent
                id={supplier.id}
                title={supplier.title}
                city={supplier.city}
                companyCode={supplier.companyCode}
                image={supplier.image}
                rating={supplier.rating}
                type={supplier.type}
                addHandler={this.addHandler}
            />
        )
    }


    render() {
        return (<div className='list'>
            <SupplierTableListComponent addHandler={this.addHandler} suppliers={this.state.suppliers} /></div>)
    }
}

export default UtilAddSupplier;