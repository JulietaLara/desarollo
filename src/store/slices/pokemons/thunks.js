import { setPokemons, startLoading } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
    return async ( disptach, getState) => {
        disptach( startLoading());
        disptach( setPokemons());
    }
}