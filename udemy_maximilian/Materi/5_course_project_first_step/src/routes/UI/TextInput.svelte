<script>
    export let controlType
    export let id
    export let label
    export let rows
    export let value
    export let type
</script>

<div class="form-control">
    <label for="{id}">{label}</label>
    {#if controlType === "textarea"}
    <textarea rows="{rows}" id="{id}}" value={value} on:input/>
    {:else}
    <input type="{type}" id="{id}" value={value} on:input>
{/if}
</div>

<style>
    input, textarea{
        display: block;
        widows: 100%;
        font: inherit;
        border: none;
        border-bottom: 2px solid #ccc;
        border-radius: 3px 3px 0 0;
        background: white;
        padding: 0.15rem 0.25rem;
        transition: border-color 0.1s ease-out;
    }

    label{
        display: block;
        margin-bottom: 0.5rem;
        widows: 100%;
    }

    .form-control{
        padding: 0.5rem 0;
        widows: 100%;
        margin: 0.25rem 0;
    }
</style>