<footer class="footer">
	<div class="container">
		<div class="footer-content">
			<div class="footer-brand">
				<img src="/images/cofo.png" alt="Coconut Forest" />
				<p>The Leading Supplier of Coconut Products</p>
			</div>
			
			<div class="footer-links">
				<h4>Quick Links</h4>
				<ul>
					<li><a href="#home">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#features">Features</a></li>
					<li><a href="#products">Products</a></li>
					<li><a href="#team">Team</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</div>
			
			<div class="footer-contact">
				<h4>Contact</h4>
				<p>Email: info@coconutforest.com</p>
				<p>Phone: +62 878 0891 8048</p>
			</div>
		</div>
		
		<div class="footer-bottom">
			<p>&copy; 2024 Coconut Forest. All Rights Reserved.</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: linear-gradient(135deg, var(--coconut-brown) 0%, var(--coconut-green-dark) 100%);
		color: white;
		padding: 60px 0 20px;
	}
	
	.footer-content {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr;
		gap: 40px;
		margin-bottom: 40px;
	}
	
	.footer-brand img {
		height: 50px;
		width: auto;
		margin-bottom: 20px;
		filter: brightness(0) invert(1);
	}
	
	.footer-brand p {
		color: rgba(255, 255, 255, 0.8);
		font-size: 14px;
		max-width: 300px;
	}
	
	.footer-links h4,
	.footer-contact h4 {
		font-family: 'Playfair Display', serif;
		font-size: 20px;
		margin-bottom: 20px;
		color: white;
	}
	
	.footer-links ul {
		list-style: none;
	}
	
	.footer-links li {
		margin-bottom: 10px;
	}
	
	.footer-links a {
		color: rgba(255, 255, 255, 0.8);
		transition: color var(--transition-base);
		font-size: 14px;
	}
	
	.footer-links a:hover {
		color: white;
	}
	
	.footer-contact p {
		color: rgba(255, 255, 255, 0.8);
		font-size: 14px;
		margin-bottom: 10px;
	}
	
	.footer-bottom {
		text-align: center;
		padding-top: 30px;
		border-top: 1px solid rgba(255, 255, 255, 0.2);
	}
	
	.footer-bottom p {
		color: rgba(255, 255, 255, 0.7);
		font-size: 14px;
		margin: 0;
	}
	
	@media (max-width: 968px) {
		.footer-content {
			grid-template-columns: 1fr;
			gap: 30px;
		}
		
		.footer-brand {
			text-align: center;
		}
		
		.footer-brand p {
			margin: 0 auto;
		}
		
		.footer-links,
		.footer-contact {
			text-align: center;
		}
	}
</style>
