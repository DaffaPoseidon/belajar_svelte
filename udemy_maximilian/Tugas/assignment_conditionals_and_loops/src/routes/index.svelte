<script>
    let name = "NieR"
    let count = 0
    let password = ""
    let passwordValidation = ""
    let passwords = []

    $:  reactiveName = name.toUpperCase()
    $:  reactivePassword = password

    $:  if(password.trim().length < 5){
            passwordValidation = "short"
        }

        else if(password.trim().length > 10){
            passwordValidation = "long"
        }

        else{
            passwordValidation = "ok"
        }

    const IncraseCount = () => {
        count += 1
    }

    const confirmPassword = () => {
        if(passwordValidation === "ok"){
            passwords = [...passwords, password]
        }
    }

    const removePassword = (index) => {
        password = passwords.filter((pw, idx) => {
            return idx !== index
        })
    }
</script>

<div class="main">
    <p>Namaku adalah {reactiveName}</p>
    <button on:click={IncraseCount}>Klik aku untuk menambahkan {count}</button>
    <input type="password" placeholder="Input the password" bind:value="{password}">
    <button on:click="{confirmPassword}">Input password</button>

    <ul>
        {#each passwords as pass, i}
            <li on:click="{removePassword.bind(this, i)}">{pass}</li>
        {/each}
    </ul>

    {#if passwordValidation === "short"}
	    <p>Too short</p>
    {:else if passwordValidation === "long"}
        <p>Too long</p>
    {:else if passwordValidation === "ok"}
        <p>Password: {password}</p>
    {/if}
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
</style>