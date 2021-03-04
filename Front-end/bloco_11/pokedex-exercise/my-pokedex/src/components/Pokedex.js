import React, { Component } from 'react';
import './Pokedex.css';
import Pokemon from './Pokemon';

class Pokedex extends Component {

    render() {
        const pokemons = this.props.pokemon;
        return (
        <div className="pokedex">
            {pokemons.map(pokemon => 
                <Pokemon key={pokemon.id} pokemon={pokemon} />
            )}
        </div>
        );
    }
}

export default Pokedex;