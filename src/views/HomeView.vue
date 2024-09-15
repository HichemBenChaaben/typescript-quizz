<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import Header from '../components/Header.vue'
</script>

<template>
  <nav class="sticky top-0 left-0 h-6 m-0 w-full">
    <Header />
  </nav>
  <main class="container">
    <Suspense>
      <!-- component with nested async dependencies -->
      <TheWelcome />

      <!-- loading state via #fallback slot -->
      <template #fallback> Loading... </template>
    </Suspense>
  </main>
</template>
