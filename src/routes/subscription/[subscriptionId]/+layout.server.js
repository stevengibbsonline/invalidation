/** @type {import('./$types').PageLoad} */
export async function load({ cookies }) {
    console.log('await timeout')
    await new Promise(resolve => setTimeout(resolve, 3000))
    console.log('resolved timeout')

    const initialData = 'Initial Data';
	return {initialData};
}