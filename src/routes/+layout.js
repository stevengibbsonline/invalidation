/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
	return {pathname: url.pathname};
}