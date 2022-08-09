<script>
    let count = 0

    const IncraseCount = () => {
        count += 1
    }
</script>

<div class="main">
    <button on:click={IncraseCount}>Klik aku untuk menambahkan {count}</button>
</div>

<style>
    .main{
        text-align: center;
    }

    .main button{
        margin-top: 12em;
        padding: 1em;
    }
</style>