import { writable } from "svelte/store";
import type {Writable} from "svelte/store";

export const pokemon: Writable<any[]> = writable([]);

export const fetchPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?40")
    const data = await response.json();
    pokemon.set(data.results);
}