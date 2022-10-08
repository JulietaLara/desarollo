import { setPokemons, startLoading } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
    return async ( disptach, getState) => {
        disptach( startLoading());

        const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10}`
        const resp = await fetch( url )
        const data = await resp.json(); 
        disptach( setPokemons(
            {
                getPokemons: resp.data.results,
                page: page + 1 
            }
        ));
    }
}