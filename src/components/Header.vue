<template>
  <div
    class="p-4 rounded-md bg-slate-100 font-semibold capitalize text-2xl flex flex-row justify-between container m-auto w-[1024] text-center"
  >
    <div class="text-green-700">correct: {{ score.correctAnswers }}</div>
    <div class="text-red-700">incorrect: {{ score.incorrectAnswers }}</div>
    <div>
      total {{ score.correctAnswers + score.incorrectAnswers }} / {{ score.totalQuestions }}
    </div>
  </div>
</template>
<script setup lang="ts">
import useScoreStore from '@/store/score'
import { storeToRefs } from 'pinia'

const store = useScoreStore()
const { score } = storeToRefs(store)
</script>
