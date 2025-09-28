<!-- src/lib/components/layout/Header.svelte -->
<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    
    let scrolled = false;
    let menuOpen = false;
    
    onMount(() => {
      const handleScroll = () => {
        scrolled = window.scrollY > 20;
      };
      
      window.addEventListener('scroll', handleScroll);
      
      // Add click event listener to close menu when clicking outside
      const handleClickOutside = (event) => {
        // Check if menu is open and the click is outside the nav
        if (menuOpen) {
          const nav = document.querySelector('nav');
          const menuToggle = document.querySelector('.menu-toggle');
          
          // If click is outside nav and not on the menu toggle button
          if (nav && menuToggle && 
              !nav.contains(event.target) && 
              !menuToggle.contains(event.target)) {
            menuOpen = false;
          }
        }
      };
      
      // Add the event listener to document
      document.addEventListener('click', handleClickOutside);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        document.removeEventListener('click', handleClickOutside);
      };
    });
    
    const toggleMenu = () => {
      menuOpen = !menuOpen;
    };
    
    const navItems = [
      { href: '/', label: 'Home' },
      { href: '/projects', label: 'Projects' },
      { href: '/experience', label: 'Experience' },
      { href: '/blog', label: 'Blog' },
      { href: '/contact', label: 'Contact' }
    ];
  </script>
  
  <header class:scrolled>
    <div class="container header-container">
      <a href="/" class="logo clickable">Vansh Pratap Singh</a>
      
      <button class="menu-toggle clickable" class:open={menuOpen} on:click={toggleMenu} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <nav class:open={menuOpen}>
        <ul>
          {#each navItems as item}
            <li>
              <a
                href={item.href}
                class="clickable"
                class:active={$page.url.pathname === item.href}
                on:click={() => menuOpen = false}
              >
                {item.label}
              </a>
            </li>
          {/each}
        </ul>
      </nav>
    </div>
  </header>
  
  <style>
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 100;
      transition: all 0.3s ease;
      padding: 1.5rem 0;
      background: transparent;
    }
    
    header.scrolled {
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
      padding: 1rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: 1px;
      color: var(--foreground);
    }
    
    nav ul {
      display: flex;
      gap: 2rem;
      list-style: none;
    }
    
    nav a {
      position: relative;
      font-weight: 500;
      padding: 0.5rem 0;
    }
    
    nav a::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      background: var(--foreground);
      transition: width 0.3s ease;
    }
    
    nav a:hover::after,
    nav a.active::after {
      width: 100%;
    }
    
    .menu-toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      width: 30px;
      height: 22px;
      position: relative;
      z-index: 200;
    }
    
    .menu-toggle span {
      display: block;
      width: 100%;
      height: 2px;
      background: var(--foreground);
      position: absolute;
      transition: all 0.3s ease;
      left: 0;
    }
    
    .menu-toggle span:nth-child(1) {
      top: 0;
    }
    
    .menu-toggle span:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
    }
    
    .menu-toggle span:nth-child(3) {
      bottom: 0;
    }
    
    @media (max-width: 768px) {
      .menu-toggle {
        display: block;
      }
      
      nav {
        position: fixed;
        top: 0;
        right: -100%;
        width: 80%;
        max-width: 400px;
        height: 100vh;
        background: var(--background);
        padding: 6rem 2rem 2rem;
        transition: right 0.3s ease;
        border-left: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      nav.open {
        right: 0;
      }
      
      nav ul {
        flex-direction: column;
        gap: 2rem;
      }
      
      .menu-toggle.open span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 6px);
      }
      
      .menu-toggle.open span:nth-child(2) {
        opacity: 0;
      }
      
      .menu-toggle.open span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -6px);
      }
    }
  </style>