<script>
	import { onMount } from 'svelte';
	
	let visible = false;
	let currentSlide = 0;
	
	const team = [
		{
			name: 'Yulio',
			role: 'Founder',
			image: '/images/yulio.png',
			quote: "It doesn't matter how long I've achieved my success, as long as I never stop fighting."
		},
		{
			name: 'Rizki',
			role: 'CO Founder',
			image: '/images/rizki.png',
			quote: 'From the beginning to the finish line'
		},
		{
			name: 'Fani',
			role: 'Manager',
			image: '/images/fani.png',
			quote: "The earlier you start work, the earlier you will see results. The future belongs to those who prepare for today."
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
		
		const section = document.getElementById('team');
		if (section) {
			observer.observe(section);
		}
		
		// Auto-advance slides
		const interval = setInterval(() => {
			currentSlide = (currentSlide + 1) % team.length;
		}, 5000);
		
		return () => {
			clearInterval(interval);
			if (section) {
				observer.unobserve(section);
			}
		};
	});
	
	function goToSlide(index) {
		currentSlide = index;
	}
</script>

<section id="team" class="team section">
	<div class="container">
		<div class="team-content" class:visible={visible}>
			<div class="team-title">
				<div class="section-title" style="text-align: left; margin-bottom: 0;">
					<h5>Team</h5>
					<h3>Our Team</h3>
				</div>
			</div>
			
			<div class="team-slider">
				<div class="slider-wrapper" style="transform: translateX(-{currentSlide * 100}%)">
					{#each team as member}
						<div class="team-slide">
							<div class="team-member">
								<div class="member-image">
									<img src={member.image} alt={member.name} />
								</div>
								<div class="member-info">
									<h4>{member.name}</h4>
									<p class="member-role">{member.role}</p>
									<p class="member-quote">"{member.quote}"</p>
								</div>
							</div>
						</div>
					{/each}
				</div>
				
				<div class="slider-indicators">
					{#each team as _, index}
						<button
							class="indicator"
							class:active={currentSlide === index}
							on:click={() => goToSlide(index)}
							aria-label="Go to slide {index + 1}"
						></button>
					{/each}
				</div>
			</div>
		</div>
	</div>
	
	<div class="quote-icons">
		<img src="/images/quote-icon1.svg" alt="" class="quote-left" />
		<img src="/images/quote-icon2.svg" alt="" class="quote-right" />
	</div>
</section>

<style>
	.team {
		position: relative;
		background: linear-gradient(135deg, var(--coconut-cream) 0%, var(--coconut-beige) 100%);
		overflow: hidden;
	}
	
	.team-content {
		display: grid;
		grid-template-columns: 300px 1fr;
		gap: 60px;
		align-items: center;
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s ease;
	}
	
	.team-content.visible {
		opacity: 1;
		transform: translateY(0);
	}
	
	.team-slider {
		position: relative;
		overflow: hidden;
		border-radius: 20px;
		background: white;
		padding: 40px;
		box-shadow: var(--shadow-lg);
	}
	
	.slider-wrapper {
		display: flex;
		transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
	}
	
	.team-slide {
		min-width: 100%;
		padding: 20px;
	}
	
	.team-member {
		display: flex;
		align-items: center;
		gap: 40px;
	}
	
	.member-image {
		flex-shrink: 0;
		width: 200px;
		height: 200px;
		border-radius: 50%;
		overflow: hidden;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
		border: 6px solid var(--coconut-green-light);
		position: relative;
		transition: all var(--transition-base);
	}
	
	.member-image::before {
		content: '';
		position: absolute;
		inset: -8px;
		border-radius: 50%;
		border: 2px solid var(--coconut-green);
		opacity: 0;
		transition: opacity var(--transition-base);
		z-index: -1;
	}
	
	.team-slide:hover .member-image {
		transform: scale(1.05);
		border-color: var(--coconut-green);
		box-shadow: 0 15px 40px rgba(46, 125, 50, 0.3);
	}
	
	.team-slide:hover .member-image::before {
		opacity: 0.3;
	}
	
	.member-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform var(--transition-slow);
	}
	
	.team-slide:hover .member-image img {
		transform: scale(1.1);
	}
	
	.member-info h4 {
		font-family: 'Playfair Display', serif;
		font-size: 32px;
		color: var(--text-dark);
		margin-bottom: 5px;
	}
	
	.member-role {
		font-size: 16px;
		color: var(--coconut-green);
		font-weight: 600;
		margin-bottom: 20px;
		text-transform: uppercase;
		letter-spacing: 1px;
	}
	
	.member-quote {
		font-size: 18px;
		color: var(--text-medium);
		line-height: 1.8;
		font-style: italic;
		max-width: 500px;
	}
	
	.slider-indicators {
		display: flex;
		gap: 10px;
		justify-content: center;
		margin-top: 30px;
	}
	
	.indicator {
		width: 40px;
		height: 6px;
		border-radius: 6px;
		background: var(--coconut-sand);
		border: none;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		padding: 0;
		position: relative;
	}
	
	.indicator:hover {
		background: var(--coconut-green-light);
		transform: scaleY(1.3);
	}
	
	.indicator.active {
		background: linear-gradient(90deg, var(--coconut-green-light), var(--coconut-green));
		width: 50px;
		box-shadow: 0 2px 8px rgba(46, 125, 50, 0.3);
	}
	
	.quote-icons {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		pointer-events: none;
		z-index: 0;
	}
	
	.quote-left {
		position: absolute;
		top: 50px;
		left: 50px;
		width: 100px;
		opacity: 0.2;
	}
	
	.quote-right {
		position: absolute;
		bottom: 50px;
		right: 50px;
		width: 100px;
		opacity: 0.2;
	}
	
	@media (max-width: 968px) {
		.team-content {
			grid-template-columns: 1fr;
			gap: 40px;
		}
		
		.team-title {
			text-align: center;
		}
		
		.section-title {
			text-align: center !important;
		}
		
		.team-member {
			flex-direction: column;
			text-align: center;
		}
		
		.member-info {
			text-align: center;
		}
	}
	
	@media (max-width: 640px) {
		.team-slider {
			padding: 30px 20px;
		}
		
		.member-image {
			width: 150px;
			height: 150px;
		}
		
		.member-info h4 {
			font-size: 24px;
		}
		
		.member-quote {
			font-size: 16px;
		}
	}
</style>
