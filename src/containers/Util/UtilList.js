import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import UtilListCardComponent from '../../components/Util/UtilListCardComponent';
import UtilTableListComponent from '../../components/Util/UtilTableListComponent';
import '../Containers.css';

class UtilListContainer extends Component {
    state = {
        utils: ''
    }

    componentWillMount = () => {
        this.getAllUtils();
    }

    getAllUtils = () => {
        axios.get('http://localhost:8080/api/util')
            .then((response) => {
                this.setState({
                    utils: response.data.map(this.composeUtil)
                })
                console.log(response.status)
            })
            .catch((erorr) => {
                console.log(erorr)
            })
    }
    removeHandler = (utilId) => {
        axios.delete('http://localhost:8080/api/util/' + utilId)
            .then((response) => {
                console.log(response.status)
                this.getAllUtils()
            })
            .catch((erorr) => {
                console.log(erorr)
            })
    }

    composeUtil = (util, index) => {
        return (
            <UtilListCardComponent
                key={index}
                id={util.id}
                image={util.image}
                title={util.title}
                price={util.price}
                description={util.description}
                type={util.type}
                removeHandler={this.removeHandler}
            />)
    }

    render() {
        return (<div className='list'>
            <Link to={'/util/add/new'}><Button bsSize="lg" bsStyle="info">Nauja paslauga</Button></Link>
            <br />
            <br />
            <UtilTableListComponent utils={this.state.utils} /></div>)
    }
}

export default UtilListContainer;
