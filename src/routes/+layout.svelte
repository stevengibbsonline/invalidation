<script>
    let {children, data} = $props();
</script>

{#key data.pathname}
{@render children()}
{/key}