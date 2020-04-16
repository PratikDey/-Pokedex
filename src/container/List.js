import React, { Component } from 'react'
import Searchbox from "../components/Searchbox"

import PokeCard from './PokeCard'

export default class Api extends Component {
    constructor() {
        super()
        this.state = {
            pokeData: [],
            searchField:''
        }
    }

    async componentDidMount() {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=251")
        const response = await data.json()
        this.setState({
            pokeData: response.results
        })
    }

    onSearchChange = (event) => {
        this.setState({
            searchField: event.target.value 
        })
        console.log(this.state.searchField)
    }

    render() {
        const filter = this.state.pokeData.filter(pokemon => {
			return (pokemon.name.includes(this.state.searchField.toLowerCase()) ? pokemon: null);
		})
        return (
            <div>
                <Searchbox onEnter={this.onSearchChange}/>
                <div className="row">
                    {filter.map((pokemon, id) => 
                        <PokeCard 
                            key={id}
                            name={pokemon.name}
                            url={pokemon.url}
                        />
                    )}
                </div>
            </div>
        )
    }
}
