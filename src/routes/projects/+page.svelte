<!-- src/routes/projects/+page.svelte -->
<script>
    import { onMount } from 'svelte';
    
    // In a real project, you would typically fetch this data from an API or CMS
    const projects = [
      {
        title: 'Self Havoc-I',
        description: 'A 3D first-person game using Python and PyGame, implementing Ray Tracing technique and Bresenham\'s Line Algorithm. Leveraged recognized Computer Graphics algorithms to overcome PyGame\'s 3D limitations and utilized sprites, textures, and sound effects for an immersive gameplay experience.',
        technologies: ['Python', 'PyGame', 'Computer Graphics', 'Bresenham\'s algorithm'],
        imageUrl: 'https://media.githubusercontent.com/media/llxSKyWALKeRxll/webhavoc.github.io/main/images/Self%20Havoc%201/mainGif1compressed.gif',
        githubUrl: 'https://github.com/llxSKyWALKeRxll/Self_Havoc',
        liveUrl: 'https://llxskywalkerxll.github.io/webhavoc.github.io/index.html',
        featured: true,
        category: 'Computer Graphics'
      },
      {
        title: 'Self Havoc-II',
        description: 'A 3D-based third person game using Java and OpenGL, with realistic features such as fog, height-map terrain, and object-collision detection. Implemented shaders, phong lighting, and optimized texture rendering using multi-texturing and mip-mapping.',
        technologies: ['Java', 'OpenGL', 'Computer Graphics', 'Object-collision', 'Mip-mapping'],
        imageUrl: 'https://media.githubusercontent.com/media/llxSKyWALKeRxll/webhavoc.github.io/main/images/Self%20Havoc%202/mainGif3compressed.gif',
        githubUrl: 'https://github.com/llxSKyWALKeRxll/Self-Havoc-II',
        liveUrl: 'https://llxskywalkerxll.github.io/webhavoc.github.io/index.html',
        featured: true,
        category: 'Computer Graphics'
      },
      {
        title: 'Restaurant Monitoring System',
        description: 'Developed backend functionality to monitor the online status of restaurants during business hours, generated reports on uptime and downtime, and implemented efficient data processing and interpolation techniques.',
        technologies: ['Python', 'FastAPI', 'SQL', 'Multi-threaded programming'],
        imageUrl: 'https://img.freepik.com/premium-vector/restaurant-building-city-background-street_165488-4443.jpg',
        githubUrl: 'https://github.com/llxSKyWALKeRxll/Python_Report_Generation_Application',
        liveUrl: 'https://github.com/llxSKyWALKeRxll/Python_Report_Generation_Application',
        featured: false,
        category: 'Backend'
      },
      {
        title: 'Web Havoc',
        description: 'Developed a responsive website, Web Havoc, using HTML, CSS, and JavaScript to showcase the games Self Havoc-I and Self Havoc-II. Designed with user-friendly interface, engaging features, and responsive layout for optimal viewing experience.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        imageUrl: 'https://llxskywalkerxll.github.io/webhavoc.github.io/images/Self%20Havoc%201/o3.PNG',
        githubUrl: 'https://github.com/llxSKyWALKeRxll/webhavoc.github.io',
        liveUrl: 'https://llxskywalkerxll.github.io/webhavoc.github.io/index.html',
        featured: false,
        category: 'Frontend'
      },
      {
        title: 'FoodPrep',
        description: 'Developed a dynamic Android application, FoodPrep, using Kotlin, Java, and XML, offering features such as user authentication, restaurant search, menu selection, cart management, and order history tracking. Integrated JSON parsing, APIs, local databases, and local libraries for seamless functionality.',
        technologies: ['Kotlin', 'Java', 'XML', 'Android', 'SQLite'],
        imageUrl: 'https://user-images.githubusercontent.com/79057173/134763332-46a1a1c2-ff45-46c1-9e03-c88ae5443ffe.jpg',
        githubUrl: 'https://github.com/llxSKyWALKeRxll/FoodPrep',
        liveUrl: 'https://github.com/llxSKyWALKeRxll/FoodPrep',
        featured: false,
        category: 'Mobile development'
      },
      {
        title: 'Image Manipulation',
        description: 'Developed an image manipulation application in Python using Pygame and Numpy. Allows users to manipulate images using Latin Extended-B symbols with customizable symbol size and colors. Provides the ability to save the manipulated image to a specified directory by holding the \'SPACE\' button.',
        technologies: ['Python', 'PyGame', 'Numpy'],
        imageUrl: 'https://user-images.githubusercontent.com/79057173/119736743-d5bbe000-be9b-11eb-9d0b-78d19ae10e9f.PNG',
        githubUrl: 'https://github.com/llxSKyWALKeRxll/Image_Manipulation',
        liveUrl: 'https://github.com/llxSKyWALKeRxll/Image_Manipulation',
        featured: false,
        category: 'Computer Graphics'
      },
      {
        title: 'Video Manipulation',
        description: 'Developed a video manipulation application in Python using Pygame, Numpy, and OpenCV. Implemented techniques like custom symbol conversion, colored symbols, and custom-sized pixels. Integrated screenshot capture functionality with the ability to save images at a specified location.',
        technologies: ['Python', 'PyGame', 'Numpy', 'OpenCV'],
        imageUrl: 'https://user-images.githubusercontent.com/79057173/119739151-66e08600-be9f-11eb-9775-3515bd8271ec.PNG',
        githubUrl: 'https://github.com/llxSKyWALKeRxll/Image_Manipulation',
        liveUrl: 'https://github.com/llxSKyWALKeRxll/Image_Manipulation',
        featured: false,
        category: 'Computer Graphics'
      }
    ];
    
    const categories = ['All', ...new Set(projects.map(p => p.category))];
    let selectedCategory = 'All';
    let filteredProjects = projects;
    
    $: {
      filteredProjects = selectedCategory === 'All' 
        ? projects 
        : projects.filter(p => p.category === selectedCategory);
    }
    
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
  
  <svelte:head>
    <title>Projects | Vansh Pratap Singh</title>
    <meta name="description" content="Explore the portfolio of software development projects by Vansh Pratap Singh." />
  </svelte:head>
  
  <section class="projects-page">
    <div class="container">
      <div class="page-header appear">
        <h1>My Projects</h1>
        <p>Explore my work and the technologies I've used</p>
      </div>
      
      <div class="filter-container appear">
        <div class="filter-tabs">
          {#each categories as category}
            <button
              class="filter-tab {selectedCategory === category ? 'active' : ''}"
              on:click={() => selectedCategory = category}
            >
              {category}
            </button>
          {/each}
        </div>
      </div>
      
      <div class="projects-grid">
        {#each filteredProjects as project, i}
          <div class="project-card appear" style="--delay: {i * 0.1}s">
            <div class="project-image">
              <img src={project.imageUrl || '/images/placeholder.jpg'} alt={project.title} />
              {#if project.featured}
                <div class="featured-badge">Featured</div>
              {/if}
            </div>
            
            <div class="project-content">
              <div class="project-category">{project.category}</div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              
              <div class="tech-stack">
                {#each project.technologies as tech}
                  <span class="tech-tag">{tech}</span>
                {/each}
              </div>
              
              <div class="project-links">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" class="project-link github">
                  <span>GitHub</span>
                </a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" class="project-link live">
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
  
  <style>
    .projects-page {
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
    
    .filter-container {
      margin-bottom: 3rem;
      display: flex;
      justify-content: center;
    }
    
    .filter-tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
    }
    
    .filter-tab {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--muted);
      padding: 0.5rem 1.5rem;
      border-radius: 30px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 0.9rem;
    }
    
    .filter-tab:hover {
      border-color: var(--foreground);
      color: var(--foreground);
    }
    
    .filter-tab.active {
      background: var(--foreground);
      color: var(--background);
      border-color: var(--foreground);
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2.5rem;
    }
    
    .project-card {
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      overflow: hidden;
      background: rgba(20, 20, 20, 0.5);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      opacity: 0;
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
    
    .featured-badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: var(--foreground);
      color: var(--background);
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
    }
    
    .project-content {
      padding: 1.5rem;
    }
    
    .project-category {
      display: inline-block;
      background: rgba(255, 255, 255, 0.1);
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-size: 0.8rem;
      margin-bottom: 1rem;
      color: var(--muted);
    }
    
    .project-content h2 {
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
      background: rgba(255, 255, 255, 0.05);
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
      display: flex;
      align-items: center;
      gap: 0.5rem;
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