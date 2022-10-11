<script>
    import { createEventDispatcher } from "svelte";

    export let buttonAlert = "BUTTON ALERT DI BAWAH!"

    const dispatch = createEventDispatcher();

    const onDispatch = () => {
        dispatch('add-to-cart')
    }

</script>

<article>
    <h1>{buttonAlert}</h1>
    <button on:click="{onDispatch}">Add to cart</button>
    <button on:click>Delete</button>
</article>