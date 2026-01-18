<script>
	import { page } from '$app/stores';
	
	$: status = $page.status;
	$: message = $page.error?.message || 'An error occurred';
</script>

<div style="padding: 2rem; text-align: center;">
	<h1>{status || 500}</h1>
	<p>{message}</p>
	<a href="/">Go home</a>
</div>
