<!-- src/routes/experience/+page.svelte -->
<script>
    import { onMount } from 'svelte';
    
    const workExperience = [
      {
        company: 'Bito',
        position: 'Software Development Engineer - 2',
        period: 'Oct 2024 - Present',
        location: 'Pune, India',
        description: 'Contributed to building scalable AI-driven solutions, driving major performance improvements, cost optimizations, and product innovations, while also leading impactful R&D initiatives and winning a company-wide hackathon.',
        responsibilities: [
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
        position: 'Software Development Engineer - 2',
        period: 'Apr 2024 - Oct 2024',
        location: 'Gurugram, India',
        description: 'Engineered high-scale backend systems, including real-time classroom features serving tens of thousands of users, optimized critical microservices for performance and reliability, and was recognized with an award for outstanding technical contributions.',
        responsibilities: [
          'Developed a real-time YouTube live class feature enabling teachers to create and display polls, with live chat answers and a real-time leaderboard, supporting 50k concurrent users and 2000 messages/second, using distributed systems to handle multiple simultaneous classes, resulting in an 18% user conversion rate from YouTube to our application.',
          'Optimized a microservice by identifying and resolving a JVM bottleneck, reducing CPU utilization spikes and improving API response times.',
          'Recognized and awarded for outstanding technical contributions and efforts in improving system reliability.',
          'Tech used: Java, Spring Boot, AWS, Sql, Kafka, ElasticSearch, Redis, Postman, Git, Linux, Kibana, Docker'
        ]
      },
      {
        company: 'Adda247',
        position: 'Software Development Engineer - 1',
        period: 'Jul 2023 - Apr 2024',
        location: 'Gurugram, India',
        description: 'Worked on designing and scaling interactive classroom systems, leading microservice migrations, optimizing APIs with techniques like request coalescing, and building real-time engagement features that supported tens of thousands of concurrent users—driving measurable improvements in performance, reliability, and user experience.',
        responsibilities: [
          "Led the migration of a third-party microservice previously managed by freelancers, seamlessly integrating it into our environment while architecting and optimizing APIs from the ground up, resulting in improved system efficiency",
          "Implemented a feature by utilizing distributed systems to manage live polls for up to 30K concurrent users while dynamically updating an active leaderboard in real-time, resulting in a significant 17% increase in user engagement",
          "Implemented request coalescing techniques, significantly reducing server and database load by 40%",
          "Developed and deployed interactive features, allowing teachers to engage directly with students during live classes, including real-time communication and features like hand raising and live doubt resolution",
          "Maintained close collaboration with Product Managers and the QA Team to gather detailed project requirements, resulting in the successful delivery of projects",
          "Tech used: Java, Spring Boot, Golang, Lua, Sql, Kafka, ElasticSearch, Redis, Postman, Git, Linux"
        ]
      },
      {
        company: 'Adda247',
        position: 'Software Development Engineer - Intern',
        period: 'Jul 2022 - Jul 2023',
        location: 'Gurugram, India',
        description: 'Independently drove end-to-end development of major projects, designing efficient APIs from scratch, optimizing microservices for a 4x performance boost, and collaborating across teams to deliver high-quality features ahead of deadlines while ensuring system reliability and scalability.',
        responsibilities: [
          "Optimized an entire existing micro-service by learning new tools and tech stack, resulting in a 4x increase in throughput",
          "Designed efficient APIs from scratch that met industry standards",
          "Collaborated with various teams, including seniors, to deliver projects and features while identifying and addressing bottlenecks",
          "Handled an entire major project individually, including designing and coding optimal APIs from scratch, and conducting meetings with the product, quality assurance, and front-end teams to deliver the project ahead of the deadline",
          "Tech used: Java, Spring Boot, Go, Lua, Sql, ElasticSearch, Redis, MongoDB, Postman, Git, Linux"
        ]
      },
      {
        company: 'Samsung R&D',
        position: 'Research Intern',
        period: 'Nov 2021 - May 2022',
        location: 'Remote',
        description: 'Simulated 5G network behavior with ns-3 and C++, researching RAN energy efficiency challenges and documenting KPIs and optimization strategies to support theoretical validation.',
        responsibilities: [
          "Simulated 5G network behavior using ns-3 and C++, contributing to research and theoretical validation through custom simulation code.",
          "Researched 5G RAN energy challenges and documented key KPIs and optimization strategies.",
          "Authored ”Analysis of Energy Consumption and Optimization Strategies in 5G RAN Elements”, circulated internally to inform R&D initiatives.",
          "Tech used: Linux, Ns-3, C++."
        ]
      },
      {
        company: 'OpenGenus Foundation',
        position: 'Algorithm and Data Structure Developer, Intern',
        period: 'Jun 2021 - Sep 2021',
        location: 'Remote',
        description: 'Implemented Xiaolin Wu’s Line Drawing Algorithm with anti-aliasing and authored detailed articles on advanced algorithmic topics, including string algorithms, probabilistic methods, bitwise operations, and complexity analysis.',
        responsibilities: [
          "Implemented Xiaolin Wu's Line Drawing Algorithm with anti-aliasing",
          "Wrote informative & explanatory articles on various topics ranging from advanced string algorithms to probabilistic algorithms, bitwise operations, recursive backtracking & complexity analysis of various algorithms",
          "Check my profile: https://iq.opengenus.org/author/vansh/",
          "Tech used: Python, Java"
        ]
      }
    ];
    
    const education = [
      {
        institution: 'Chandigarh University',
        degree: 'Bachelor of Engineering in Computer Science & Engineering',
        period: '2019 - 2023',
        description: ''
      },
      // {
      //   institution: 'University of California, Berkeley',
      //   degree: 'Bachelor of Science in Computer Science',
      //   period: '2010 - 2014',
      //   description: 'Graduated with honors. Completed coursework in algorithms, data structures, software engineering, and web development.'
      // }
    ];
    
    const skills = {
      technical: [
        'Python', 'Java', 'Rust', 'Go', 'Lua',
        'C++', 'JavaScript', 'SQL', 'Spring Boot', 'FastAPI', 'Django',
        'Gin', 'Actix', 'React', 'Svelte', 'AWS', 'Docker', 'Kubernetes',
        'Git', 'Linux', 'Kafka', 'RabbitMQ', 'ElasticSearch', 'Redis', 'MongoDB',
        'DynamoDB', 'Artificial Intelligence (AI)', 'Prompt Engineering'
      ],
      soft: [
        'Team Leadership', 'Project Management', 'Problem Solving',
        'Communication', 'Agile Methodologies', 'Mentoring'
      ]
    };
    
    const certifications = [
      {
        name: 'Spring Boot Microservices and Spring Cloud',
        issuer: 'Udemy',
        date: 'Oct 2022',
        url: 'https://www.udemy.com/certificate/UC-e06b2e4f-a106-49db-b95a-566ddcf23bda/'
      },
      {
        name: 'Android App Development',
        issuer: 'Internshala',
        date: 'Jul 2021',
        url: 'https://trainings.internshala.com/view_certificate/E536D401-74E0-019D-F9CA-078A657CCB1B/7D160B11-D98E-8273-937F-50BD216819A8/'
      },
      {
        name: 'HTML, CSS, and Javascript for Web Developers',
        issuer: 'Coursera',
        date: 'Jun 2021',
        url: 'https://www.coursera.org/account/accomplishments/certificate/864ZVBADXT6K',
      },
      {
        name: 'Computer Graphics with Modern OpenGL and C++',
        issuer: 'Udemy',
        date: 'May 2021',
        url: 'https://www.udemy.com/certificate/UC-177da5ef-7a33-4142-a63e-212cf1620530/',
      },
      {
        name: 'Data Base Management System',
        issuer: 'NPTEL',
        date: 'Mar 2021',
        url: 'https://nptel.ac.in/noc/ecertificate/?q=NPTEL21CS04S21890962021615',
      },
      {
        name: 'Learn to Code by Making a 2D Platformer in Unity & C#',
        issuer: 'Udemy',
        date: 'Jan 2021',
        url: 'https://www.udemy.com/certificate/UC-8b60ead4-9272-4a33-b7b8-f764c372b842/',
      },
      {
        name: 'Data Structure and Algorithms using Java',
        issuer: 'NPTEL',
        date: 'Dec 2020',
        url: 'https://nptel.ac.in/noc/ecertificate/?q=NPTEL20CS85S81880005007290',
      },
      {
        name: 'Software Engineering',
        issuer: 'NPTEL',
        date: 'Dec 2020',
        url: 'https://nptel.ac.in/noc/ecertificate/?q=NPTEL20CS68S71880208007290',
      },
      {
        name: 'Introduction to C# Programming and Unity',
        issuer: 'Coursera',
        date: 'Aug 2020',
        url: 'https://www.coursera.org/account/accomplishments/certificate/UPU27SGVL3YY',
      },
      {
        name: 'C Programming',
        issuer: 'Spoken Tutorial',
        date: 'Nov 2019',
        url: '#',
      }
    ];
    
    onMount(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });
      
      document.querySelectorAll('.appear').forEach(el => {
        observer.observe(el);
      });
    });
  </script>
  
  <svelte:head>
    <title>Resume | Vansh Pratap Singh</title>
    <meta name="description" content="Professional experience and skills of Vansh Pratap Singh, a software developer." />
  </svelte:head>
  
  <section class="resume-page">
    <div class="container">
      <div class="page-header appear">
        <h1>Resume</h1>
        <p>My professional journey and qualifications</p>
        <div class="resume-actions">
          <a href="/data/resume/Vansh_Resume.pdf" download="Vansh_Resume.pdf" class="download-button">
            Download PDF
          </a>
        </div>
      </div>
      
      <div class="resume-content">
        <!-- Work Experience Section -->
        <div class="resume-section appear">
          <h2 class="section-title">Work Experience</h2>
          
          <div class="timeline">
            {#each workExperience as job, i}
              <div class="timeline-item appear" style="--delay: {i * 0.2}s">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <div class="job-header">
                    <h3>{job.position}</h3>
                    <div class="company-details">
                      <span class="company-name">{job.company}</span>
                      <span class="job-location">{job.location}</span>
                    </div>
                    <span class="job-period">{job.period}</span>
                  </div>
                  
                  <p class="job-description">{job.description}</p>
                  
                  <div class="job-responsibilities">
                    <h4>Key Responsibilities:</h4>
                    <ul>
                      {#each job.responsibilities as responsibility}
                        <li>{responsibility}</li>
                      {/each}
                    </ul>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
        
        <!-- Education Section -->
        <div class="resume-section appear">
          <h2 class="section-title">Education</h2>
          
          <div class="education-list">
            {#each education as edu, i}
              <div class="education-item appear" style="--delay: {i * 0.2}s">
                <div class="education-period">{edu.period}</div>
                <div class="education-content">
                  <h3>{edu.degree}</h3>
                  <div class="institution">{edu.institution}</div>
                  <p>{edu.description}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>
        
        <!-- Skills Section -->
        <div class="resume-section appear">
          <h2 class="section-title">Skills</h2>
          
          <div class="skills-container">
            <div class="skills-group appear">
              <h3>Technical Skills</h3>
              <div class="skills-tags">
                {#each skills.technical as skill}
                  <span class="skill-tag">{skill}</span>
                {/each}
              </div>
            </div>
            
            <div class="skills-group appear">
              <h3>Soft Skills</h3>
              <div class="skills-tags">
                {#each skills.soft as skill}
                  <span class="skill-tag soft">{skill}</span>
                {/each}
              </div>
            </div>
          </div>
        </div>
        
        <!-- Certifications Section -->
        <div class="resume-section appear">
          <h2 class="section-title">Certifications</h2>
          
          <div class="certifications-list">
            {#each certifications as cert}
              <div class="certification-item appear">
                <h3>{cert.name}</h3>
                <div class="certification-details">
                  <span class="cert-issuer">{cert.issuer}</span>
                  <span class="cert-date">{cert.date}</span>
                </div>
                {#if cert.url}
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" class="cert-link">
                    View Certificate
                  </a>
                {/if}
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <style>
    .resume-page {
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
      margin-bottom: 2rem;
    }
    
    .resume-actions {
      display: flex;
      justify-content: center;
    }
    
    .download-button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--foreground);
      color: var(--background);
      padding: 0.8rem 1.5rem;
      border-radius: 4px;
      font-weight: 600;
      transition: all 0.3s ease;
    }
    
    .download-button:hover {
      background: transparent;
      color: var(--foreground);
      box-shadow: inset 0 0 0 2px var(--foreground);
    }
    
    .resume-content {
      max-width: 900px;
      margin: 0 auto;
    }
    
    .resume-section {
      margin-bottom: 4rem;
    }
    
    .section-title {
      font-size: 2rem;
      margin-bottom: 2rem;
      position: relative;
      display: inline-block;
    }
    
    .section-title::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 50px;
      height: 3px;
      background: var(--foreground);
    }
    
    /* Timeline styles */
    .timeline {
      position: relative;
      margin-left: 20px;
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
      padding-left: 2rem;
    }
    
    .timeline-dot {
      position: absolute;
      left: -10px;
      top: 5px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--foreground);
      border: 3px solid var(--background);
      z-index: 1;
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
    
    .job-header {
      margin-bottom: 1.5rem;
    }
    
    .job-header h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
    
    .company-details {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
    }
    
    .company-name {
      font-weight: 500;
      color: var(--muted);
    }
    
    .job-location {
      color: var(--muted);
      font-size: 0.9rem;
    }
    
    .job-period {
      display: inline-block;
      background: rgba(255, 255, 255, 0.1);
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-size: 0.8rem;
      color: var(--muted);
    }
    
    .job-description {
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
    
    .job-responsibilities h4 {
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }
    
    .job-responsibilities ul {
      margin-left: 1.5rem;
    }
    
    .job-responsibilities li {
      margin-bottom: 0.5rem;
      line-height: 1.6;
    }
    
    /* Education styles */
    .education-list {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    
    .education-item {
      display: grid;
      grid-template-columns: 1fr 3fr;
      gap: 2rem;
      padding: 1.5rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      transition: all 0.3s ease;
    }
    
    .education-item:hover {
      background: rgba(255, 255, 255, 0.05);
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
    
    .education-period {
      font-weight: 500;
      color: var(--muted);
    }
    
    .education-content h3 {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
    }
    
    .institution {
      color: var(--muted);
      margin-bottom: 1rem;
      font-weight: 500;
    }
    
    /* Skills styles */
    .skills-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
    
    .skills-group h3 {
      font-size: 1.3rem;
      margin-bottom: 1.5rem;
    }
    
    .skills-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
    }
    
    .skill-tag {
      background: rgba(255, 255, 255, 0.05);
      padding: 0.5rem 1rem;
      border-radius: 30px;
      transition: all 0.3s ease;
    }
    
    .skill-tag:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-3px);
    }
    
    .skill-tag.soft {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    /* Certifications styles */
    .certifications-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .certification-item {
      padding: 1.5rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      transition: all 0.3s ease;
    }
    
    .certification-item:hover {
      background: rgba(255, 255, 255, 0.05);
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
    
    .certification-item h3 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
    
    .certification-details {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1.5rem;
      color: var(--muted);
    }
    
    .cert-link {
      display: inline-block;
      padding: 0.5rem 1rem;
      background: transparent;
      border: 1px solid var(--foreground);
      border-radius: 4px;
      font-size: 0.9rem;
      transition: all 0.3s ease;
    }
    
    .cert-link:hover {
      background: var(--foreground);
      color: var(--background);
    }
    
    @media (max-width: 768px) {
      .skills-container {
        grid-template-columns: 1fr;
      }
      
      .education-item {
        grid-template-columns: 1fr;
        gap: 0.5rem;
      }
      
      .certifications-list {
        grid-template-columns: 1fr;
      }
    }
  </style>