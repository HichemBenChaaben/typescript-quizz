<template>
  <div class="w-full" v-for="(question, index) in data" :key="index">
    <QuestionCard :question="question" @celebrate="triggerConfetti" :highlighter="highlighter" />
  </div>
</template>

<script setup lang="ts">
import getQuestions from '@/api/getQuestions'
import { ref, onMounted, nextTick } from 'vue'
import QuestionCard from './QuestionCard.vue'
import useScoreStore from '@/store/score'

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
