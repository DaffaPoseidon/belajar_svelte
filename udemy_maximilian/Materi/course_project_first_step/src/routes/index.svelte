<script>
    import Header from './UI/Header.svelte'
    import MeetupGrid from './Meetups/MeetupGrid.svelte'

    const meetups = [ 
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
</script>

<div class="main">
    <Header/>
    <MeetupGrid meetups={meetups}/>
</div>

<style>
    main{
        margin-top: 5rem;
    }
</style>
