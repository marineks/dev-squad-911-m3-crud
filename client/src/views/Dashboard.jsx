import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

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
    
    
       // DELETE PROJECT:
    deleteBurger = (id) => {
        axios
        .delete(`http://localhost:4000/api/burgers/` + id) //http://localhost:4000/api/burgers/{some-id}
        .then( () =>{ 
            this.setState({
                burgers: this.state.burgers.filter((burger) => {
                    return burger._id !== id
                })
            })
        }   
        )
        .catch((err)=>{
            console.log(err)
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
                        <p>PRice :{burger.price}</p>
                        <p>{burger.image}</p>
                    <NavLink exact to={`/burgers/${burger._id}`}>See Details</NavLink>
                    <button onClick={() => this.deleteBurger(burger._id)}>Delete PLEASE</button>

                    </div>
                )}
            )}
                  
            </div>
        )
    }
}

// http://localhost:4000/api/burgers/{some-id}