<script>
    import { createEventDispatcher, } from "svelte";

    export let title;
    export let price;
    export let bestseller = false;

    const dispatch = createEventDispatcher();

    const onDispatch = () => {
        dispatch("add-to-cart", {
            id: "p1",
            name: "NieR",
        });
    };
</script>

<article>
    <h1>{title}</h1>
    <h1>${price}</h1>
    {#if bestseller}
        <h3>BESTSELLER</h3>
    {/if}
    <button on:click={onDispatch}>Add to cart</button>
    <button
        on:click={() => {
            dispatch("delete", "p1");
        }}>Delete</button
    >
</article>
