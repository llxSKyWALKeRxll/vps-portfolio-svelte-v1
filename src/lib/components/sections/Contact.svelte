<!-- src/lib/components/sections/Contact.svelte -->
<script>
    let name = '';
    let email = '';
    let subject = '';
    let message = '';
    let submitted = false;
    let loading = false;
    let error = null;
    
    // Function to generate mailto link with form data
    function generateMailtoLink() {
      const emailAddress = 'vanshispratap@gmail.com'; 
      const emailSubject = encodeURIComponent(subject || 'Inquiry from Portfolio');
      const emailBody = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );
      
      return `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;
    }
  </script>
  
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="section-header appear">
        <h2>Get In Touch</h2>
        <div class="section-line"></div>
      </div>
      
      <div class="contact-content">
        <div class="contact-info appear">
          <div class="info-item">
            <h3>Email</h3>
            <p><a href="mailto:vanshispratap@gmail.com">vanshispratap@gmail.com</a></p>
          </div>
          
          <div class="info-item">
            <h3>Location</h3>
            <p>Lucknow, India</p>
          </div>
          
          <div class="info-item">
            <h3>Social</h3>
            <div class="social-links">
              <a href="https://github.com/llxSKyWALKeRxll" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/vanshpratapsingh/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                LinkedIn
              </a>
              <!-- <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                Twitter
              </a> -->
            </div>
          </div>
        </div>
        
        <div class="contact-form-container appear">
          {#if submitted}
            <div class="success-message">
              <h3>Thank you for your message!</h3>
              <p>I'll get back to you as soon as possible.</p>
              <button 
                class="reset-button"
                on:click={() => {
                  submitted = false;
                  name = '';
                  email = '';
                  subject = '';
                  message = '';
                }}
              >
                Send Another Message
              </button>
            </div>
          {:else}
            <div class="contact-form">
              <div class="form-group">
                <label for="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  bind:value={name} 
                  required 
                  placeholder="Your name"
                />
              </div>
              
              <div class="form-group">
                <label for="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  bind:value={email} 
                  required 
                  placeholder="Your email address"
                />
              </div>
              
              <div class="form-group">
                <label for="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  bind:value={subject} 
                  required 
                  placeholder="Subject of your message"
                />
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message" 
                  bind:value={message} 
                  rows="5" 
                  required 
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <a 
                href={generateMailtoLink()} 
                class="submit-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </a>
              
              <p class="mailto-note">
                <small>This will open your default email client with the information you've entered.</small>
              </p>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </section>
  
  <style>
    .contact-section {
      padding: 6rem 0;
    }
    
    .contact-content {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 3rem;
      margin-top: 3rem;
    }
    
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    
    .info-item h3 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      position: relative;
      display: inline-block;
    }
    
    .info-item h3::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 30px;
      height: 2px;
      background: var(--foreground);
    }
    
    .info-item p {
      color: var(--muted);
    }
    
    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 0.5rem;
    }
    
    .social-links a {
      padding: 0.5rem 1rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      font-size: 0.9rem;
      transition: all 0.3s ease;
    }
    
    .social-links a:hover {
      background: var(--foreground);
      color: var(--background);
    }
    
    .contact-form-container {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 2rem;
    }
    
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    
    label {
      font-size: 0.9rem;
      font-weight: 500;
    }
    
    input, textarea {
      padding: 0.8rem;
      background: rgba(0, 0, 0, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      color: var(--foreground);
      font-family: var(--font-sans);
      transition: all 0.3s ease;
    }
    
    input:focus, textarea:focus {
      outline: none;
      border-color: rgba(255, 255, 255, 0.5);
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
    }
    
    input::placeholder, textarea::placeholder {
      color: rgba(255, 255, 255, 0.3);
    }
    
    .submit-button {
      padding: 0.8rem 1.5rem;
      background: var(--foreground);
      color: var(--background);
      border: none;
      border-radius: 4px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      align-self: flex-start;
      border: 2px solid var(--foreground);
      display: inline-block;
      text-align: center;
    }
    
    .submit-button:hover {
      background: transparent;
      color: var(--foreground);
    }
    
    .mailto-note {
      color: var(--muted);
      font-size: 0.9rem;
      margin-top: 0.5rem;
    }
    
    .error-message {
      color: #ff6b6b;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
    
    .success-message {
      text-align: center;
      padding: 2rem;
    }
    
    .success-message h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    
    .success-message p {
      color: var(--muted);
      margin-bottom: 2rem;
    }
    
    .reset-button {
      padding: 0.8rem 1.5rem;
      background: transparent;
      color: var(--foreground);
      border: 2px solid var(--foreground);
      border-radius: 4px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .reset-button:hover {
      background: var(--foreground);
      color: var(--background);
    }
    
    @media (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr;
      }
    }
  </style>