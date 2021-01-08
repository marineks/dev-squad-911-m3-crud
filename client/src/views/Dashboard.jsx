import React, { Component } from 'react';
import axios from 'axios';
import { NavLink} from 'react-router-dom';

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
    
    handleDelete() {
        const burgerId = this.props.match.params.id;

        componentDidMount() {
        axios
        .delete("http://localhost:4000/api/burgers/" + burgerId)
        .then((apiResponse) => {
            console.log("DELETE",apiResponse);
            this.setState({
                burgers : apiResponse.data
            })
        })
    }
}

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
            { this.state.burgers.map((burger) => {
                return (
                    <div key={burger._id}>
                        <p>{burger.name}</p>
                        <p>PRice :{burger.price}</p>
                        <p>{burger.image}</p>
                    <NavLink exact to={`/burgers/${burger._id}`}>See Details</NavLink>
                    <button onClick={this.handleDelete()}>Delete PLEASE</button>

                    </div>
                )}
            )}
                  
            </div>
        )
    }
}

// http://localhost:4000/api/burgers/{some-id}