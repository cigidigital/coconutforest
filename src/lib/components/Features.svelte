<script>
	import { onMount } from 'svelte';
	
	let visible = false;
	
	const features = [
		{
			title: 'Integrity',
			description: 'Integrity which means a promise, therefore we are ready to provide the best quality products to customers, at affordable prices, so as to foster a great sense of trust in us.'
		},
		{
			title: 'Quality',
			description: 'Our company provides the highest quality products and is also supported by our entire professional team to create a high level of service and satisfied customers'
		},
		{
			title: 'Commitment',
			description: 'Our commitment is to continue to provide the best and quality services and products. We will continue to innovate and develop products as long as we can'
		},
		{
			title: 'Innovation',
			description: 'Innovation which means creation or development, in innovating we apply ease of transaction and strengthen competition, so as to generate customer satisfaction.'
		}
	];
	
	onMount(() => {
		const options = {
			threshold: 0.2,
			rootMargin: '0px'
		};
		
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					visible = true;
				}
			});
		}, options);
		
		const section = document.getElementById('features');
		if (section) {
			observer.observe(section);
		}
		
		return () => {
			if (section) {
				observer.unobserve(section);
			}
		};
	});
</script>

<section id="features" class="features section">
	<div class="features-pattern"></div>
	<div class="container">
		<div class="section-title">
			<h5>Our key features</h5>
			<h3>Our Features</h3>
		</div>
		
		<div class="features-grid" class:visible={visible}>
			{#each features as feature, index}
				<div class="feature-card" style="animation-delay: {index * 0.1}s">
					<div class="feature-icon">
						{#if index === 0}
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
							</svg>
						{:else if index === 1}
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
								<path d="M8 12L10 14L16 8"/>
							</svg>
						{:else if index === 2}
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
								<circle cx="9" cy="7" r="4"/>
								<path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
							</svg>
						{:else}
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<circle cx="12" cy="12" r="10"/>
								<path d="M12 6v6l4 2"/>
							</svg>
						{/if}
					</div>
					<h4>{feature.title}</h4>
					<p>{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.features {
		position: relative;
		background: linear-gradient(135deg, var(--coconut-beige) 0%, var(--coconut-cream) 100%);
		overflow: hidden;
	}
	
	.features-pattern {
		position: absolute;
		top: -100px;
		left: -100px;
		width: 400px;
		height: 400px;
		background-image: url('/images/pattern-inner.png');
		opacity: 0.1;
		pointer-events: none;
	}
	
	.features-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 40px;
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s ease;
	}
	
	.features-grid.visible {
		opacity: 1;
		transform: translateY(0);
	}
	
	.feature-card {
		background: white;
		padding: 45px 40px;
		border-radius: 24px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		text-align: center;
		opacity: 0;
		transform: translateY(30px);
		animation: fadeInUp 0.6s ease forwards;
		position: relative;
		overflow: hidden;
	}
	
	.feature-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: linear-gradient(90deg, var(--coconut-green-light), var(--coconut-green));
		transform: scaleX(0);
		transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		transform-origin: left;
	}
	
	.features-grid.visible .feature-card {
		animation: fadeInUp 0.6s ease forwards;
	}
	
	.feature-card:hover {
		transform: translateY(-12px);
		box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
	}
	
	.feature-card:hover::before {
		transform: scaleX(1);
	}
	
	.feature-icon {
		width: 80px;
		height: 80px;
		margin: 0 auto 25px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, var(--coconut-green-light), var(--coconut-green));
		border-radius: 20px;
		color: white;
		box-shadow: 0 8px 20px rgba(46, 125, 50, 0.25);
		transition: all var(--transition-base);
	}
	
	.feature-icon svg {
		width: 40px;
		height: 40px;
	}
	
	.feature-card:hover .feature-icon {
		transform: translateY(-5px) rotate(5deg);
		box-shadow: 0 12px 30px rgba(46, 125, 50, 0.35);
	}
	
	.feature-card h4 {
		font-family: 'Playfair Display', serif;
		font-size: 24px;
		color: var(--text-dark);
		margin-bottom: 15px;
	}
	
	.feature-card p {
		color: var(--text-medium);
		line-height: 1.8;
		font-size: 15px;
	}
	
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	@media (max-width: 968px) {
		.features-grid {
			grid-template-columns: 1fr;
			gap: 30px;
		}
		
		.feature-card {
			padding: 30px;
		}
	}
</style>
