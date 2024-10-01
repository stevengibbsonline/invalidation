<script>
	import Subscription from '$lib/subscription.svelte';
	import { setContext } from 'svelte';

let {data, children} = $props();

let subscription = $state();
//setContext('subscription', {get subscription(){return subscription}})
setContext('subscription', ()=>subscription)

if(!subscription){
    subscription = new Subscription(data.initialData)
}


</script>

Subscription Data at layout:
{subscription.data}
{@render children()}
