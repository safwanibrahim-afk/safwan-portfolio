<template>
  <div style="min-height: 100vh; background-color: #050016; display: flex; align-items: center; justify-content: center; color: white; font-family: 'Inter', sans-serif; text-align: center; padding: 20px;">
    <div>
      <!-- Your Initials -->
      <h1 style="font-size: 6rem; font-weight: bold; margin-bottom: 1rem; color: #EBD571;">SI</h1>
      
      <h2 style="font-size: 2rem; margin-bottom: 1rem;">404 — Page Not Found</h2>
      
      <p style="font-size: 1.2rem; color: #bdc8e0; max-width: 500px; margin: 0 auto 2rem auto;">
        Oops! The page you are looking for doesn't exist or has been moved. Let's get you back to my portfolio.
      </p>
      
      <!-- Button to go back to the explore page -->
      <button 
        @click="handleError" 
        style="padding: 12px 30px; background: #7A4FEE; color: white; border: none; border-radius: 50px; font-weight: bold; cursor: pointer; font-size: 1.1rem; transition: background 0.3s;"
      >
        Back to Portfolio
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})

// This sends them directly to your projects when they click the button
const handleError = () => clearError({ redirect: '/explore' })
</script>
