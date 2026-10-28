<template>
  <section class="page">
    <div class="container-xxxl">
      <div class="row mt-0 mt-lg-6">
        <main class="d-flex flex-column" itemscope itemtype="https://schema.org/Person">
          <div class="col-12 col-md-8 col-lg-7 col-xl-6 col-xxl-5 mb-4">
            <NuxtLink class="back-link mouse-md mt-4 mt-lg-0 mb-5 mb-lg-0 d-block text-end text-md-start" to="/explore">Back<i
                class="fa-sharp fa-solid fa-arrow-up-right fa-2x ps-3"></i></NuxtLink>
            <CodeTag class="mt-5 mb-5 d-none d-lg-block">about</CodeTag>
            
            <div class="d-flex flex-row align-items-center mb-5">
              <img src="/images/safwan.jpeg" alt="Safwan Ibrahim" class="headshot me-4 me-lg-5">
            </div>
            
            <h2 class="my-4" itemprop="description">
              I’m Safwan — a backend developer with 5 years of experience, blending secure architecture with data-driven insights.
            </h2>
            
            <div itemprop="knowsAbout">
              <p>
                I recently graduated with a degree in Software Engineering, but my journey in tech started over five years ago. Since then, I’ve built a strong foundation in backend development, focusing heavily on how systems operate under the surface.
              </p>
              <p>
                I am deeply passionate about <strong>Cybersecurity</strong>, <strong>Data Analytics</strong>, and <strong>Data Management</strong>. I enjoy building secure, reliable applications and analyzing data to find patterns that help businesses make better decisions. My goal is to bridge the gap between secure backend infrastructure and actionable data insights.
              </p>
              <p>
                I’ve worked on a variety of projects; from engineering complex data structures in Java to deploying full-stack applications on AWS. Whether it's safeguarding user data, structuring a database, or building out a backend API, I am always looking for ways to improve system efficiency and security.
              </p>
              <p>
                I’m currently looking for roles where I can apply my skills in backend development, cybersecurity, or data analytics to help a team build something impactful.
              </p>
            </div>
            
            <h3 class="mt-5 mb-4">Core Competencies</h3>
          </div>
          
          <!-- Tech Stack Grid -->
          <div class="col-12 col-md-8 col-lg-7 col-xl-6 col-xxxl-6">
            <div class="tech-grid">
              <div class="tech-card">
                <span class="tech-title">Java</span>
                <span class="tech-desc">Backend & OOP</span>
              </div>
              <div class="tech-card">
                <span class="tech-title">AWS</span>
                <span class="tech-desc">EC2, RDS, S3</span>
              </div>
              <div class="tech-card">
                <span class="tech-title">Cyber Security</span>
                <span class="tech-desc">Threat Handling</span>
              </div>
              <div class="tech-card">
                <span class="tech-title">Data Analytics</span>
                <span class="tech-desc">Insights & Patterns</span>
              </div>
              <div class="tech-card">
                <span class="tech-title">SQL</span>
                <span class="tech-desc">PostgreSQL</span>
              </div>
              <div class="tech-card">
                <span class="tech-title">Python</span>
                <span class="tech-desc">Automation & Data</span>
              </div>
            </div>
          </div>
          
          <div class="col-12 col-md-8 col-lg-7 col-xl-6 col-xxl-5 mb-4 mb-lg-8">
            <h3 class="mt-5 mb-4">Availability</h3>
            <p class="mb-5">
              I am actively looking for full-time opportunities in Backend Development, Cybersecurity, or Data Analytics. If you have a project in mind or want to discuss how I can contribute to your team, don't hesitate to reach out.
            </p>
            
            <!-- Updated Button to link to LinkedIn -->
            <ActionButton to="https://www.linkedin.com/in/safwan-ibrahim" target="_blank" class="mb-6">
              <i class="fa-brands fa-linkedin"></i>
              Contact Me
            </ActionButton>
          </div>
        </main>
      </div>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: 'About Safwan Ibrahim — Backend & Cybersecurity',
  meta: [
    {
      name: 'description',
      content: 'Safwan Ibrahim is a backend developer with 5 years of experience focusing on Cybersecurity, Data Analytics, and secure architecture.'
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

/* Clean Grid for Tech Stack */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 2rem;

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr; /* Stacks on mobile */
  }
}

.tech-card {
  display: flex;
  flex-direction: column;
  background-color: #EBD571; /* Matte gold */
  border: 1px solid #DFC75F; /* Slightly darker gold for the border */
  padding: 16px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    background-color: #F2DF8A; /* Slightly lighter on hover */
    box-shadow: 0 6px 15px rgba(235, 213, 113, 0.4); /* Soft gold glow */
  }
}

.tech-title {
  color: #212A36; /* Dark slate for high contrast */
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: 4px;
}

.tech-desc {
  color: #4a4435; /* Dark warm grey */
  font-size: 0.85rem;
  font-weight: 500;
}

/* Back Button & Headshot */
.back-link {
  color: #212A36;
  position: fixed;
  top: 40px;
  right: 60px;

  @media screen and (max-width: 992px) {
    position: relative;
    top: 0;
    left: 0;
  }
}

.headshot {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);

  @media screen and (max-width: 992px) {
    width: 80px;
    height: 80px;
  }
}

</style>