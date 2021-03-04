import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './Pokemon.css';
class Pokemon extends Component {

    render() {
        const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.pokemon;
        return (

            <div className="pokemon">
                <h4>{name}</h4>
                <p>{type}</p>
                <p>{value} {measurementUnit}</p>
                <img src={image} alt={`${name}`}/>
            </div>
        );
    }
}

export default Pokemon;