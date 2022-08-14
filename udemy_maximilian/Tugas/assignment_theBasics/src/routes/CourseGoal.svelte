<script>
    export let goal

    $: doHightLight = goal.includes("!")
</script>

<h1 class:highlight={doHightLight}>{goal}</h1>

<style>
    .highlight{
        color: red;
    }
</style>