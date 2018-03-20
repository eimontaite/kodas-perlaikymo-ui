import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import SupplierListCardComponent from '../../components/Supplier/SupplierListCardComponent';
import SupplierTableListComponent from '../../components/Supplier/SupplierTableListComponent';
import '../Containers.css';

class SupplierList extends Component {
    state = {
        suppliers: ''
    }
    componentWillMount = () => {
        this.getServiceSuppliers()
    }

    getServiceSuppliers = () => {
        axios.get('http://localhost:8080/api/supplier')
            .then((response) => {
                this.setState({
                    suppliers: response.data.map(this.composeSuppliers)
                })
                console.log(response.status)
            })
            .catch((erorr) => {
                console.log(erorr)
            })
    }

    deleteHandler = (supplierId) => {
        axios.delete('http://localhost:8080/api/supplier/' + supplierId)
            .then((response) => {
                console.log(response.status)
                this.getServiceSuppliers();
            })
            .catch((erorr) => {
                console.log(erorr)
            })
    }

    composeBooks = (supplier, index) => {
        return (
            <SupplierListCardComponent
                id={supplier.id}
                title={supplier.title}
                city={supplier.city}
                companyCode={supplier.companyCode}
                image={supplier.image}
                rating={supplier.rating}
                // type={supplier.type}
                deleteHandler={this.deleteHandler}
            />
        )
    }


    render() {
        return (<div className='list'>
            <Link to={'/suppliers/create'}><Button bsSize="lg" bsStyle="info">Naujas teikėjas</Button></Link>
            <br />
            <br />
            <SupplierTableListComponent deleteHandler={this.deleteHandler} suppliers={this.state.suppliers} /></div>)
    }
}

export default SupplierList;