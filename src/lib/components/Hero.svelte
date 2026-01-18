<script>
	import { onMount } from 'svelte';
	
	let loaded = false;
	let parallaxOffset = 0;
	
	onMount(() => {
		setTimeout(() => {
			loaded = true;
		}, 100);
		
		// Subtle parallax effect
		const handleScroll = () => {
			if (window.scrollY < window.innerHeight) {
				parallaxOffset = window.scrollY * 0.3;
			}
		};
		
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<section id="home" class="hero">
	<div class="hero-background">
		<div class="hero-image-wrapper" style="transform: translateY({parallaxOffset}px)">
			<img src="/images/bg-home3.jpg" alt="Coconut plantation" />
		</div>
		<div class="hero-overlay"></div>
		<div class="hero-decorative hero-leaf-1"></div>
		<div class="hero-decorative hero-leaf-2"></div>
	</div>
	
	<div class="container">
		<div class="hero-content" class:fade-in={loaded}>
			<div class="hero-badge">Supplying across the globe</div>
			<h1 class="hero-title">
				<span class="title-line">The Leading Supplier</span>
				<span class="title-line highlight">of Coconut Product</span>
			</h1>
			<p class="hero-description">
				Premium quality coconut products from tropical farms to your doorstep. 
				Trusted by businesses worldwide for exceptional quality and reliable service.
			</p>
			<div class="hero-buttons">
				<a href="#products" class="btn btn-primary">
					<span>Explore Products</span>
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M5 12h14M12 5l7 7-7 7" />
					</svg>
				</a>
				<a href="#contact" class="btn btn-outline">Get In Touch</a>
			</div>
		</div>
	</div>
	
	<div class="hero-scroll">
		<a href="#about" aria-label="Scroll to about section">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
			</svg>
		</a>
	</div>
</section>

<style>
	.hero {
		position: relative;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		padding-top: 80px;
	}
	
	.hero-background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 120%;
		z-index: -1;
	}
	
	.hero-image-wrapper {
		width: 100%;
		height: 100%;
		will-change: transform;
	}
	
	.hero-background img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: brightness(0.55) saturate(1.1);
		transform: scale(1.05);
	}
	
	.hero-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(135deg, rgba(26, 95, 26, 0.75) 0%, rgba(46, 125, 50, 0.55) 50%, rgba(26, 95, 26, 0.65) 100%);
	}
	
	.hero-decorative {
		position: absolute;
		opacity: 0.15;
		pointer-events: none;
		z-index: 1;
	}
	
	.hero-leaf-1 {
		top: 15%;
		right: 8%;
		width: 120px;
		height: 120px;
		background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
		border-radius: 60% 40% 50% 70%;
		animation: float 8s ease-in-out infinite;
	}
	
	.hero-leaf-2 {
		bottom: 25%;
		left: 5%;
		width: 80px;
		height: 80px;
		background: radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%);
		border-radius: 50% 60% 40% 70%;
		animation: float 10s ease-in-out infinite reverse;
	}
	
	.hero-content {
		text-align: center;
		color: white;
		max-width: 850px;
		margin: 0 auto;
		padding: 40px 20px;
		opacity: 0;
		transform: translateY(30px);
		transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
		position: relative;
		z-index: 2;
	}
	
	.hero-content.fade-in {
		opacity: 1;
		transform: translateY(0);
	}
	
	.hero-badge {
		display: inline-block;
		font-family: 'Poppins', sans-serif;
		font-size: 13px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 3px;
		padding: 10px 24px;
		margin-bottom: 30px;
		background: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(10px);
		border-radius: 50px;
		border: 1px solid rgba(255, 255, 255, 0.3);
		color: rgba(255, 255, 255, 0.95);
		animation: fadeInUp 0.8s ease 0.2s both;
	}
	
	.hero-title {
		font-size: clamp(2.8rem, 7vw, 5.5rem);
		font-weight: 800;
		margin-bottom: 30px;
		line-height: 1.15;
		text-shadow: 2px 4px 20px rgba(0, 0, 0, 0.4);
	}
	
	.title-line {
		display: block;
		animation: fadeInUp 0.8s ease 0.3s both;
	}
	
	.title-line.highlight {
		background: linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		animation: fadeInUp 0.8s ease 0.4s both;
	}
	
	.hero-description {
		font-size: clamp(1.05rem, 2.2vw, 1.3rem);
		margin-bottom: 50px;
		color: rgba(255, 255, 255, 0.92);
		max-width: 650px;
		margin-left: auto;
		margin-right: auto;
		line-height: 1.75;
		animation: fadeInUp 0.8s ease 0.5s both;
	}
	
	.hero-buttons {
		display: flex;
		gap: 20px;
		justify-content: center;
		flex-wrap: wrap;
		animation: fadeInUp 0.8s ease 0.6s both;
	}
	
	.hero-buttons .btn {
		margin: 0;
		display: inline-flex;
		align-items: center;
		gap: 10px;
		padding: 16px 36px;
	}
	
	.hero-buttons .btn-primary svg {
		transition: transform var(--transition-base);
	}
	
	.hero-buttons .btn-primary:hover svg {
		transform: translateX(4px);
	}
	
	.hero-scroll {
		position: absolute;
		bottom: 40px;
		left: 50%;
		transform: translateX(-50%);
		animation: bounce 2.5s infinite;
		z-index: 2;
	}
	
	.hero-scroll a {
		color: white;
		opacity: 0.85;
		transition: opacity var(--transition-base);
		display: block;
	}
	
	.hero-scroll a:hover {
		opacity: 1;
	}
	
	@keyframes float {
		0%, 100% {
			transform: translateY(0) rotate(0deg);
		}
		50% {
			transform: translateY(-20px) rotate(5deg);
		}
	}
	
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	@keyframes bounce {
		0%, 20%, 50%, 80%, 100% {
			transform: translateX(-50%) translateY(0);
		}
		40% {
			transform: translateX(-50%) translateY(-12px);
		}
		60% {
			transform: translateX(-50%) translateY(-6px);
		}
	}
	
	@media (max-width: 768px) {
		.hero {
			min-height: 90vh;
		}
		
		.hero-buttons {
			flex-direction: column;
			align-items: center;
		}
		
		.hero-buttons .btn {
			width: 100%;
			max-width: 300px;
		}
		
		.hero-leaf-1,
		.hero-leaf-2 {
			display: none;
		}
	}
</style>
