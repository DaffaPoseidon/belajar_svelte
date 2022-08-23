<script>
    let name = "NieR"
    let count = 0

    $: reactiveName = name.toUpperCase()

    const IncraseCount = () => {
        count += 1
    }
</script>

<div class="main">
    <p>Namaku adalah {reactiveName}</p>
    <button on:click={IncraseCount}>Klik aku untuk menambahkan {count}</button>
</div>

<style>
    .main{
        text-align: center;
    }

    .main p{
        margin-top: 12em;
        padding: 1em;
    }

    .main button{
        margin-top: 1em;
        padding: 1em;
    }
</style>