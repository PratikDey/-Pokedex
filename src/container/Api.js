import React, { Component } from 'react'

export default class Api extends Component {

    async componentDidMount() {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=251")
        const response = data.json()
        console.log(response)
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
