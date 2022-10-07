import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

export  const pokemonSlice = createSlice({
    name: 'Pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        startLoading: (state, action) => {
            state.isLoading = false;
            state.page =action.payload.page;
            state.pokemons = action.payload.pokemons; 
        }
    }
})

export const { startLoading, setPokemons, getPokemonById} = pokemonSlice.actions 