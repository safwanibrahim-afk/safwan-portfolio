<template>
  <section class="page">
    <div class="container-xxxl">

      <div class="row mt-5">
        <div class="col-auto">
          <!-- White initials -->
          <div style="font-size: 40px; font-weight: bold; color: white; font-family: 'Inter', sans-serif;">SI</div>
        </div>
      </div>

      <!-- Hero-->
      <div class="row gx-6 mt-5 mt-lg-6">
        <div class="col-12 col-lg-4">
          <CodeTag class="mb-2 mb-lg-3">{{ currentPortfolioItem['type'] }}</CodeTag>
          <!-- White Title -->
          <h1 class="mb-5 mb-lg-8 project__name" style="color: white !important;"> {{ currentPortfolioItem['title'] }} </h1>
          <!-- White Back Button -->
          <NuxtLink class="back-link mouse-md mb-5 mb-lg-0" to="/explore" style="color: white;">
            <i class="fa-sharp fa-solid fa-arrow-up-left fa-2x pe-3"></i>Back
          </NuxtLink>
        </div>
        <div class="col">
          <!-- Removed data-aos so the image shows instantly -->
          <img class="mouse-md w-100 rounded" :src="currentPortfolioItem['cover'] || currentPortfolioItem['featuredImage']">
        </div>
      </div>

      <div class="row mt-5 mt-lg-8 mt-xl-7 gx-6 gx-xl-8 pb-3">
        <!-- Sidebar -->
        <div class="col-12 col-lg-4 order-2 order-lg-1 pt-6 pt-lg-0">
          <!-- Black Sidebar Text -->
          <aside class="ps-0 ps-lg-6 mb-5 mb-lg-0" style="position: sticky; top: 60px; color: black;">
            <h3 class="mb-5" data-aos="fade-up" style="color: black;">{{ currentPortfolioItem['title'] }}</h3>
            
            <dl class="mb-5 d-block" data-aos="fade-up" style="color: black;">
              <dt v-if="currentPortfolioItem['role']">Role</dt>
              <dd v-if="currentPortfolioItem['role']"> {{ currentPortfolioItem['role']}} </dd>

              <dt class="mt-4" v-if="currentPortfolioItem['completed']">Completed</dt>
              <dd v-if="currentPortfolioItem['completed']"> {{ currentPortfolioItem['completed']}} </dd>
            </dl>
            
            <!-- "Bubble" Button styling linking to LinkedIn -->
            <a href="https://www.linkedin.com/in/safwan-ibrahim" target="_blank" style="display: inline-block; padding: 12px 30px; background: black; color: white; border-radius: 50px; text-decoration: none; font-weight: bold; transition: all 0.3s ease;">
              <i class="fa-brands fa-linkedin" style="margin-right: 8px;"></i> Contact Me
            </a>
          </aside>
        </div>

        <!-- Main Content -->
        <main class="col-12 col-lg-8 order-1 order-lg-2">
          <div class="col-12 col-lg-11 col-xl-10">
            <CodeLine :number="'//'" class="mb-5 mb-lg-4">
              <span class="code--yellow">npm</span>
              <span class="code--green">&nbsp;run</span>
              <span class="code--white">&nbsp;case_study</span>
            </CodeLine>
            <!-- Black Subtitle -->
            <h2 class="mb-4 mb-lg-5" data-aos="fade-up" style="color: black !important;">{{ currentPortfolioItem['lead'] }}</h2>
          </div>
          
          <!-- Black Description Text -->
          <div class="project-description" style="color: #000000 !important; font-size: 1.15rem; line-height: 1.8; white-space: pre-line; margin-top: 2rem;">
            {{ currentPortfolioItem['description'] }}
          </div>
        </main>
      </div>

    </div>
  </section>
</template>

<script setup>

const route = useRoute();
const portfolioData = await usePortfolio();

const currentPortfolioItem = computed(() => {
  return portfolioData.value[portfolioData.value.findIndex(project => project["slug"] === route.params["slug"][0])];
});

useHead({
  title: 'Case Study: ' + currentPortfolioItem.value['title'] + ' | Safwan Ibrahim',
  meta: [
    { hid: 'description', name: 'description', content:  currentPortfolioItem.value['lead'] },
    { hid: 'og:title', property: 'og:title', content: currentPortfolioItem.value['title'] },
  ],
  bodyAttrs: {
    class: 'enable-scroll'
  }
});

</script>

<style lang="scss" scoped>

img {
  aspect-ratio: 16/9;
  object-fit: cover;
  box-shadow: rgba(0,0,0,0.2) 0 60px 15px -40px, rgba(0,0,0,0.06) 0 4px 6px -2px;
  border-radius: 8px;
  min-height: 300px; /* Force height so it doesn't collapse if loading */
  background-color: #1a1a1a; /* Dark background so it looks good while loading */
}

.project-description {
  width: 100%;
  max-width: 800px;
}

</style>