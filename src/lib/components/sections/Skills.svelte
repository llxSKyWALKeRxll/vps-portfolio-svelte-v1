<!-- src/lib/components/sections/Skills.svelte -->
<script>
    import { onMount } from 'svelte';
    
    // const skills = [
    //   {
    //     category: 'Languages',
    //     items: [
    //       { name: 'Python', level: 95 },
    //       { name: 'Java', level: 95 },
    //       { name: 'Rust', level: 90 },
    //       { name: 'Go', level: 95 },
    //       { name: 'Lua', level: 80 },
    //       { name: 'C++', level: 80 },
    //       { name: 'JavaScript', level: 95 },
    //       { name: 'SQL', level: 95 }
    //     ]
    //   },
    //   {
    //     category: 'Tech & Frameworks',
    //     items: [
    //       { name: 'AWS', level: 95 },
    //       { name: 'Docker', level: 95 },
    //       { name: 'Kubernetes', level: 95 },
    //       { name: 'Git', level: 95 },
    //       { name: 'Linux', level: 95 },
    //       { name: 'Spring Boot', level: 95 },
    //       { name: 'Kafka', level: 95 },
    //       { name: 'RabbitMQ', level: 90 },
    //       { name: 'ElasticSearch', level: 95 },
    //       { name: 'Redis', level: 95 },
    //       { name: 'MongoDB', level: 90 },
    //       { name: 'DynamoDB', level: 95 },
    //       { name: 'FastAPI', level: 95 },
    //       { name: 'Django', level: 95 },
    //       { name: 'Gin', level: 95 },
    //       { name: 'Actix', level: 95 },
    //       { name: 'React', level: 95 },
    //       { name: 'Svelte', level: 95 },
    //       { name: 'Artificial Intelligence (AI)', level: 90 },
    //       { name: 'Prompt Engineering', level: 95 },
    //     ]
    //   },
    //   // {
    //   //   category: 'Frontend',
    //   //   items: [
    //   //     { name: 'JavaScript', level: 90 },
    //   //     { name: 'React', level: 90 },
    //   //     { name: 'Svelte', level: 90 },
    //   //     { name: 'HTML/CSS', level: 90 },
    //   //     { name: 'TypeScript', level: 90 }
    //   //   ]
    //   // },
    //   // {
    //   //   category: 'Backend',
    //   //   items: [
    //   //     { name: 'Node.js', level: 85 },
    //   //     { name: 'Express', level: 80 },
    //   //     { name: 'MongoDB', level: 75 },
    //   //     { name: 'PostgreSQL', level: 70 },
    //   //     { name: 'GraphQL', level: 65 }
    //   //   ]
    //   // },
    //   // {
    //   //   category: 'Tools & Others',
    //   //   items: [
    //   //     { name: 'Git', level: 85 },
    //   //     { name: 'Docker', level: 70 },
    //   //     { name: 'CI/CD', level: 75 },
    //   //     { name: 'Jest', level: 80 },
    //   //     { name: 'Figma', level: 65 }
    //   //   ]
    //   // }
    // ];

    const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'Python', level: 95 },
      { name: 'Java', level: 95 },
      { name: 'Rust', level: 90 },
      { name: 'Go', level: 95 },
      { name: 'Lua', level: 80 },
      { name: 'C++', level: 80 },
      { name: 'JavaScript', level: 95 },
      { name: 'SQL', level: 95 }
    ]
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      { name: 'Spring Boot', level: 95 },
      { name: 'FastAPI', level: 95 },
      { name: 'Django', level: 95 },
      { name: 'Gin', level: 95 },
      { name: 'Actix', level: 95 },
      { name: 'React', level: 95 },
      { name: 'Svelte', level: 95 }
    ]
  },
  {
    category: 'Tools, Platforms & Other',
    items: [
      { name: 'AWS', level: 95 },
      { name: 'Docker', level: 95 },
      { name: 'Kubernetes', level: 95 },
      { name: 'Git', level: 95 },
      { name: 'Linux', level: 95 },
      { name: 'Kafka', level: 95 },
      { name: 'RabbitMQ', level: 90 },
      { name: 'ElasticSearch', level: 95 },
      { name: 'Redis', level: 95 },
      { name: 'MongoDB', level: 90 },
      { name: 'DynamoDB', level: 95 },
      { name: 'Artificial Intelligence (AI)', level: 90 },
      { name: 'Prompt Engineering', level: 95 }
    ]
  }
];

    
    onMount(() => {
      // Fix skill progress animation
      const skillBars = document.querySelectorAll('.skill-progress');
      skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level') + '%';
        setTimeout(() => {
          bar.style.width = level;
        }, 100);
      });
    });
  </script>
  
  <section id="skills" class="skills-section">
    <div class="container">
      <div class="section-header appear">
        <h2 style="padding-bottom: 16px;">Skills & Expertise</h2>
        <div class="section-line"></div>
      </div>
      
      <div class="skills-content">
        {#each skills as category, i}
          <div class="skill-category appear" style="animation-delay: {i * 0.2}s">
            <h3>{category.category}</h3>
            <div class="skills-list">
              {#each category.items as skill, j}
                <div class="skill-item" style="animation-delay: {j * 0.1 + i * 0.2}s">
                  <div class="skill-header">
                    <span class="skill-name">{skill.name}</span>
                    <span class="skill-percentage">{skill.level}%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-progress" data-level={skill.level} style="width: 0%"></div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
  
  <style>
    .skills-section {
      padding: 6rem 0;
      background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(20,20,20,0.2) 100%);
    }
    
    .skills-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 3rem;
    }
    
    .skill-category {
      opacity: 0;
      animation: fadeIn 0.6s forwards;
    }
    
    .skill-category h3 {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      position: relative;
      display: inline-block;
    }
    
    .skill-category h3::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 40px;
      height: 2px;
      background: var(--foreground);
    }
    
    .skills-list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .skill-item {
      opacity: 0;
      animation: fadeIn 0.6s forwards;
    }
    
    .skill-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
    }
    
    .skill-name {
      font-weight: 500;
    }
    
    .skill-percentage {
      font-size: 0.9rem;
      color: var(--muted);
    }
    
    .skill-bar {
      height: 6px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 3px;
      overflow: hidden;
    }
    
    .skill-progress {
      height: 100%;
      background: linear-gradient(90deg, var(--foreground) 0%, var(--muted) 100%);
      border-radius: 3px;
      width: 0;
      transition: width 1.5s ease-out;
    }
    
    @keyframes fadeIn {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  </style>