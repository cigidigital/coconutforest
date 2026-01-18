<script>
	import { onMount } from 'svelte';
	
	let scrolled = false;
	let mobileMenuOpen = false;
	
	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};
		
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
	
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
	
	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<nav class="navbar" class:scrolled={scrolled}>
	<div class="container">
		<div class="nav-wrapper">
			<a href="/" class="logo">
				<img src="/images/cofo.png" alt="Coconut Forest" />
			</a>
			
			<button class="mobile-toggle" on:click={toggleMobileMenu} aria-label="Toggle menu">
				<span class={mobileMenuOpen ? 'open' : ''}></span>
				<span class={mobileMenuOpen ? 'open' : ''}></span>
				<span class={mobileMenuOpen ? 'open' : ''}></span>
			</button>
			
			<ul class="nav-menu" class:open={mobileMenuOpen}>
				<li><a href="#home" on:click={closeMobileMenu}>Home</a></li>
				<li><a href="#about" on:click={closeMobileMenu}>About</a></li>
				<li><a href="#features" on:click={closeMobileMenu}>Features</a></li>
				<li><a href="#products" on:click={closeMobileMenu}>Products</a></li>
				<li><a href="#team" on:click={closeMobileMenu}>Team</a></li>
				<li><a href="#contact" on:click={closeMobileMenu}>Contact</a></li>
			</ul>
		</div>
	</div>
</nav>

<style>
	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		padding: 20px 0;
		transition: all var(--transition-base);
		background: transparent;
	}
	
	.navbar.scrolled {
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(10px);
		box-shadow: var(--shadow-md);
		padding: 15px 0;
	}
	
	.nav-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.logo img {
		height: 50px;
		width: auto;
		transition: transform var(--transition-base);
	}
	
	.logo:hover img {
		transform: scale(1.05);
	}
	
	.nav-menu {
		display: flex;
		list-style: none;
		gap: 30px;
		align-items: center;
	}
	
	.nav-menu a {
		font-weight: 500;
		font-size: 15px;
		color: var(--text-dark);
		position: relative;
		transition: color var(--transition-base);
	}
	
	.nav-menu a::after {
		content: '';
		position: absolute;
		bottom: -5px;
		left: 0;
		width: 0;
		height: 2px;
		background: var(--coconut-green);
		transition: width var(--transition-base);
	}
	
	.nav-menu a:hover {
		color: var(--coconut-green);
	}
	
	.nav-menu a:hover::after {
		width: 100%;
	}
	
	.mobile-toggle {
		display: none;
		flex-direction: column;
		background: none;
		border: none;
		cursor: pointer;
		padding: 5px;
		gap: 5px;
	}
	
	.mobile-toggle span {
		width: 25px;
		height: 3px;
		background: var(--text-dark);
		transition: all var(--transition-base);
		border-radius: 3px;
	}
	
	.mobile-toggle span.open:nth-child(1) {
		transform: rotate(45deg) translate(8px, 8px);
	}
	
	.mobile-toggle span.open:nth-child(2) {
		opacity: 0;
	}
	
	.mobile-toggle span.open:nth-child(3) {
		transform: rotate(-45deg) translate(8px, -8px);
	}
	
	@media (max-width: 768px) {
		.mobile-toggle {
			display: flex;
		}
		
		.nav-menu {
			position: fixed;
			top: 70px;
			left: 0;
			right: 0;
			background: white;
			flex-direction: column;
			padding: 30px 20px;
			box-shadow: var(--shadow-lg);
			transform: translateY(-100%);
			opacity: 0;
			pointer-events: none;
			transition: all var(--transition-base);
			gap: 20px;
		}
		
		.nav-menu.open {
			transform: translateY(0);
			opacity: 1;
			pointer-events: all;
		}
		
		.navbar.scrolled .nav-menu {
			top: 60px;
		}
	}
</style>
