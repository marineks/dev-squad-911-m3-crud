import React, { Component } from 'react';
import axios from 'axios';

export default class FormCreateBurger extends Component {

    state = {
        name: "",
        price: 0,
        image: ""
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name] : value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        axios
        .post("http://localhost:4000/api/burgers", {
            name : this.state.name,
            price: this.state.price,
            image: this.state.image
        })
        .then((apiResponse) => {
            this.props.history.push("/admin/dashboard") // ranavoir avec push de l'arr, c'est REDIRECT!!!!
        })
    }


    render() {
        return (
            <div>
                <h1>Form and Create a Burger</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">Name</label>
                    <input onChange={this.handleChange} value={this.state.name} name="name" type="text"/>
                    <label htmlFor="">Price</label>
                    <input onChange={this.handleChange} value={this.state.price} name="price" type="number"/>
                    <label htmlFor="">Image</label>
                    <input onChange={this.handleChange} value={this.state.image} name="image" type="text"/>
                    <button>Please submit your burger! sorry</button>
                </form>
            </div>
        )
    }
}
