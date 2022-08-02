<script>

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher()

    let searchTerm =''

    const search = (e) => {
        searchTerm = e.target.value
        if(searchTerm){
            dispatch('search', {
                searchTerm,
            })
        }

        else{
            dispatch('clearSearch', {
                
            })
        }
    }
</script>


<input 
    placeholder="Search Your Movies"
    value={searchTerm}
    on:keyup={search}    
/>

<style>
    input{
        width: 100%;
    }
</style>