<script>
    import MovieInput from './MovieInput.svelte'

    let judul = "YoRHa"

    const submitAndroid = (android) => {
        console.log(android)
    }
</script>

<div class="main">
    <h1>{judul}</h1>
    <MovieInput on:submitAndroid={submitAndroid}/>
</div>

<style>
    .main{
        text-align: center;
    }

    .main h1{
        font-size: 6rem;
        text-align: center;
    }
</style>