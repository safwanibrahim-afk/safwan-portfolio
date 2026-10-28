<script setup>

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Draggable} from "gsap/Draggable";
import {InertiaPlugin} from "gsap/InertiaPlugin";
import {Observer} from "gsap/Observer";

gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin, Observer);

const portfolioData = await usePortfolio(true);

let proxy = null;
let animation = null;
let wheelObserver = null;
let isInteracting = false;
let wrapWidth = 0;
let widestCardWidth = 0;
let animationFrameId;

onMounted(() => {
  // Wait 500ms for images and layout to fully render before starting the slider
  setTimeout(() => {
    const cardsContainer = document.querySelector(".cards");
    if (!cardsContainer) return;

    const cards = gsap.utils.toArray(".card");
    if (cards.length === 0) return;

    widestCardWidth = Math.max(...cards.map((card) => card.offsetWidth));
    wrapWidth = cards.reduce((acc, card) => acc + card.offsetWidth, 0) + (cards.length * 5);

    if (wrapWidth === 0) return;

    let position = 0;
    cards.forEach((card) => {
      gsap.set(card, { x: position, left: -widestCardWidth });
      position += card.offsetWidth + 5;
    });

    proxy = document.createElement("div");
    gsap.set(proxy, { x: 0 });

    animation = gsap.to(cards, {
      x: "+=" + wrapWidth,
      ease: "none",
      paused: true,
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % wrapWidth),
      },
    });

    Draggable.create(proxy, {
      type: "x",
      trigger: cardsContainer,
      inertia: true,
      onPress: () => {
        isInteracting = true;
      },
      onRelease: () => {
        isInteracting = false;
      },
      onThrowComplete: updateAnimation,
      onDrag: updateAnimation,
      onThrowUpdate: updateAnimation,
    });

    const wrapProgress = gsap.utils.wrap(0, 1);

    function updateAnimation() {
      const x = gsap.getProperty(proxy, "x");
      if (x !== undefined && !isNaN(Number(x))) {
        animation.progress(wrapProgress((Number(x) + widestCardWidth) / wrapWidth));
      }
    }

    wheelObserver = Observer.create({
      type: "wheel",
      onWheel: (self) => {
        gsap.to(proxy, {
          x: "+=" + (self.deltaY < 0 ? 1200 : -1200),
          onUpdate: updateAnimation,
          ease: "power1.out",
          duration: 0.5,
        });
      },
      onWheelStart: () => {
        isInteracting = true;
      },
      onWheelEnd: () => {
        isInteracting = false;
      },
      preventDefault: true,
    });

    function updatePosition() {
      if (!isInteracting && proxy) {
        const currentX = parseFloat(gsap.getProperty(proxy, "x")) || 0;
        const newX = currentX - 1.5; // Auto-slide speed
        gsap.set(proxy, { x: newX % wrapWidth });
        updateAnimation();
      }
      animationFrameId = requestAnimationFrame(updatePosition);
    }

    // Initialize and start the auto-slide loop
    updateAnimation();
    animationFrameId = requestAnimationFrame(updatePosition);

  }, 500);
});

onUnmounted(() => {
  if (wheelObserver) wheelObserver.kill();
  if (animation) animation.kill();
  if (proxy && Draggable.get(proxy)) Draggable.get(proxy).kill();
  cancelAnimationFrame(animationFrameId);
});

</script>

<template>
  <section class="page" style="overflow: hidden">
    <template v-if="portfolioData">
      <section id="explore-slider">
        <ul class="cards">
          <li class="card" v-for="(portfolioItem, index) in portfolioData" :key="index">
            <ProjectCover :aria-posinset="index" :aria-setsize="portfolioData.length" :portfolioItem="portfolioItem" :index="index"/>
          </li>
        </ul>
      </section>
    </template>
  </section>
</template>

<style scoped lang="scss">

.page-leave-active {
  transition: all 0.6s;
}

.page-enter-active {
  transition: none;
}

#explore-slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: slider-rotation 12s ease-in-out infinite alternate;

  @media screen and (max-width: 768px) {
    margin-bottom: 100px;
    animation: none;
  }
}

.cards {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  height: 100%;
  gap: 8px;
}

.card {
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  left: 0;
}

@keyframes slider-rotation {
  0% {
    transform: rotate3d(0, 0, 1, -3deg);
  }
  100% {
    transform: rotate3d(0, 0, 1, 3deg);
  }
}

</style>