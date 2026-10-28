<template>
  <div class="bottom-bar row pb-2 pb-md-3 align-items-end d-flex justify-content-between" style="z-index: 999; position: relative;">
    
    <!-- Left Side: Profile photo and Name inside the Glass Box -->
    <NuxtLink to="/about" class="col-auto profile-card text-decoration-none mouse-md" itemscope itemtype="https://schema.org/Person">
      <div class="d-flex align-items-center">
        
        <!-- Your photo -->
        <img src="/images/safwan.jpeg" alt="Safwan Ibrahim" class="profile-photo">
        
        <h1 class="bottom-navigation__title ms-3 mb-0">
          <span itemprop="name">Safwan Ibrahim</span><br>
          <span itemprop="jobTitle">Backend Developer</span>
        </h1>
      </div>
    </NuxtLink>
    
    <!-- Right Side: Status and Social Icons -->
    <div class="col-auto mb-3 d-flex flex-column align-items-end">
      
      <!-- Auto-updating status text -->
      <StatusIndicator class="mb-2"/>
      
      <!-- Social Links -->
      <div class="d-flex gap-3 mt-1" style="color: white;">
        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/safwan-ibrahim" target="_blank" class="social-icon" aria-label="LinkedIn" style="color: white !important;">
          <i class="fa-brands fa-linkedin fa-xl"></i>
        </a>
        
        <!-- GitHub -->
        <a href="https://github.com/safwanibrahim-afk" target="_blank" class="social-icon" aria-label="GitHub" style="color: white !important;">
          <i class="fa-brands fa-github fa-xl"></i>
        </a>
        
        <!-- Email -->
        <a href="mailto:safwan.ibrahim11@gmail.com" class="social-icon" aria-label="Email" style="color: white !important;">
          <i class="fa-solid fa-envelope fa-xl"></i>
        </a>
      </div>
      
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.bottom-bar{
  &:after{
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 200px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
    z-index: -1;
    opacity: 1;
    transition: opacity 0.5s ease;
  }
}

/* The glass box for your profile */
.profile-card {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  
  /* CHANGED: Transparent white background instead of black */
  background: rgba(255, 255, 255, 0.15); 
  
  /* Pure solid white border */
  border: 2px solid #ffffff; 
  
  border-radius: 12px;
  backdrop-filter: blur(10px); /* Keeps the frosted glass effect */
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.1); 
  
  &:hover {
    /* CHANGED: Slightly brighter transparent white on hover */
    background: rgba(255, 255, 255, 0.25); 
    transform: translateY(-3px); 
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3); 
  }
}

/* Styling for your photo */
.profile-photo {
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 50%; 
  border: 2px solid #ffffff; 
}

.bottom-navigation__title {
  display: block;
  color: white;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: 0.2px;

  span {
    color: white;
    /* Added a tiny text shadow so the white text stays readable over the white glass */
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3); 

    &:last-child {
      color: #f0f0f0; /* Softer white */
      font-weight: 400;
      font-size: 0.85rem;
    }
  }
}

.social-icon {
  transition: transform 0.3s ease, color 0.3s ease;
  
  &:hover {
    color: #EBD571 !important; /* Turns gold on hover */
    transform: translateY(-3px);
  }
}
</style>