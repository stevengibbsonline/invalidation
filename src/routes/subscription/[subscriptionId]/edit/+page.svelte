<script>
	import { goto } from '$app/navigation';
	import { getContext } from 'svelte';

    const subscription = getContext('subscription')()
    //let {subscription} = $derived(subscriptionContext)

    async function mutateDataAndInvalidateLoader(e){
        await subscription.mutateData(Math.floor(Math.random() * 10))
        goto('/subscription/1')
    }

</script>

<h1>Edit Route</h1>
<button onclick={mutateDataAndInvalidateLoader}>Mutate class and go back</button>
{subscription?.data}