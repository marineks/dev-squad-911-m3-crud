import React, { Component } from 'react';
import axios from 'axios'

export default class Dashboard extends Component {

    state = {
        burgers : []
    }

    componentDidMount() {
        axios
        .get("http://localhost:4000/api/burgers") // get => ref au SERVER | axios permet de communiquer entre front et back!
        .then((responseFromApi) => {
            console.log(responseFromApi.data); // .DATA = MOT RESERVE qui permet de chercher la data
            this.setState({
                burgers : responseFromApi.data
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
            { this.state.burgers.map((burger) => {
                return (
                    <div key={burger._id}>
                        <p>{burger.name}</p>
                        <p>{burger.price}</p>
                        <p>{burger.image}</p>
                    </div>
                )}
            )}
                  
            </div>
        )
    }
}
