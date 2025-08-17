<!-- src/routes/contact/+page.svelte -->
<script>
    import { onMount } from 'svelte';
    
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
      const emailSubject = encodeURIComponent(subject || 'Contact Form Inquiry');
      const emailBody = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );
      
      return `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;
    }
    
    const contactInfo = [
      {
        title: 'Email',
        value: 'vanshispratap@gmail.com',
        link: 'mailto:vanshispratap@gmail.com',
        icon: '✉️'
      },
      {
        title: 'Location',
        value: 'Lucknow, India',
        link: null,
        icon: '📍'
      },
      {
        title: 'Social Media',
        value: 'Connect with me',
        link: null,
        icon: '🌐'
      }
    ];
    
    const socialLinks = [
      { name: 'GitHub', url: 'https://github.com/llxSKyWALKeRxll', icon: 'GitHub' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vanshpratapsingh/', icon: 'LinkedIn' },
      // { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'Twitter' }
    ];
  </script>
  
  <svelte:head>
    <title>Contact | Vansh Pratap Singh</title>
    <meta name="description" content="Get in touch with Vansh Pratap Singh for collaborations, project inquiries, freelancing, questions, or just for fun." />
  </svelte:head>
  
  <section class="contact-page">
    <div class="container">
      <div class="page-header appear">
        <h1>Get In Touch</h1>
        <p>Have a project in mind or just want to say hello? I'd love to hear from you.</p>
      </div>
      
      <div class="contact-content">
        <div class="contact-info-container appear">
          <div class="info-cards">
            {#each contactInfo as info}
              <div class="info-card">
                <div class="info-icon">{info.icon}</div>
                <div class="info-text">
                  <h3>{info.title}</h3>
                  {#if info.link}
                    <a href={info.link}>{info.value}</a>
                  {:else}
                    <p>{info.value}</p>
                  {/if}
                </div>
              </div>
            {/each}
          </div>
          
          <div class="social-links">
            {#each socialLinks as link}
              <a href={link.url} target="_blank" rel="noopener noreferrer" class="social-link">
                <span>{link.icon}</span>
              </a>
            {/each}
          </div>
          
          <!-- <div class="contact-image">
            <div class="geometric-pattern"></div>
          </div> -->
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
            <h2>Send Me a Message</h2>
            <div class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    bind:value={name} 
                    required 
                    placeholder="John Doe"
                  />
                </div>
                
                <div class="form-group">
                  <label for="email">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    bind:value={email} 
                    required 
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div class="form-group">
                <label for="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  bind:value={subject} 
                  required 
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message" 
                  bind:value={message} 
                  rows="6" 
                  required 
                  placeholder="Tell me about your project or inquiry..."
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
    .contact-page {
      padding: 8rem 0 6rem;
    }
    
    .page-header {
      text-align: center;
      margin-bottom: 4rem;
    }
    
    .page-header h1 {
      font-size: clamp(2.5rem, 5vw, 3.5rem);
      margin-bottom: 1rem;
    }
    
    .page-header p {
      font-size: 1.2rem;
      color: var(--muted);
      max-width: 600px;
      margin: 0 auto;
    }
    
    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 3rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .contact-info-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    
    .info-cards {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .info-card {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1.5rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      transition: all 0.3s ease;
    }
    
    .info-card:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
    
    .info-icon {
      font-size: 1.5rem;
      background: rgba(255, 255, 255, 0.1);
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
    
    .info-text h3 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
    
    .info-text p, .info-text a {
      color: var(--muted);
    }
    
    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
      flex-wrap: wrap; /* Allow wrapping on smaller screens */
  }
    
  .social-link {
    padding: 0.5rem 1.2rem; /* Increase horizontal padding */
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 4px; /* Change to rounded rectangle instead of circle */
    font-size: 0.9rem;
    transition: all 0.3s ease;
    display: inline-block; /* Changed from flex to inline-block */
    text-align: center;
    min-width: 100px; /* Ensure minimum width */
  }
    
  .social-link:hover {
    background: var(--foreground);
    color: var(--background);
    transform: translateY(-5px);
  }
    
    .contact-image {
      margin-top: 2rem;
      position: relative;
      height: 200px;
      overflow: hidden;
      border-radius: 8px;
    }
    
    .geometric-pattern {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        linear-gradient(45deg, rgba(0,0,0,0.7) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(0,0,0,0.7) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, rgba(0,0,0,0.7) 75%),
        linear-gradient(-45deg, transparent 75%, rgba(0,0,0,0.7) 75%);
      background-size: 20px 20px;
      background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      animation: patternMove 15s linear infinite;
    }
    
    @keyframes patternMove {
      0% { background-position: 0 0, 0 10px, 10px -10px, -10px 0px; }
      100% { background-position: 40px 40px, 40px 50px, 50px 30px, 30px 40px; }
    }
    
    .contact-form-container {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 2rem;
      transition: all 0.3s ease;
    }
    
    .contact-form-container:hover {
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }
    
    .contact-form-container h2 {
      font-size: 1.8rem;
      margin-bottom: 2rem;
      position: relative;
      display: inline-block;
    }
    
    .contact-form-container h2::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 50px;
      height: 2px;
      background: var(--foreground);
    }
    
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
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
    
    @media (max-width: 900px) {
      .contact-content {
        grid-template-columns: 1fr;
      }
      
      .form-row {
        grid-template-columns: 1fr;
      }
    }
  </style>