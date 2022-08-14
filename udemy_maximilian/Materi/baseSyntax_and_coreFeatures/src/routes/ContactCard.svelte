<script>
    export let userName
    export let userJobTitle
    export let userLinkImage
    export let userDescription
</script>

<div class="main">
    <header>
        <div class="biodata">
            <h1>{userName}</h1>
            <h2>{userJobTitle}</h2>
        </div>
        <div class="{userLinkImage ? "image" : "image-placeholder"}">
            <img src="{userLinkImage}" alt="">
        </div>
    </header>
    <div class="description">
        <p>{userDescription}</p>
    </div>
</div>

<style>
    .main{
        max-width: 50%;
        margin: 2em auto;
        border-style: solid;
        border-width: 2px;
        border-color: gray;
        border-radius: 16px;
    }
    .main header{
        display: flex;
        padding: 0.3em 1.5em;
        align-items: center;
    }
    .main header .image{
        max-width: 70%;
        margin: auto;
    }
    .main header .image-placeholder{
        max-width: 70%;
        margin: auto;
        background-color: gray;
    }
    .main header .image img{
        max-width: 70%;
        max-height: 30vh;
    }
    .main header .biodata{
        max-width: 30%;
        text-align: left;
    }
    .main header .biodata h2{
        color: rgb(68, 68, 68);
    }
    .description{
        border-style: solid;
        border-bottom: 2px;
        border-left: 0px;
        border-right: 0px;
        border-color: gray;
    }
</style>