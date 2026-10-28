<template>
  <section class="page">

    <div class="container-xxxl">
      <div class="row mt-0 mt-lg-6 justify-content-end">
        <div class="col-12 col-md-8 col-lg-7 col-xl-5 col-xxl-4 mb-4">
          <NuxtLink class="back-link mouse-md mt-4 mt-lg-0" to="/explore"><i class="fa-sharp fa-solid fa-arrow-up-left fa-2x pe-3"></i>Back
          </NuxtLink>
          <CodeTag class="mt-5 mb-3">contact</CodeTag>
          <h1 class="mb-4">Let's Connect</h1>
          
          <p class="mb-4">
            I am actively looking for full-time opportunities in Backend Development, Cybersecurity, or Data Analytics. If you have a project in mind, want to discuss how I can contribute to your team, or just want to network, feel free to reach out.
          </p>
          
          <!-- Main Contact Button: LinkedIn -->
          <ActionButton to="https://www.linkedin.com/in/safwan-ibrahim" target="_blank" class="mb-6">
            <i class="fa-brands fa-linkedin"></i>
            Connect on LinkedIn
          </ActionButton>
          
          <hr class="mb-6">
          
          <h3 class="mb-3">Alternate contact options</h3>
          <p class="mb-4">
            You can find my latest code and projects on <a href="https://github.com/safwanibrahim-afk" target="_blank" class="article__followlink mouse-sm">GitHub (@safwanibrahim-afk)</a> or email me directly at <a href="mailto:safwan.ibrahim11@gmail.com" class="mouse-md" style="color: #7A4FEE">safwan.ibrahim11@gmail.com</a>.
          </p>
        </div>
        <div class="col-1 d-none d-xl-block"></div>
      </div>
    </div>

  </section>
</template>

<script setup>

useHead({
  title: 'Contact Safwan Ibrahim | Backend Developer',
  meta: [
    {
      name: 'description',
      content: 'Get in touch with Safwan Ibrahim for Backend Development, Cybersecurity, and Data Analytics opportunities.'
    }
  ],
  bodyAttrs: {
    class: 'enable-scroll fixed-webgl'
  }
});

</script>

<style lang="scss" scoped>

.page-enter-active {
  transition: all 1.4s ease;
  transition-delay: 1.7s;
}

.page-leave-active {
  transition: all 1s;
}

.page-enter-from, .page-leave-to {
  opacity: 0;
}

.back-link {
  color: #212A36;
  position: fixed;
  top: 40px;
  left: 60px;

  @media screen and (max-width: 992px) {
    position: relative;
    top: 0;
    left: 0;
  }
}

.container-xxxl {
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    min-height: unset;
  }
}

</style>