<script>
	import { getContext } from "svelte";

 const subscription = getContext('subscription')()
 //let {subscription} = $derived(subscriptionContext)
</script>
<h1>Page</h1>
<h2>Subscription Data at Page</h2>
{subscription.data}

<hr/>
<a href="/subscription/edit">Edit Route</a>