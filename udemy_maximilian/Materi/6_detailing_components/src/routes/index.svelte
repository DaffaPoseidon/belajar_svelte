<script>
    import Product from "./components/Product.svelte";


</script>

<Product
    on:add-to-cart="{() => alert('Add to cart!')}"
    on:click="{() => alert('Delete!')}"
/>