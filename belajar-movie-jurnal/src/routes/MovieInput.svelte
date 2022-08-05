<script>
    import { createEventDispatcher } from "svelte"

    const dispatch = createEventDispatcher()

    let androidName = ''
    let skill = 1

    const InputAndroidName = (e) => {
        androidName = e.target.value
    }

    const InputSkill = (e) => {
         // console.log(e.target.value, "Ini target value", typeof(e.target.value))
        // console.log(score, "Ini score sebelum di-assign", typeof(score))
        skill = +e.target.value
        // console.log(score, "Ini score setelah di-assign", typeof(score))
    }

    const SubmitAndroid = (e) => {
        dispatch('submitAndroid', {
            android: {
                androidName,
                skill
            },
            androidName: '',
            skill: 1
        })
    }
</script>

<div class="main">
    <input 
        type="text"
        placeholder="Input the Android"
        value={androidName}
        on:keyup={InputAndroidName}
    />

    <select on:change={InputSkill} value={skill}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
    </select>

    <button on:click={SubmitAndroid} disabled={!androidName}>Submit</button>
</div>

<style>
    .main input{
        padding: 1em;
    }

    .main select{
        padding: 1em;
    }

    .main button{
        padding: 1em;
    }
</style>