<script>
	import { getContext } from "svelte";

 const subscriptionContext = getContext('subscription')
 let {subscription} = $derived(subscriptionContext)
</script>
<h1>Page</h1>
<h2>Subscription Data at Page</h2>
{subscriptionContext.subscription.data}
{subscription.data}

<hr/>
<a href="/subscription/edit">Edit Route</a>