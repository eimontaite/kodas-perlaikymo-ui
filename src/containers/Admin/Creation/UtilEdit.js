import React, {Component} from 'react';
import axios from 'axios';

import UtilCreationForm from '../Forms/UtilCreationForm';

class UtilEdit extends Component {
        utilId = this.props.utilId
        state = {
            image: '',
            title: '',
            price: '',
            description: '',
            type: 'BEAUTY'
        }
      
      fieldHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
        console.log("Input value: " + e.target.value)
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
        axios.put('http://localhost:8080/api/util/'+ this.utilId, utilParams)
        .then((response)=>{
            console.log(response.status)
        })
        .catch((erorr) => {
            console.log(erorr)
        })
        }

      render(){
          return (<div><UtilCreationForm onSubmit={this.submitHandler} fieldHandler={this.fieldHandler} />
          </div>)
      }
}

export default UtilEdit;