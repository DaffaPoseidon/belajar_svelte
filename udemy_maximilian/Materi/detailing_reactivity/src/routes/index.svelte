<script>
    import ContactCard from './ContactCard.svelte'

    let name = ""
    let count = 0
    let jobTitle = ""
    let linkImage = ""
    let description = ""
    let formState = ""

    let createdContacts = [];

    $: reactiveName = name.toUpperCase()
    $: if(name === "9S"){s
        console.log(name)
        count = 9
    }

    const IncraseCount = () => {
        count += 1
    }

    const changeName = () => {
        name = "9S"
    }

    const inputName = (event) => {
        const changeName = event.target.value
        name = changeName
    }

    const addContact = () => {
        if(name.trim().length == 0 || jobTitle.trim().length == 0 || linkImage.trim().length == 0 || description.trim().length == 0){
            formState = "invalid"
            return;
        }
        createdContacts = [...createdContacts, {
            id: Math.random(),
            name: name,
            title: jobTitle,
            image: linkImage,
            desc: description,
        }],
        formState = "done"
    }

    const deleteFirst = () => {
        createdContacts = createdContacts.slice(1)
    }
    const deleteLast = () => {
        createdContacts = createdContacts.slice(0, -1)
    }

</script>

<div class="main">
    <p>Namaku adalah {reactiveName}</p>
    <button on:click={IncraseCount}>Klik aku untuk menambahkan {count}</button>
    <!-- <button on:click={changeName}>Klik aku untuk mengganti nama</button> -->
    <!-- <input type="text" placeholder="Masukkan nama" on:input="{inputName}"> -->
    <input type="text" placeholder="Masukkan nama" bind:value={name}>
    <input type="text" placeholder="Masukkan pekerjaan" bind:value={jobTitle}>
    <input type="url" placeholder="Masukkan link" bind:value={linkImage}>
    <textarea rows="10" bind:value={description}></textarea>
    <button on:click|preventDefault="{addContact}">Add Contact</button>
    <button on:click="{() => createdContacts = createdContacts.slice(1)}">Delete First</button>
    <button on:click="{deleteLast}">Delete Last</button>

    {#if formState === "invalid"}
        <p>The form state is invalid!</p>
    {:else}
        <p>Please fulfill the the columns above</p>
    {/if}
</div>

{#each createdContacts as contact, i (contact.id)}
    <h2># {i + 1}</h2>
	<ContactCard 
        userName={contact.name} 
        userJobTitle={contact.title} 
        userLinkImage={contact.image} 
        userDescription={contact.desc}
	/>
{:else}
    <p>Please add some contacts</p>
{/each}

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
    .main input{
        margin-top: 1em;
        padding: 1em;
        border-radius: 8px;
    }
</style>