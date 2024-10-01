<script>
	import Subscription from '$lib/subscription.svelte';
	import { setContext } from 'svelte';

let {data, children} = $props();

//setContext('subscription', {get subscription(){return subscription}})
setContext('subscription', ()=>data.subscription)

console.log('layout rerendered')
</script>

Subscription Data at layout: {data.subscription?.data}
{@render children()}
