<script>
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Navigation />
<main>
	<slot />
</main>
<Footer />

<style>
	main {
		min-height: 100vh;
	}
</style>
