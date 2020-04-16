import React, { Component } from 'react'
import {Card, CardDeck} from 'react-bootstrap'

export default class PokeCard extends Component {
    constructor() {
        super() 
        this.state = {
            name: "",
            imageUrl: "",
            pokemonIndex: "",

        }
    }


    componentDidMount() {
        const {name, url} = this.props
        const pokemonIndex = url.split('/')[url.split('/').length - 2]
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`

        this.setState({
            name, pokemonIndex, imageUrl
        })
    }

    render() {
        
        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={this.state.imageUrl} />
                        <Card.Body>
                            <Card.Title>{this.state.name}</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">{this.state.pokemonIndex}</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
        )
    }
}
