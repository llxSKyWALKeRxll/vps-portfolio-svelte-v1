<!-- src/lib/components/sections/Hero.svelte -->
<script>
    import { onMount } from 'svelte';
    let typing = true;
    let typedText = '';
    let fullText = "Turning ideas into fast, scalable apps 🚀";
    let typingSpeed = 100;
    let typingIndex = 0;
    
    onMount(() => {
      const typingInterval = setInterval(() => {
        if (typingIndex < fullText.length) {
          typedText += fullText.charAt(typingIndex);
          typingIndex++;
        } else {
          clearInterval(typingInterval);
          typing = false;
        }
      }, typingSpeed);
      
      return () => clearInterval(typingInterval);
    });
  </script>
  
  <section class="hero">
    <div class="container hero-container">
      <div class="hero-content">
        <h1 class="appear">
          <span class="greeting">Hello, I'm</span>
          <span class="name">Vansh Pratap Singh</span>
        </h1>
        
        <div class="typing-container appear">
          <h2 class="typing">
            {typedText}<span class="cursor" class:typing>{typing ? '|' : ''}</span>
          </h2>
        </div>
        
        <p class="description appear">
          A passionate software developer focused on creating innovative solutions
          that solve real-world problems.
        </p>
        
        <div class="cta-buttons appear">
          <a href="/contact" class="primary-button">Get in Touch</a>
          <a href="/projects" class="outline-button">View Work</a>
        </div>
      </div>
      
      <div class="hero-visual appear">
        <div class="geometric-shape"></div>
        <div class="profile-frame">
          <!-- Replace with your image or a stylized avatar -->
          <div class="profile-placeholder">Vansh Pratap Singh</div>
        </div>
      </div>
    </div>
    
    <div class="scroll-indicator">
      <span>Scroll</span>
      <div class="scroll-line"></div>
    </div>
  </section>
  
  <style>
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
    }
    
    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(
          circle at 70% 30%, 
          rgba(255, 255, 255, 0.05) 0%, 
          transparent 70%
        );
      z-index: -1;
    }
    
    .hero-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      padding: 2rem 1.5rem;
    }
    
    .greeting {
      display: block;
      font-size: clamp(1.2rem, 4vw, 1.5rem);
      font-weight: 400;
      color: var(--muted);
      margin-bottom: 0.5rem;
    }
    
    .name {
      display: block;
      font-size: clamp(2.5rem, 8vw, 4.5rem);
      font-weight: 700;
      margin-bottom: 1.5rem;
      background: linear-gradient(to right, #ffffff, #7e7e7e);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .typing-container {
      height: 3.5rem;
      margin-bottom: 1.5rem;
    }
    
    .typing {
      font-size: clamp(1.5rem, 4vw, 2rem);
      font-weight: 600;
    }
    
    .cursor {
      display: inline-block;
      width: 3px;
      margin-left: 2px;
      animation: blink 1s infinite;
    }
    
    .cursor.typing {
      animation: none;
    }
    
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    
    .description {
      font-size: clamp(1rem, 3vw, 1.2rem);
      margin-bottom: 2rem;
      max-width: 600px;
      color: var(--muted);
    }
    
    .cta-buttons {
      display: flex;
      gap: 1rem;
      margin-top: 1.5rem;
    }
    
    .primary-button {
      background: var(--foreground);
      color: var(--background);
      padding: 0.8rem 2rem;
      border-radius: 4px;
      font-weight: 600;
      transition: all 0.3s ease;
      border: 2px solid var(--foreground);
    }
    
    .primary-button:hover {
      background: transparent;
      color: var(--foreground);
    }
    
    .outline-button {
      background: transparent;
      color: var(--foreground);
      padding: 0.8rem 2rem;
      border-radius: 4px;
      font-weight: 600;
      border: 2px solid var(--foreground);
      transition: all 0.3s ease;
    }
    
    .outline-button:hover {
      background: var(--foreground);
      color: var(--background);
    }
    
    .hero-visual {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .geometric-shape {
      position: absolute;
      width: 300px;
      height: 300px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      transform: rotate(45deg);
      animation: rotate 20s linear infinite;
    }
    
    @keyframes rotate {
      0% { transform: rotate(45deg); }
      100% { transform: rotate(405deg); }
    }
    
    .profile-frame {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      overflow: hidden;
      border: 3px solid var(--foreground);
      z-index: 1;
    }
    
    .profile-placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 700;
      background: linear-gradient(135deg, #333333, #111111);
    }
    
    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      color: var(--muted);
      font-size: 0.9rem;
    }
    
    .scroll-line {
      width: 2px;
      height: 50px;
      background: var(--muted);
      position: relative;
      overflow: hidden;
    }
    
    .scroll-line::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 50%;
      background: var(--foreground);
      animation: scrollDown 1.5s ease-in-out infinite;
    }
    
    @keyframes scrollDown {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(200%); }
    }
    
    @media (max-width: 768px) {
      .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
      }
      
      .cta-buttons {
        justify-content: center;
      }
      
      .hero-visual {
        order: -1;
        margin-bottom: 2rem;
      }
    }
  </style>