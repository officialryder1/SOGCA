<script>
	import '../app.css';
	import Nav from '$lib/components/nav/navbar.svelte';
	import Footer from '$lib/components/footer/footer.svelte';
	let { children } = $props();

</script>

<svelte:head>
	<title>Welcome to SOGCA</title>
	<meta name="description" content="SOGCA is a community of believers in Christ Jesus" />
	<link rel="icon" href="/favicon.png" />
	<link rel="apple-touch-icon" href="/favicon.png" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="theme-color" content="#ffffff" />
	<meta name="apple-mobile-web-app-status-bar-style" content="default" /><link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
</svelte:head>
<Nav/>
<div>
	{@render children()}
</div>

<Footer/>
<style>
	:global(body){
	font-family: "Montserrat", sans-serif;
	font-optical-sizing: auto;
	font-weight: 400;
	font-style: normal;
	}
</style>
