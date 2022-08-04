<script>
    import {createEventDispatcher} from 'svelte'
    const dispatch = createEventDispatcher()

    let title = ''
    let score = 1

    const inputMovie = (e) => {
        title = e.target.value
    }

    const inputScore = (e) => {
        // console.log(e.target.value, "Ini target value", typeof(e.target.value))
        // console.log(score, "Ini score sebelum di-assign", typeof(score))
        score = +e.target.value
        // console.log(score, "Ini score setelah di-assign", typeof(score))
    }

    const submitInput = () => {
        if(title){
            dispatch('submitInput', {
            movie: {
                title,
                score
            }
        })
        title = ''
        score = 1
        }
    }
</script>

<main>
    <input 
        type="text"
        placeholder="Input the Android type"
        value={title}
        on:keyup={inputMovie}
    />

    <select value={score} on:change={inputScore}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
    </select>

    <button on:click={submitInput} disabled={!title}>Submit</button>
</main>

<style>
    main{
        text-align: center;
        font-size: 1rem;
    }
    input{
        padding: 1em;
    }
    select{
        padding: 1em;
    }
    button{
        padding: 1em;
    }
</style>