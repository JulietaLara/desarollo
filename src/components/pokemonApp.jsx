import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../store/slices/pokemons/thunks'

export  const  pokemonApp = () => {

    const { pokemons, page} = useSelector( state => state.pokemons)

        const dispatch = useDispatch()

        useEffect(() => {
            dispatch( getPokemons() )
        }, [] )

    return (
        <div>
            pokemonApp
            { pokemons.map( (pokemon, key) => {
                return <li key={key}> {pokemon.name}</li>
            })}

            <button onClick={ () => dispatch( getPokemons(page))}> Next </button>
        </div>
    )
}