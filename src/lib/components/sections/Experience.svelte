<!-- src/lib/components/sections/Experience.svelte -->
<script>
    const experiences = [
      {
        company: 'Bito',
        position: 'Software Development Engineer-2',
        period: 'Oct 2024 - Present',
        description: 'Contributed to building scalable AI-driven solutions, driving major performance improvements, cost optimizations, and product innovations, while also leading impactful R&D initiatives and winning a company-wide hackathon.',
        achievements: [
          'Built an automated evaluation application for the core AI agent, cutting manual testing and accelerating release cycles by 20%.',
          'Drove cost optimization by implementing features that slashed operational expenses by up to 60%.',
          'Identified and resolved critical product bottlenecks, significantly improving system stability and performance.',
          'Authored in-depth R&D and competitive analysis reports, helping to retain key customers and secure new clients.',
          'Achieved 1st place in a company-wide hackathon for developing a high-impact internal application.',
          'Tech used: Python, Artificial Intelligence (AI), Prompt Engineering, Go, AWS, Docker, SQL, Git, Linux.'
        ]
      },
      {
        company: 'Adda247',
        position: 'Software Development Engineer-2',
        period: 'Apr 2024 - Oct 2024',
        description: 'Engineered high-scale backend systems, including real-time classroom features serving tens of thousands of users, optimized critical microservices for performance and reliability, and was recognized with an award for outstanding technical contributions.',
        achievements: [
          'Developed a real-time YouTube live class feature enabling teachers to create and display polls, with live chat answers and a real-time leaderboard, supporting 50k concurrent users and 2000 messages/second, using distributed systems to handle multiple simultaneous classes, resulting in an 18% user conversion rate from YouTube to our application.',
          'Optimized a microservice by identifying and resolving a JVM bottleneck, reducing CPU utilization spikes and improving API response times.',
          'Recognized and awarded for outstanding technical contributions and efforts in improving system reliability.',
          'Tech used: Java, Spring Boot, AWS, Sql, Kafka, ElasticSearch, Redis, Postman, Git, Linux, Kibana, Docker'
        ]
      },
      // {
      //   company: 'WebCraft Studios',
      //   position: 'Frontend Developer',
      //   period: 'Jun 2016 - Feb 2018',
      //   description: 'Created responsive web interfaces using HTML, CSS, and JavaScript. Worked closely with UX designers to implement pixel-perfect designs.',
      //   achievements: [
      //     'Developed responsive layouts for 15+ client websites',
      //     'Implemented accessibility improvements across all projects',
      //     'Created reusable component library that accelerated development'
      //   ]
      // }
    ];
  </script>
  
  <section id="experience" class="experience-section">
    <div class="container">
      <div class="section-header appear">
        <h2>Work Experience</h2>
        <div class="section-line"></div>
      </div>
      
      <div class="timeline">
        {#each experiences as exp, i}
          <div class="timeline-item appear" style="--delay: {i * 0.2}s">
            <div class="timeline-dot"></div>
            <div class="timeline-date">{exp.period}</div>
            <div class="timeline-content">
              <h3>{exp.position}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
              
              <ul class="achievements">
                {#each exp.achievements as achievement}
                  <li>{achievement}</li>
                {/each}
              </ul>
            </div>
          </div>
        {/each}
      </div>
      
      <div class="view-all-container appear">
        <a href="/experience" class="view-all-button">View Full Resume</a>
      </div>
    </div>
  </section>
  
  <style>
    .experience-section {
      padding: 6rem 0;
      position: relative;
    }
    
    .timeline {
      position: relative;
      max-width: 800px;
      margin: 3rem auto 0;
      padding-left: 2rem;
    }
    
    .timeline::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 2px;
      background: linear-gradient(to bottom, 
        var(--foreground) 0%, 
        rgba(255, 255, 255, 0.2) 100%);
    }
    
    .timeline-item {
      position: relative;
      margin-bottom: 3rem;
      padding-bottom: 1rem;
      opacity: 0;
      animation: fadeInRight 0.6s forwards;
      animation-delay: var(--delay, 0s);
    }
    
    .timeline-dot {
      position: absolute;
      left: -2.5rem;
      top: 0.5rem;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background: var(--foreground);
      border: 2px solid var(--background);
      z-index: 1;
    }
    
    .timeline-date {
      font-size: 0.9rem;
      color: var(--muted);
      margin-bottom: 0.5rem;
      font-weight: 500;
    }
    
    .timeline-content {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 1.5rem;
      transition: all 0.3s ease;
    }
    
    .timeline-content:hover {
      background: rgba(255, 255, 255, 0.05);
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
    
    .timeline-content h3 {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
    }
    
    .timeline-content h4 {
      font-size: 1.1rem;
      color: var(--muted);
      margin-bottom: 1rem;
      font-weight: 500;
    }
    
    .timeline-content p {
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
    
    .achievements {
      margin-left: 1.5rem;
    }
    
    .achievements li {
      margin-bottom: 0.5rem;
      position: relative;
      line-height: 1.6;
    }
    
    .achievements li::before {
      content: '→';
      position: absolute;
      left: -1.5rem;
      color: var(--muted);
    }
    
    .view-all-container {
      margin-top: 3rem;
      text-align: center;
    }
    
    @keyframes fadeInRight {
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @media (max-width: 768px) {
      .timeline {
        padding-left: 1.5rem;
      }
      
      .timeline-dot {
        left: -2rem;
      }
    }
  </style>