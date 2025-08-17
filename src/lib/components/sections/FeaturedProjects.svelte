<!-- src/lib/components/sections/FeaturedProjects.svelte -->
<script>
    import { onMount } from 'svelte';
    
    const projects = [
      {
        title: 'Self Havoc-I',
        description: 'A 3D first-person game using Python and PyGame, implementing Ray Tracing technique and Bresenham\'s Line Algorithm. Leveraged recognized Computer Graphics algorithms to overcome PyGame\'s 3D limitations and utilized sprites, textures, and sound effects for an immersive gameplay experience.',
        technologies: ['Python', 'PyGame', 'Computer Graphics', 'Bresenham\'s algorithm'],
        imageUrl: 'https://media.githubusercontent.com/media/llxSKyWALKeRxll/webhavoc.github.io/main/images/Self%20Havoc%201/mainGif1compressed.gif',
        githubUrl: 'https://github.com/llxSKyWALKeRxll/Self_Havoc',
        liveUrl: 'https://llxskywalkerxll.github.io/webhavoc.github.io/index.html'
      },
      {
        title: 'Self Havoc-II',
        description: 'A 3D-based third person game using Java and OpenGL, with realistic features such as fog, height-map terrain, and object-collision detection. Implemented shaders, phong lighting, and optimized texture rendering using multi-texturing and mip-mapping.',
        technologies: ['Java', 'OpenGL', 'Computer Graphics', 'Object-collision', 'Mip-mapping'],
        imageUrl: 'https://media.githubusercontent.com/media/llxSKyWALKeRxll/webhavoc.github.io/main/images/Self%20Havoc%202/mainGif3compressed.gif',
        githubUrl: 'https://github.com/llxSKyWALKeRxll/Self-Havoc-II',
        liveUrl: 'https://llxskywalkerxll.github.io/webhavoc.github.io/index.html'
      },
      {
        title: 'Restaurant Monitoring System',
        description: 'Developed backend functionality to monitor the online status of restaurants during business hours, generated reports on uptime and downtime, and implemented efficient data processing and interpolation techniques.',
        technologies: ['Python', 'FastAPI', 'SQL', 'Multi-threaded programming'],
        imageUrl: 'https://img.freepik.com/premium-vector/restaurant-building-city-background-street_165488-4443.jpg',
        githubUrl: 'https://github.com/llxSKyWALKeRxll/Python_Report_Generation_Application',
        liveUrl: 'https://github.com/llxSKyWALKeRxll/Python_Report_Generation_Application'
      }
    ];
    
    onMount(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      }, { threshold: 0.1 });
      
      document.querySelectorAll('.project-card').forEach(el => {
        observer.observe(el);
      });
    });
  </script>
  
  <section id="projects" class="projects-section">
    <div class="container">
      <div class="section-header appear">
        <h2>Featured Projects</h2>
        <div class="section-line"></div>
      </div>
      
      <div class="projects-grid">
        {#each projects as project, i}
          <div class="project-card appear" style="--delay: {i * 0.2}s">
            <div class="project-image">
              <img src={project.imageUrl || '/images/placeholder.jpg'} alt={project.title} />
            </div>
            
            <div class="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div class="tech-stack">
                {#each project.technologies as tech}
                  <span class="tech-tag">{tech}</span>
                {/each}
              </div>
              
              <div class="project-links">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" class="project-link github">GitHub</a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" class="project-link live">Live Demo</a>
              </div>
            </div>
          </div>
        {/each}
      </div>
      
      <div class="view-all-container appear">
        <a href="/projects" class="view-all-button">View All Projects</a>
      </div>
    </div>
  </section>
  
  <style>
    .projects-section {
      padding: 6rem 0;
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2.5rem;
      margin-top: 3rem;
    }
    
    .project-card {
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      overflow: hidden;
      background: rgba(20, 20, 20, 0.5);
      transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
      opacity: 0;
      transform: translateY(30px);
      animation: fadeInUp 0.6s forwards;
      animation-delay: var(--delay, 0s);
    }
    
    .project-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      border-color: rgba(255, 255, 255, 0.2);
    }
    
    .project-image {
      height: 200px;
      overflow: hidden;
      position: relative;
    }
    
    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    
    .project-card:hover .project-image img {
      transform: scale(1.05);
    }
    
    .project-content {
      padding: 1.5rem;
    }
    
    .project-content h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    
    .project-content p {
      color: var(--muted);
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
    
    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }
    
    .tech-tag {
      background: rgba(255, 255, 255, 0.1);
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-size: 0.8rem;
      color: var(--muted);
    }
    
    .project-links {
      display: flex;
      gap: 1rem;
    }
    
    .project-link {
      padding: 0.5rem 1rem;
      border-radius: 4px;
      font-weight: 500;
      font-size: 0.9rem;
      transition: all 0.2s ease;
    }
    
    .github {
      background: transparent;
      border: 1px solid var(--foreground);
    }
    
    .github:hover {
      background: var(--foreground);
      color: var(--background);
    }
    
    .live {
      background: var(--foreground);
      color: var(--background);
    }
    
    .live:hover {
      background: transparent;
      color: var(--foreground);
      border: 1px solid var(--foreground);
    }
    
    .view-all-container {
      margin-top: 3rem;
      text-align: center;
    }
    
    .view-all-button {
      display: inline-block;
      padding: 0.8rem 2rem;
      border: 1px solid var(--foreground);
      border-radius: 4px;
      font-weight: 500;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      z-index: 1;
    }
    
    .view-all-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: var(--foreground);
      transition: all 0.3s ease;
      z-index: -1;
    }
    
    .view-all-button:hover::before {
      width: 100%;
    }
    
    .view-all-button:hover {
      color: var(--background);
    }
    
    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>