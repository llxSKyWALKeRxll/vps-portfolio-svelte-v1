<!-- src/lib/components/layout/Footer.svelte -->
<script>
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
      { name: 'GitHub', url: 'https://github.com/llxSKyWALKeRxll', icon: 'github' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vanshpratapsingh/', icon: 'linkedin' },
      // { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'twitter' }
    ];
  </script>
  
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <h2>Vansh Pratap Singh</h2>
          <p>Software Developer</p>
        </div>
        
        <div class="footer-links">
          <div class="footer-nav">
            <h3>Navigation</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/experience">Experience</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div class="footer-social">
            <h3>Connect</h3>
            <ul class="social-links">
              {#each socialLinks as link}
                <li>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <span class="icon">{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {currentYear} Vansh Pratap Singh. All rights reserved.</p>
      </div>
    </div>
  </footer>
  
  <style>
    footer {
      background: var(--background);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding: 4rem 0 2rem;
      margin-top: 4rem;
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 3rem;
      margin-bottom: 3rem;
    }
    
    .footer-logo h2 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
    
    .footer-links {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
    
    h3 {
      margin-bottom: 1.5rem;
      font-size: 1.2rem;
      position: relative;
      display: inline-block;
    }
    
    h3::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 40px;
      height: 2px;
      background: var(--foreground);
    }
    
    footer ul {
      list-style: none;
    }
    
    footer ul li {
      margin-bottom: 1rem;
    }
    
    .social-links a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .icon {
      font-size: 1.2rem;
    }
    
    .footer-bottom {
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      font-size: 0.9rem;
      color: var(--muted);
    }
    
    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
      }
      
      .footer-links {
        grid-template-columns: 1fr;
      }
    }
  </style>