<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import Header from '../components/Header.vue'
import Loader from '../components/Loader.vue'
</script>

<template>
  <nav class="sticky top-0 left-0 h-6 m-0 w-full z-10">
    <Header />
  </nav>
  <main class="container">
    <Suspense>
      <div class="transition ease-in-out duration-300 transform">
        <TheWelcome />
      </div>
      <template #fallback>
        <div class="h-[700px] mt-[200px] flex justify-center">
          <Loader />
        </div>
      </template>
    </Suspense>
  </main>
</template>
