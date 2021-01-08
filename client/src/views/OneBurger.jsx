import React, { Component } from 'react';
import axios from 'axios';

export default class OneBurger extends Component {

    state = {
        burger: null
    }

    componentDidMount() {
        const burgerId = this.props.match.params.id

        axios
        .get('http://localhost:4000/api/burgers/' + burgerId)
        .then((apiResponseFromTheFutureAndNotThePast) => {
            
                this.setState({
                    burger : apiResponseFromTheFutureAndNotThePast.data
                })
        })
    }

    render() {
        if (!this.state.burger) {
        return <div>Loading.....</div>;
        }

        return (
            <div>
                <h1>One Burger details</h1>
                <p>{this.state.burger.name}</p>
                <p>{this.state.burger.price}</p>
            </div>
        )
    }
}
