import React, { Component } from 'react'


import PokeCard from './PokeCard'

export default class Api extends Component {
    constructor() {
        super()
        this.state = {
            pokeData: []
        }
    }

    async componentDidMount() {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=251")
        const response = await data.json()
        this.setState({
            pokeData: response.results
        })
        console.log(this.state.pokeData)
    }

    render() {
        return (
            <div className="row">
                {this.state.pokeData.map((pokemon, id) => 
                    <PokeCard 
                        key={id}
                        name={pokemon.name}
                        url={pokemon.url}
                    />
                )}
            </div>
        )
    }
}
