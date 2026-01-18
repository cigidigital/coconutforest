<script>
	import { onMount } from 'svelte';
	
	let visible = false;
	let formData = {
		name: '',
		email: '',
		subject: '',
		message: ''
	};
	
	let submitting = false;
	let submitMessage = '';
	
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
		
		const section = document.getElementById('contact');
		if (section) {
			observer.observe(section);
		}
		
		return () => {
			if (section) {
				observer.unobserve(section);
			}
		};
	});
	
	async function handleSubmit(e) {
		e.preventDefault();
		submitting = true;
		submitMessage = '';
		
		// Simulate form submission (replace with actual API call)
		await new Promise(resolve => setTimeout(resolve, 1000));
		
		submitMessage = 'Thank you for your message! We will get back to you soon.';
		submitting = false;
		
		// Reset form
		formData = {
			name: '',
			email: '',
			subject: '',
			message: ''
		};
		
		setTimeout(() => {
			submitMessage = '';
		}, 5000);
	}
</script>

<section id="contact" class="contact section">
	<div class="container">
		<div class="contact-content" class:visible={visible}>
			<div class="contact-info">
				<div class="section-title" style="text-align: left; margin-bottom: 30px;">
					<h5>Contact Us</h5>
					<h3>Get in Touch</h3>
				</div>
				
				<p style="margin-bottom: 30px; max-width: 400px;">
					Have questions about our products? Want to place an order? 
					We're here to help! Reach out to us and we'll respond as soon as possible.
				</p>
				
				<div class="contact-methods">
					<a href="https://api.whatsapp.com/send/?phone=6287808918048&text&app_absent=0" 
					   target="_blank" 
					   rel="noopener noreferrer"
					   class="contact-method whatsapp">
						<span class="method-icon">💬</span>
						<span class="method-text">WhatsApp Us</span>
					</a>
				</div>
			</div>
			
			<div class="contact-form-wrapper">
				<form on:submit={handleSubmit} class="contact-form">
					<div class="form-row">
						<div class="form-group">
							<label for="name">Name</label>
							<input
								type="text"
								id="name"
								bind:value={formData.name}
								placeholder="Full name"
								required
							/>
						</div>
						
						<div class="form-group">
							<label for="email">Email</label>
							<input
								type="email"
								id="email"
								bind:value={formData.email}
								placeholder="Email address"
								required
							/>
						</div>
					</div>
					
					<div class="form-group">
						<label for="subject">Subject</label>
						<input
							type="text"
							id="subject"
							bind:value={formData.subject}
							placeholder="Enter subject"
							required
						/>
					</div>
					
					<div class="form-group">
						<label for="message">Message</label>
						<textarea
							id="message"
							bind:value={formData.message}
							placeholder="Your message"
							rows="5"
							required
						></textarea>
					</div>
					
					{#if submitMessage}
						<div class="submit-message success">
							{submitMessage}
						</div>
					{/if}
					
					<button type="submit" class="btn btn-primary" disabled={submitting}>
						{submitting ? 'Sending...' : 'Send Message'}
					</button>
				</form>
			</div>
		</div>
	</div>
</section>

<style>
	.contact {
		background: white;
	}
	
	.contact-content {
		display: grid;
		grid-template-columns: 400px 1fr;
		gap: 60px;
		align-items: start;
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s ease;
	}
	
	.contact-content.visible {
		opacity: 1;
		transform: translateY(0);
	}
	
	.contact-info p {
		font-size: 16px;
		color: var(--text-medium);
		line-height: 1.8;
	}
	
	.contact-methods {
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin-top: 30px;
	}
	
	.contact-method {
		display: flex;
		align-items: center;
		gap: 15px;
		padding: 16px 24px;
		background: var(--coconut-beige);
		border-radius: 12px;
		transition: all var(--transition-base);
		text-decoration: none;
		color: var(--text-dark);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
	}
	
	.contact-method:hover {
		background: linear-gradient(135deg, var(--coconut-green-dark), var(--coconut-green));
		color: white;
		transform: translateX(8px);
		box-shadow: 0 6px 20px rgba(26, 95, 26, 0.35);
	}
	
	.method-icon {
		font-size: 24px;
		transition: transform var(--transition-base);
	}
	
	.contact-method:hover .method-icon {
		transform: scale(1.1);
	}
	
	.method-text {
		font-weight: 600;
		font-size: 16px;
	}
	
	.contact-form-wrapper {
		background: var(--coconut-cream);
		padding: 40px;
		border-radius: 20px;
		box-shadow: var(--shadow-md);
	}
	
	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 25px;
	}
	
	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
	}
	
	.form-group {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	
	.form-group label {
		font-weight: 600;
		color: var(--text-dark);
		font-size: 14px;
	}
	
	.form-group input,
	.form-group textarea {
		padding: 14px 18px;
		border: 2px solid var(--coconut-beige);
		border-radius: 10px;
		font-family: 'Poppins', sans-serif;
		font-size: 15px;
		color: var(--text-dark);
		background: white;
		transition: all var(--transition-base);
	}
	
	.form-group input:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: var(--coconut-green);
		box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.1);
	}
	
	.form-group textarea {
		resize: vertical;
		min-height: 120px;
	}
	
	.submit-message {
		padding: 15px 20px;
		border-radius: 10px;
		font-size: 14px;
		font-weight: 500;
	}
	
	.submit-message.success {
		background: #d1e7dd;
		color: #0f5132;
		border: 1px solid #badbcc;
	}
	
	.contact-form .btn {
		align-self: flex-start;
		margin-top: 10px;
	}
	
	.contact-form .btn:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
	
	@media (max-width: 968px) {
		.contact-content {
			grid-template-columns: 1fr;
			gap: 40px;
		}
		
		.contact-info {
			text-align: center;
		}
		
		.section-title {
			text-align: center !important;
		}
		
		.contact-info p {
			margin: 0 auto 30px;
		}
		
		.contact-methods {
			max-width: 300px;
			margin: 0 auto;
		}
		
		.contact-form-wrapper {
			padding: 35px 30px;
		}
	}
	
	@media (max-width: 640px) {
		.form-row {
			grid-template-columns: 1fr;
		}
		
		.contact-form-wrapper {
			padding: 30px 20px;
		}
		
		.contact-methods {
			max-width: 100%;
		}
	}
	
	@media (max-width: 480px) {
		.contact-form-wrapper {
			padding: 25px 18px;
		}
	}
</style>
