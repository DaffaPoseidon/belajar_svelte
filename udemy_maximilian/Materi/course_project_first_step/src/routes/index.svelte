<script>
    import Header from './UI/Header.svelte'
    import MeetupGrid from './Meetups/MeetupGrid.svelte'

    let title = ""
    let subtitle = ""
    let address = ""
    let email = ""
    let description = ""
    let imageUrl = ""

    let meetups = [ 
        {
            id: 1,
            title: "NieR: Automata Guide",
            subtitle: "Learn playing NieR: Automata",
            description: "In this guide you will learn how to play NieR: Automata in detail",
            imageUrl: "https://i.pinimg.com/originals/f6/56/e8/f656e828e9afbfeaa91faac9d05c5cb9.jpg",
            address: "The Bunker",
            contactEmail: "YoRHa@gmail.com"
        },
        {
            id: 2,
            title: "NieR: Replicant Guide",
            subtitle: "Learn playing NieR: Replicant",
            description: "In this guide you will learn how to play NieR: Replicant in detail",
            imageUrl: "https://images2.alphacoders.com/113/thumb-1920-1130315.png",
            address: "Village",
            contactEmail: "Shadowlord@gmail.com"
        }
    ]
    
    const addMeetup = () => {
        const newMeetup = {
            id: Math.random().toString(),
            title: title,
            subtitle: subtitle,
            description: description,
            imageUrl: imageUrl,
            contactEmail: email,
            address: address,
        }
        meetups = [newMeetup, ...meetups]
        console.log(meetups)
    }
</script>

<div class="main">
    <Header/>
    <form on:submit|preventDefault="{addMeetup}">
        <div class="form-control">
            <label for="title">Title</label>
            <input type="text" id="title" bind:value="{title}">
        </div>
        <div class="form-control">
            <label for="title">Subtitle</label>
            <input type="text" id="subtitle" bind:value="{subtitle}">
        </div>
        <div class="form-control">
            <label for="title">Address</label>
            <input type="text" id="address" bind:value="{address}">
        </div>
        <div class="form-control">
            <label for="title">Image URL</label>
            <input type="text" id="imageUrl" bind:value="{imageUrl}">
        </div>
        <div class="form-control">
            <label for="title">E-mail</label>
            <input type="email" id="email" bind:value="{email}">
        </div>
        <div class="form-control">
            <label for="description">Description</label>
            <textarea rows="3" id="description" bind:value="{description}"/>
        </div>
        <button type="submit">Save</button>
    </form>
    <MeetupGrid meetups={meetups}/>
</div>

<style>
    .main{
        margin-top: 5rem;
    }
</style>
