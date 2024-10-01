import { browser } from "$app/environment";
import Subscription from "$lib/subscription.svelte";


/** @type {import('./$types').PageLoad} */
export async function load({ cookies, data, params }) {
    console.log('layout loader universal ran')
    let subscription;
    if(browser && !subscription){
        subscription = new Subscription(data.initialData)

    }
    
    return {subscription}
    
}