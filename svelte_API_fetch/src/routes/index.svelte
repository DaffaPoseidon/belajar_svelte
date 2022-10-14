<script>
    import { onMount } from "svelte";
    import {fetchPokemon, pokemon} from "./store";

    $: promise = fetchPokemon();
</script>

{#await promise}
    <div>Waiting ....</div>
{:then results}
    {#each $pokemon as poke}
        <h3>{poke.name}</h3>
    {/each}
{:catch error}
    <div>{error.message}</div>
{/await}