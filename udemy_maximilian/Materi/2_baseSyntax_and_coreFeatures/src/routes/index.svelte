<script>
    import ContactCard from './ContactCard.svelte'

    let name = "2B"
    let count = 0
    let jobTitle = "Android"
    let linkImage = ""
    let description = ""

    $: reactiveName = name.toUpperCase()
    $: if(name === "9S"){
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
    <ContactCard userName={name} userJobTitle={jobTitle} userLinkImage={linkImage} userDescription={description}/>
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
    .main input{
        margin-top: 1em;
        padding: 1em;
        border-radius: 8px;
    }
</style>