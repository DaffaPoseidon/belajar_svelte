<script>
    import App from './App.svelte'
    import MovieInput from './MovieInput.svelte'

    const submitInput = (movie) => {
        console.log(movie)
    }
</script>

<main>
    <App/>
    <MovieInput on:submitInput={submitInput}/>
</main>

<style>

</style>