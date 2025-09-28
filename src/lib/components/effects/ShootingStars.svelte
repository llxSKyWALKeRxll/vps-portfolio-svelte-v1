<!-- src/lib/components/effects/ShootingStars.svelte -->
<div class="shooting-stars" aria-hidden="true">
  {#each Array(50) as _, i}
    <div class="star star-{i}"></div>
  {/each}
</div>

<style>
  .shooting-stars {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
  }

  .star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: rgba(173, 216, 230, 0.8);
    border-radius: 50%;
    animation: shooting-star linear infinite;
  }

  .star::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 1px;
    background: linear-gradient(90deg, rgba(173, 216, 230, 0), rgba(173, 216, 230, 0.8));
    transform: translateX(2px);
    animation: shooting-tail linear infinite;
  }

  /* Individual star variations */
  .star-0 { top: 10%; left: -10px; animation-duration: 3s; animation-delay: 0s; }
  .star-1 { top: 15%; left: -10px; animation-duration: 4s; animation-delay: 0.5s; }
  .star-2 { top: 25%; left: -10px; animation-duration: 2.5s; animation-delay: 1s; }
  .star-3 { top: 35%; left: -10px; animation-duration: 3.5s; animation-delay: 1.5s; }
  .star-4 { top: 45%; left: -10px; animation-duration: 2.8s; animation-delay: 2s; }
  .star-5 { top: 55%; left: -10px; animation-duration: 3.2s; animation-delay: 2.5s; }
  .star-6 { top: 5%; left: -10px; animation-duration: 4.2s; animation-delay: 3s; }
  .star-7 { top: 65%; left: -10px; animation-duration: 2.7s; animation-delay: 3.5s; }
  .star-8 { top: 75%; left: -10px; animation-duration: 3.8s; animation-delay: 4s; }
  .star-9 { top: 20%; left: -10px; animation-duration: 3.1s; animation-delay: 4.5s; }
  .star-10 { top: 30%; left: -10px; animation-duration: 2.9s; animation-delay: 5s; }
  .star-11 { top: 40%; left: -10px; animation-duration: 3.6s; animation-delay: 5.5s; }
  .star-12 { top: 50%; left: -10px; animation-duration: 2.6s; animation-delay: 6s; }
  .star-13 { top: 60%; left: -10px; animation-duration: 3.4s; animation-delay: 6.5s; }
  .star-14 { top: 70%; left: -10px; animation-duration: 4.1s; animation-delay: 7s; }
  .star-15 { top: 80%; left: -10px; animation-duration: 2.4s; animation-delay: 7.5s; }
  .star-16 { top: 12%; left: -10px; animation-duration: 3.7s; animation-delay: 8s; }
  .star-17 { top: 22%; left: -10px; animation-duration: 2.3s; animation-delay: 8.5s; }
  .star-18 { top: 32%; left: -10px; animation-duration: 3.3s; animation-delay: 9s; }
  .star-19 { top: 42%; left: -10px; animation-duration: 4.3s; animation-delay: 9.5s; }
  .star-20 { top: 52%; left: -10px; animation-duration: 2.2s; animation-delay: 10s; }
  .star-21 { top: 62%; left: -10px; animation-duration: 3.9s; animation-delay: 10.5s; }
  .star-22 { top: 72%; left: -10px; animation-duration: 2.8s; animation-delay: 11s; }
  .star-23 { top: 82%; left: -10px; animation-duration: 3.5s; animation-delay: 11.5s; }
  .star-24 { top: 8%; left: -10px; animation-duration: 2.7s; animation-delay: 12s; }
  .star-25 { top: 18%; left: -10px; animation-duration: 4.4s; animation-delay: 0.2s; }
  .star-26 { top: 28%; left: -10px; animation-duration: 3.1s; animation-delay: 0.7s; }
  .star-27 { top: 38%; left: -10px; animation-duration: 2.5s; animation-delay: 1.2s; }
  .star-28 { top: 48%; left: -10px; animation-duration: 3.8s; animation-delay: 1.7s; }
  .star-29 { top: 58%; left: -10px; animation-duration: 2.9s; animation-delay: 2.2s; }
  .star-30 { top: 68%; left: -10px; animation-duration: 3.6s; animation-delay: 2.7s; }
  .star-31 { top: 78%; left: -10px; animation-duration: 2.4s; animation-delay: 3.2s; }
  .star-32 { top: 14%; left: -10px; animation-duration: 4.1s; animation-delay: 3.7s; }
  .star-33 { top: 24%; left: -10px; animation-duration: 3.2s; animation-delay: 4.2s; }
  .star-34 { top: 34%; left: -10px; animation-duration: 2.6s; animation-delay: 4.7s; }
  .star-35 { top: 44%; left: -10px; animation-duration: 3.7s; animation-delay: 5.2s; }
  .star-36 { top: 54%; left: -10px; animation-duration: 2.8s; animation-delay: 5.7s; }
  .star-37 { top: 64%; left: -10px; animation-duration: 3.4s; animation-delay: 6.2s; }
  .star-38 { top: 74%; left: -10px; animation-duration: 4.2s; animation-delay: 6.7s; }
  .star-39 { top: 84%; left: -10px; animation-duration: 2.3s; animation-delay: 7.2s; }
  .star-40 { top: 6%; left: -10px; animation-duration: 3.5s; animation-delay: 7.7s; }
  .star-41 { top: 16%; left: -10px; animation-duration: 2.7s; animation-delay: 8.2s; }
  .star-42 { top: 26%; left: -10px; animation-duration: 3.9s; animation-delay: 8.7s; }
  .star-43 { top: 36%; left: -10px; animation-duration: 2.5s; animation-delay: 9.2s; }
  .star-44 { top: 46%; left: -10px; animation-duration: 4.3s; animation-delay: 9.7s; }
  .star-45 { top: 56%; left: -10px; animation-duration: 3.1s; animation-delay: 10.2s; }
  .star-46 { top: 66%; left: -10px; animation-duration: 2.9s; animation-delay: 10.7s; }
  .star-47 { top: 76%; left: -10px; animation-duration: 3.6s; animation-delay: 11.2s; }
  .star-48 { top: 86%; left: -10px; animation-duration: 2.4s; animation-delay: 11.7s; }
  .star-49 { top: 2%; left: -10px; animation-duration: 4.5s; animation-delay: 12.2s; }

  .star-0::before { animation-duration: 3s; animation-delay: 0s; width: 60px; }
  .star-1::before { animation-duration: 4s; animation-delay: 0.5s; width: 80px; }
  .star-2::before { animation-duration: 2.5s; animation-delay: 1s; width: 50px; }
  .star-3::before { animation-duration: 3.5s; animation-delay: 1.5s; width: 70px; }
  .star-4::before { animation-duration: 2.8s; animation-delay: 2s; width: 55px; }
  .star-5::before { animation-duration: 3.2s; animation-delay: 2.5s; width: 65px; }
  .star-6::before { animation-duration: 4.2s; animation-delay: 3s; width: 85px; }
  .star-7::before { animation-duration: 2.7s; animation-delay: 3.5s; width: 54px; }
  .star-8::before { animation-duration: 3.8s; animation-delay: 4s; width: 76px; }
  .star-9::before { animation-duration: 3.1s; animation-delay: 4.5s; width: 62px; }
  .star-10::before { animation-duration: 2.9s; animation-delay: 5s; width: 58px; }
  .star-11::before { animation-duration: 3.6s; animation-delay: 5.5s; width: 72px; }
  .star-12::before { animation-duration: 2.6s; animation-delay: 6s; width: 52px; }
  .star-13::before { animation-duration: 3.4s; animation-delay: 6.5s; width: 68px; }
  .star-14::before { animation-duration: 4.1s; animation-delay: 7s; width: 82px; }
  .star-15::before { animation-duration: 2.4s; animation-delay: 7.5s; width: 48px; }
  .star-16::before { animation-duration: 3.7s; animation-delay: 8s; width: 74px; }
  .star-17::before { animation-duration: 2.3s; animation-delay: 8.5s; width: 46px; }
  .star-18::before { animation-duration: 3.3s; animation-delay: 9s; width: 66px; }
  .star-19::before { animation-duration: 4.3s; animation-delay: 9.5s; width: 86px; }
  .star-20::before { animation-duration: 2.2s; animation-delay: 10s; width: 44px; }
  .star-21::before { animation-duration: 3.9s; animation-delay: 10.5s; width: 78px; }
  .star-22::before { animation-duration: 2.8s; animation-delay: 11s; width: 56px; }
  .star-23::before { animation-duration: 3.5s; animation-delay: 11.5s; width: 70px; }
  .star-24::before { animation-duration: 2.7s; animation-delay: 12s; width: 54px; }
  .star-25::before { animation-duration: 4.4s; animation-delay: 0.2s; width: 88px; }
  .star-26::before { animation-duration: 3.1s; animation-delay: 0.7s; width: 62px; }
  .star-27::before { animation-duration: 2.5s; animation-delay: 1.2s; width: 50px; }
  .star-28::before { animation-duration: 3.8s; animation-delay: 1.7s; width: 76px; }
  .star-29::before { animation-duration: 2.9s; animation-delay: 2.2s; width: 58px; }
  .star-30::before { animation-duration: 3.6s; animation-delay: 2.7s; width: 72px; }
  .star-31::before { animation-duration: 2.4s; animation-delay: 3.2s; width: 48px; }
  .star-32::before { animation-duration: 4.1s; animation-delay: 3.7s; width: 82px; }
  .star-33::before { animation-duration: 3.2s; animation-delay: 4.2s; width: 64px; }
  .star-34::before { animation-duration: 2.6s; animation-delay: 4.7s; width: 52px; }
  .star-35::before { animation-duration: 3.7s; animation-delay: 5.2s; width: 74px; }
  .star-36::before { animation-duration: 2.8s; animation-delay: 5.7s; width: 56px; }
  .star-37::before { animation-duration: 3.4s; animation-delay: 6.2s; width: 68px; }
  .star-38::before { animation-duration: 4.2s; animation-delay: 6.7s; width: 84px; }
  .star-39::before { animation-duration: 2.3s; animation-delay: 7.2s; width: 46px; }
  .star-40::before { animation-duration: 3.5s; animation-delay: 7.7s; width: 70px; }
  .star-41::before { animation-duration: 2.7s; animation-delay: 8.2s; width: 54px; }
  .star-42::before { animation-duration: 3.9s; animation-delay: 8.7s; width: 78px; }
  .star-43::before { animation-duration: 2.5s; animation-delay: 9.2s; width: 50px; }
  .star-44::before { animation-duration: 4.3s; animation-delay: 9.7s; width: 86px; }
  .star-45::before { animation-duration: 3.1s; animation-delay: 10.2s; width: 62px; }
  .star-46::before { animation-duration: 2.9s; animation-delay: 10.7s; width: 58px; }
  .star-47::before { animation-duration: 3.6s; animation-delay: 11.2s; width: 72px; }
  .star-48::before { animation-duration: 2.4s; animation-delay: 11.7s; width: 48px; }
  .star-49::before { animation-duration: 4.5s; animation-delay: 12.2s; width: 90px; }

  @keyframes shooting-star {
    0% {
      transform: translateX(-100px) translateY(-100px);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateX(100vw) translateY(100vh);
      opacity: 0;
    }
  }

  @keyframes shooting-tail {
    0% {
      width: 0;
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .star {
      animation-duration: 2s !important;
    }
    .star::before {
      width: 30px !important;
      animation-duration: 2s !important;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .star,
    .star::before {
      animation: none !important;
    }
  }
</style>