import React, { Component } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Aux from '../../hoc/Aux';
import SingleUtilCardComponent from '../../components/Util/SingleUtilCardComponent'
import SupplierListCardComponent from '../../components/Supplier/SupplierListCardComponent'
import SupplierTableListComponent from '../../components/Supplier/SupplierTableListComponent';

class UtilView extends Component {
    // from router
    utilId = this.props.utilId;
    state = {
        util: '',
        suppliers: ''
    }

    componentWillMount = () => {
        axios.get('http://localhost:8080/api/util/' + this.utilId)
            .then((response) => {
                this.setState({
                    util: this.composeUtil(response.data)
                })
                this.getBooksFromUtil();
                console.log(response.status)
            })
            .catch((erorr) => {
                console.log(erorr)
            })

    }

    getServiceSuppliers = () => {
        axios.get('http://localhost:8080/api/util/' + this.utilId + '/supplier')
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
    deleteHandler = (supplierId) => {
        axios.delete('http://localhost:8080/api/util/' + this.utilId + '/supplier/' + supplierId)
            .then((response) => {
                console.log(response.status)
                this.getServiceSuppliers();
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
                rating={supplier.rating}
                type={supplier.type}
            />
        )
    }


    composeUtil = (util) => {
        return (<SingleUtilCardComponent
            id={util.id}
            title={util.title}
            city={util.city}
            image={util.image}
            category={util.description}
            type={util.type}

        />)
    }

    render() {
        return (
        <Aux>
            <div>{this.state.util}</div>
            {/* blocked updates will be the end of me. commenting this out, will think about it later */}
            {/* <Link to={'/uits/' + this.props.utilsId + '/add/supplier'}><Button bsSize="lg" bsStyle="info">Priskirti paslaugą</Button></Link> */}
            <div><SupplierTableListComponent suppliers={this.state.suppliers} /></div>
        </Aux>)
    }
}

export default UtilView;
