<script>
    import CourseGoal from './CourseGoal.svelte'

    let courseGoal = ""

    // $: shouldHightLight = courseGoal.includes("!")
</script>

<div class="main">
    <CourseGoal goal={courseGoal}/>
    <input type="text" placeholder="Input Course Goal" bind:value="{courseGoal}">
</div>

<style>
    .main{
        text-align: center;
    }

    .main p{
        margin-top: 12em;
        padding: 1em;
    }

    .main input{
        margin-top: 1em;
        padding: 1em;
    }
</style>