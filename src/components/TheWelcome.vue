<template>
  <div class="container m-auto w-[1024]">
    <!-- <div>
      <ConfettiExplosion :particleCount="200" :force="0.3" v-if="visible" />
    </div> -->
    <div class="w-full" v-for="(question, index) in data" :key="index">
      <QuestionCard :question="question" @celebrate="triggerConfetti" :highlighter="highlighter" />
    </div>
  </div>
</template>

<script setup lang="ts">
import getQuestions from '@/api/getQuestions'
import { ref, onMounted, nextTick } from 'vue'
import QuestionCard from './QuestionCard.vue'
import useScoreStore from '@/store/score'
import ConfettiExplosion from 'vue-confetti-explosion'

import { createHighlighter } from 'shiki'

const highlighter = await createHighlighter({
  themes: ['vitesse-dark'],
  langs: ['typescript']
})

await highlighter.loadTheme(import('shiki/themes/light-plus.mjs'))

const data = ref()
const store = useScoreStore()
const visible = ref(false)
onMounted(async () => {
  const response = await getQuestions()
  data.value = response
  store.setTotalQuestions(data.value.length)
})
const explode = async () => {
  visible.value = false
  await nextTick()
  visible.value = true
}
const triggerConfetti = async () => {
  await explode()
}
</script>
