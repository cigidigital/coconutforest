<script>
	import { onMount } from 'svelte';
	
	let visible = false;
	let observer;
	
	onMount(() => {
		const options = {
			threshold: 0.2,
			rootMargin: '0px'
		};
		
		observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					visible = true;
				}
			});
		}, options);
		
		const section = document.getElementById('about');
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

<section id="about" class="about section">
	<div class="container">
		<div class="about-content" class:visible={visible}>
			<div class="about-image">
				<img src="/images/about.jpg" alt="About Coconut Forest" />
				<div class="image-decoration"></div>
			</div>
			
			<div class="about-text">
				<div class="section-title" style="text-align: left; margin-bottom: 30px;">
					<h5>About Us</h5>
					<h3>Know More About Us</h3>
				</div>
				
				<p>
					Seeing the huge potential of natural resources in our region, one of them is coconut, 
					therefore we choose coconut and all its derivatives, because we see coconut is a commodity 
					whose demand is very much, in addition we also support the welfare of local farmers to build 
					the economy, with high quality products and relatively cheap prices.
				</p>
				
				<p style="margin-top: 20px;">
					We are deeply committed to coconut and all its derivatives, to take this commodity to 
					the next level. Our mission is to bring premium quality coconut products from tropical 
					farms to markets worldwide while supporting sustainable agriculture and local communities.
				</p>
				
				<div class="about-stats">
					<div class="stat-item">
						<h4>100+</h4>
						<p>Happy Clients</p>
					</div>
					<div class="stat-item">
						<h4>50+</h4>
						<p>Countries</p>
					</div>
					<div class="stat-item">
						<h4>1000+</h4>
						<p>Products Exported</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.about {
		background: white;
	}
	
	.about-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 60px;
		align-items: center;
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s ease;
	}
	
	.about-content.visible {
		opacity: 1;
		transform: translateY(0);
	}
	
	.about-image {
		position: relative;
		border-radius: 24px;
		overflow: visible;
	}
	
	.about-image::before {
		content: '';
		position: absolute;
		top: -20px;
		left: -20px;
		width: 100%;
		height: 100%;
		background: linear-gradient(135deg, var(--coconut-green-light), var(--coconut-green));
		border-radius: 24px;
		opacity: 0.2;
		z-index: -1;
		transition: all var(--transition-slow);
	}
	
	.about-content.visible .about-image::before {
		transform: rotate(-2deg);
	}
	
	.about-image img {
		width: 100%;
		height: auto;
		display: block;
		border-radius: 24px;
		transition: transform var(--transition-slow);
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
		position: relative;
	}
	
	.about-content.visible .about-image img {
		transform: scale(1);
	}
	
	.about-image:hover img {
		transform: scale(1.02);
	}
	
	.image-decoration {
		position: absolute;
		bottom: -40px;
		right: -40px;
		width: 180px;
		height: 180px;
		background: radial-gradient(circle, var(--coconut-tan) 0%, transparent 70%);
		border-radius: 50%;
		opacity: 0.4;
		z-index: -1;
		animation: pulse 4s ease-in-out infinite;
	}
	
	@keyframes pulse {
		0%, 100% {
			transform: scale(1);
			opacity: 0.4;
		}
		50% {
			transform: scale(1.1);
			opacity: 0.3;
		}
	}
	
	.about-text {
		padding: 20px 0;
	}
	
	.about-text p {
		font-size: 16px;
		line-height: 1.8;
		color: var(--text-medium);
		margin-bottom: 20px;
	}
	
	.about-stats {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 30px;
		margin-top: 50px;
		padding-top: 40px;
		border-top: 2px solid var(--coconut-beige);
	}
	
	.stat-item {
		text-align: center;
		padding: 20px;
		border-radius: 16px;
		transition: all var(--transition-base);
		position: relative;
	}
	
	.stat-item::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: linear-gradient(90deg, var(--coconut-green-light), var(--coconut-green));
		border-radius: 16px 16px 0 0;
		opacity: 0;
		transition: opacity var(--transition-base);
	}
	
	.stat-item:hover {
		background: var(--coconut-cream);
		transform: translateY(-5px);
	}
	
	.stat-item:hover::before {
		opacity: 1;
	}
	
	.stat-item h4 {
		font-family: 'Playfair Display', serif;
		font-size: 42px;
		color: var(--coconut-green);
		margin-bottom: 8px;
		font-weight: 800;
		line-height: 1;
	}
	
	.stat-item p {
		font-size: 13px;
		color: var(--text-medium);
		margin: 0;
		text-transform: uppercase;
		letter-spacing: 1.5px;
		font-weight: 600;
	}
	
	@media (max-width: 968px) {
		.about-content {
			grid-template-columns: 1fr;
			gap: 40px;
		}
		
		.about-image {
			max-width: 500px;
			margin: 0 auto;
		}
		
		.about-text {
			text-align: center;
		}
		
		.section-title {
			text-align: center !important;
		}
		
		.about-stats {
			grid-template-columns: repeat(3, 1fr);
			gap: 20px;
		}
	}
	
	@media (max-width: 640px) {
		.about-stats {
			grid-template-columns: 1fr;
			gap: 30px;
		}
	}
</style>
