<script>
    import Modal from "./components/Modal.svelte";
import Product from "./components/Product.svelte";

    let showModal = false;
    let closeable = false;

    let products = [
        {
            id: "p1",
            title: "A book",
            price: "9.99",
        },
    ];

    const addToCart = (event) => {
        console.log(event);
    };

    const deleteProduct = (event) => {
        console.log(event.detail);
    };
</script>

{#each products as product}
    <Product
        {...product}
        on:add-to-cart={addToCart}
        on:delete={deleteProduct}
    />
{/each}

<button on:click="{() => showModal = true}">Show Modal</button>

{#if showModal}
	<Modal 
        on:cancel="{() => showModal = false}" 
        on:close="{() => showModal = false}"
        let:didAgree={closeable}
    >
	    <h1 slot="header">Hello!</h1>
	    <p>This work!</p>
	    <button slot="footer" on:click="{() => (showModal = false)}" disabled={!closeable}>Confirm</button>
	</Modal>
{/if}