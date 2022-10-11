<script>
    import { createEventDispatcher } from "svelte";

    export let productTitle

    const dispatch = createEventDispatcher();

    const onDispatch = () => {
        dispatch(
            'add-to-cart', {
            id: 'p1', 
            name: 'NieR'
        })
    }

</script>

<article>
    <h1>{productTitle}</h1>
    <button on:click="{onDispatch}">Add to cart</button>
    <button on:click="{() => {dispatch('delete', 'p1')}}">Delete</button>
</article>