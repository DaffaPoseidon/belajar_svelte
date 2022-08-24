<script>
    import Header from './UI/Header.svelte'
    import MeetupGrid from './Meetups/MeetupGrid.svelte'
    import TextInput from './UI/TextInput.svelte'
    import Button from './UI/Button.svelte'

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
        <TextInput 
            id="title" 
            label="Title" 
            value={title} 
            type="text" 
            on:input="{(event) => (title = event.target.value)}"
        />
        <TextInput 
            id="subtitle" 
            label="Subtitle"
            value={subtitle} 
            type="text" 
            on:input="{(event) => (subtitle = event.target.value)}"
        />
        <TextInput 
            id="address" 
            label="Address" 
            value={address} 
            type="text" 
            on:input="{(event) => (address = event.target.value)}"
        />
        <TextInput 
            id="imageUrl" 
            label="Image URL" 
            value={imageUrl} 
            type="text" 
            on:input="{(event) => (imageUrl = event.target.value)}"
        />
        <TextInput 
            id="email" 
            label="E-mail" 
            value={email} 
            type="email" 
            on:input="{(event) => (email = event.target.value)}"
        />
        <TextInput 
            id="description" 
            label="Description" 
            value={description} 
            controlType="textarea" 
            on:input="{(event) => (description = event.target.value)}"
        />
        <Button type="submit" caption="Save" />
    </form>
    <MeetupGrid meetups={meetups}/>
</div>

<style>
    .main{
        margin-top: 5rem;
    }
    form{
        widows: 30rem;
        max-width: 60%;
        margin: auto;
    }
</style>
