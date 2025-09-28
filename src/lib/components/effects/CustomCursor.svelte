<!-- src/lib/components/effects/CustomCursor.svelte -->
<script>
  import { onMount } from 'svelte';

  let cursorDot;
  let cursorOutline;
  let mouseX = 0;
  let mouseY = 0;
  let outlineX = 0;
  let outlineY = 0;
  let isHovering = false;
  let isClicking = false;

  onMount(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Update dot position immediately
      if (cursorDot) {
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
      }
    };

    const handleMouseDown = () => {
      isClicking = true;
    };

    const handleMouseUp = () => {
      isClicking = false;
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (target.matches('a, button, .clickable, .primary-button, .outline-button, .fact-item')) {
        isHovering = true;
      }
    };

    const handleMouseLeave = (e) => {
      const target = e.target;
      if (target.matches('a, button, .clickable, .primary-button, .outline-button, .fact-item')) {
        isHovering = false;
      }
    };

    // Smooth animation for outline cursor
    const animateOutline = () => {
      const speed = 0.15;
      outlineX += (mouseX - outlineX) * speed;
      outlineY += (mouseY - outlineY) * speed;

      if (cursorOutline) {
        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';
      }

      requestAnimationFrame(animateOutline);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    animateOutline();

    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  });
</script>

<!-- Cursor dot (small, follows mouse immediately) -->
<div
  bind:this={cursorDot}
  class="cursor-dot"
  class:hovering={isHovering}
  class:clicking={isClicking}
></div>

<!-- Cursor outline (larger, follows with delay) -->
<div
  bind:this={cursorOutline}
  class="cursor-outline"
  class:hovering={isHovering}
  class:clicking={isClicking}
></div>

<style>
  .cursor-dot {
    width: 6px;
    height: 6px;
    background: rgba(173, 216, 230, 0.9);
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease, background-color 0.2s ease;
    box-shadow: 0 0 10px rgba(173, 216, 230, 0.5);
  }

  .cursor-outline {
    width: 35px;
    height: 35px;
    border: 2px solid rgba(173, 216, 230, 0.4);
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 9998;
    transform: translate(-50%, -50%);
    transition: all 0.15s ease;
  }

  .cursor-dot.hovering {
    transform: translate(-50%, -50%) scale(1.5);
    background: rgba(173, 216, 230, 1);
    box-shadow: 0 0 20px rgba(173, 216, 230, 0.8);
  }

  .cursor-outline.hovering {
    width: 50px;
    height: 50px;
    border-color: rgba(173, 216, 230, 0.8);
    border-width: 3px;
  }

  .cursor-dot.clicking {
    transform: translate(-50%, -50%) scale(0.8);
    background: rgba(255, 255, 255, 0.9);
  }

  .cursor-outline.clicking {
    width: 25px;
    height: 25px;
    border-color: rgba(255, 255, 255, 0.6);
  }

  /* Hide custom cursor on touch devices */
  @media (hover: none) and (pointer: coarse) {
    .cursor-dot,
    .cursor-outline {
      display: none;
    }
  }

  /* Hide custom cursor when user prefers reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .cursor-dot,
    .cursor-outline {
      display: none;
    }
  }
</style>