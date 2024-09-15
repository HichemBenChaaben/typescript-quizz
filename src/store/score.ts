import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Score {
  correctAnswers: number
  incorrectAnswers: number
  totalQuestions: number
}

const useScoreStore = defineStore('score', () => {
  const initialScore = {
    correctAnswers: 0,
    incorrectAnswers: 0,
    totalQuestions: 140
  }
  const score = ref<Score>(initialScore)
  const setTotalQuestions = (total: number) => {
    score.value.totalQuestions = total
  }
  const increaseCorrectAnswers = () => {
    score.value.correctAnswers = score.value.correctAnswers + 1
  }
  const increaseInCorrectAnswers = () => {
    score.value.incorrectAnswers = score.value.incorrectAnswers + 1
  }
  return {
    score,
    setTotalQuestions,
    increaseCorrectAnswers,
    increaseInCorrectAnswers
  }
})

export default useScoreStore
