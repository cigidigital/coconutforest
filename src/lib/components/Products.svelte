<script>
	import { onMount } from 'svelte';
	
	let visible = false;
	let selectedProduct = null;
	
	const products = [
		{
			name: 'Copra',
			image: '/images/copraa.png',
			largeImage: '/images/copra.jpg',
			description: 'High-quality dried coconut kernel used for oil extraction'
		},
		{
			name: 'Semi Husked Coconut',
			image: '/images/semihusked.png',
			largeImage: '/images/semihusked.jpg',
			description: 'Premium semi-processed coconut for various applications'
		},
		{
			name: 'Coconut Charcoal Briquettes',
			image: '/images/areng.png',
			largeImage: '/images/areng.jpg',
			description: 'Eco-friendly charcoal briquettes from coconut shells'
		},
		{
			name: 'Coconut Fiber',
			image: '/images/serabut2.png',
			largeImage: '/images/cocofiber.jpg',
			description: 'Natural coconut fiber for horticulture and industrial use'
		}
	];
	
	onMount(() => {
		const options = {
			threshold: 0.1,
			rootMargin: '0px'
		};
		
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					visible = true;
				}
			});
		}, options);
		
		const section = document.getElementById('products');
		if (section) {
			observer.observe(section);
		}
		
		return () => {
			if (section) {
				observer.unobserve(section);
			}
		};
	});
	
	function openModal(product) {
		selectedProduct = product;
	}
	
	function closeModal() {
		selectedProduct = null;
	}
</script>

<section id="products" class="products section">
	<div class="container">
		<div class="section-title">
			<h5>Our Product</h5>
			<h3>Our Best Product</h3>
		</div>
		
		<div class="products-grid" class:visible={visible}>
			{#each products as product, index}
				<div 
					class="product-card" 
					style="animation-delay: {index * 0.1}s" 
					on:click={() => openModal(product)}
					on:keydown={(e) => e.key === 'Enter' && openModal(product)}
					role="button" 
					tabindex="0"
				>
					<div class="product-image">
						<img src={product.image} alt={product.name} />
						<div class="image-overlay"></div>
						<div class="product-caption">
							<h4>{product.name}</h4>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

{#if selectedProduct}
	<div class="modal" on:click={closeModal} role="dialog" aria-modal="true">
		<div class="modal-content" on:click|stopPropagation role="document">
			<button class="modal-close" on:click={closeModal} aria-label="Close modal">×</button>
			<img src={selectedProduct.largeImage} alt={selectedProduct.name} />
			<div class="modal-info">
				<h3>{selectedProduct.name}</h3>
				<p>{selectedProduct.description}</p>
			</div>
		</div>
	</div>
{/if}

<style>
	.products {
		background: white;
	}
	
	.products-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 30px;
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s ease;
		max-width: 900px;
		margin: 0 auto;
	}
	
	.products-grid.visible {
		opacity: 1;
		transform: translateY(0);
	}
	
	.product-card {
		border-radius: 24px;
		overflow: hidden;
		cursor: pointer;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		opacity: 0;
		transform: translateY(30px);
		animation: fadeInUp 0.6s ease forwards;
		background: white;
	}
	
	.products-grid.visible .product-card {
		animation: fadeInUp 0.6s ease forwards;
	}
	
	.product-card:hover {
		transform: translateY(-12px) scale(1.02);
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
	}
	
	.product-image {
		position: relative;
		padding-top: 100%;
		overflow: hidden;
	}
	
	.product-image img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform var(--transition-slow);
	}
	
	.product-card:hover .product-image img {
		transform: scale(1.1);
	}
	
	.image-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, rgba(26, 95, 26, 0.95) 0%, rgba(46, 125, 50, 0.92) 100%);
		opacity: 0;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		z-index: 1;
	}
	
	.product-card:hover .image-overlay {
		opacity: 1;
	}
	
	.product-caption {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(0.9);
		text-align: center;
		z-index: 2;
		opacity: 0;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	}
	
	.product-card:hover .product-caption {
		opacity: 1;
		transform: translate(-50%, -50%) scale(1);
	}
	
	.product-caption h4 {
		color: #ffffff;
		font-size: 26px;
		font-weight: 700;
		text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5), 0 4px 12px rgba(0, 0, 0, 0.3);
		letter-spacing: 0.5px;
	}
	
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.9);
		z-index: 2000;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
		animation: fadeIn 0.3s ease;
	}
	
	.modal-content {
		position: relative;
		max-width: 900px;
		max-height: 90vh;
		background: white;
		border-radius: 20px;
		overflow: hidden;
		animation: scaleIn 0.3s ease;
	}
	
	.modal-content img {
		width: 100%;
		height: auto;
		display: block;
	}
	
	.modal-info {
		padding: 30px;
	}
	
	.modal-info h3 {
		font-size: 28px;
		color: var(--text-dark);
		margin-bottom: 15px;
	}
	
	.modal-info p {
		color: var(--text-medium);
		line-height: 1.8;
		font-size: 16px;
	}
	
	.modal-close {
		position: absolute;
		top: 20px;
		right: 20px;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: white;
		border: none;
		font-size: 30px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: var(--shadow-md);
		transition: all var(--transition-base);
		color: var(--text-dark);
		z-index: 10;
	}
	
	.modal-close:hover {
		background: var(--coconut-green);
		color: white;
		transform: rotate(90deg);
	}
	
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	
	@keyframes scaleIn {
		from {
			transform: scale(0.9);
			opacity: 0;
		}
		to {
			transform: scale(1);
			opacity: 1;
		}
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
		.products-grid {
			max-width: 600px;
		}
	}
	
	@media (max-width: 768px) {
		.products-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 20px;
		}
	}
	
	@media (max-width: 640px) {
		.products-grid {
			grid-template-columns: 1fr;
			max-width: 400px;
		}
		
		.product-card {
			max-width: 100%;
		}
	}
</style>
