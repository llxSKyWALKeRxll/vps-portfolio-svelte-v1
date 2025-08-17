<!-- src/lib/components/sections/About.svelte -->
<script>
    let facts = [
      { number: '3+', label: 'Years Experience' },
      { number: '35+', label: 'Projects Completed' },
      { number: '11+', label: 'Happy Clients' }
    ];
  </script>
  
  <section id="about" class="about-section">
    <div class="container">
      <div class="section-header appear">
        <h2>About Me</h2>
        <div class="section-line"></div>
      </div>
      
      <div class="about-content">
        <div class="about-text appear">
          <p>
            👋 Hey there! I’m Vansh Pratap Singh, a software engineer who loves building scalable systems and solving tough problems with code. Over the last few years, I’ve worked across backend, distributed systems, and AI, shipping features that serve tens of thousands of users in real time, optimizing microservices for 4x throughput, and even cutting operational costs by 60%.
          </p>

          <p>
            🚀 From winning company hackathons 🏆 to being recognized with awards for technical excellence, I enjoy creating impactful solutions that blend performance, reliability, and innovation. I’m equally at home designing high-scale backend architectures with Java, Spring Boot, and Go as I am experimenting with AI/LLMs, Prompt Engineering, and Python.
          </p>

          <p>
            ⚡ Outside of work, I’m always exploring new technologies (currently diving deeper into Rust :p) and love working on projects that push boundaries and make life a little easier for people. I like keeping healthy & also love football, combat sports, music, dogs, cats & rabbits.
          </p>
          <!-- <p>
            😃I'm a passionate software developer with expertise in building modern web applications and digital experiences. 
            My journey in technology began with a curiosity about how things work, which led me to pursue a career in software development.
          </p>
          
          <p>
            I specialize in JavaScript ecosystems, with a focus on modern frameworks and technologies. 
            My approach to development is centered around creating intuitive, performant, and accessible solutions.
          </p>
          
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through writing and mentoring.
          </p> -->
        </div>
        
        <div class="facts appear">
          {#each facts as fact, i}
            <div class="fact-item" style="animation-delay: {i * 0.2}s">
              <span class="fact-number">{fact.number}</span>
              <span class="fact-label">{fact.label}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
  
  <style>
    .about-section {
      padding: 6rem 0;
      position: relative;
    }
    
    .section-header {
      margin-bottom: 3rem;
      position: relative;
      display: inline-block;
    }
    
    .section-header h2 {
      font-size: clamp(2rem, 5vw, 2.5rem);
      margin-bottom: 1rem;
    }
    
    .section-line {
      width: 100px;
      height: 3px;
      background: var(--foreground);
    }
    
    .about-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 3rem;
      align-items: center;
    }
    
    .about-text p {
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
      line-height: 1.8;
    }
    
    .facts {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    
    .fact-item {
      display: flex;
      flex-direction: column;
      padding: 1.5rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.03);
      transition: all 0.3s ease;
      opacity: 0;
      animation: fadeIn 0.6s forwards;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .fact-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba(255, 255, 255, 0.2);
    }
    
    .fact-number {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
    
    .fact-label {
      font-size: 1rem;
      color: var(--muted);
    }
    
    @media (max-width: 768px) {
      .about-content {
        grid-template-columns: 1fr;
      }
      
      .facts {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
      }
      
      .fact-item {
        flex: 1 1 calc(33% - 1rem);
        min-width: 120px;
      }
    }
  </style>