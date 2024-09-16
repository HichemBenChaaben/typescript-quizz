<template>
  <div class="w-full m-6 p-4 border border-solid-1 border-gray-100 rounded-lg text-sm shadow-md">
    <h2 class="text-2xl font-semibold capitalize">{{ markdown?.title }}</h2>
    <div
      class="p-2 m-2"
      v-if="markdown?.codeBlock"
      v-html="
        $props.highlighter.codeToHtml(markdown?.codeBlock, {
          lang: 'typescript',
          theme: 'light-plus'
        })
      "
    ></div>
    <ul class="p-0 m-0">
      <li class="p-0 m-0" v-for="(answer, key) in markdown?.suggestions" :key="key">
        <button
          :disabled="!!selectedAnswer"
          @click="handleClick(key as unknown as string, markdown?.answer as string)"
          class="p-2 m-2 bg-slate border-solid border-1 border-gray-400 bg-slate-50 w-full hover:bg-slate-100 hover:cursor-pointer"
          :class="
            handleClickAnswer(
              key as unknown as string,
              markdown?.answer as string,
              selectedAnswer as string
            )
          "
        >
          {{ key }} : <code>{{ answer }}</code>
        </button>
      </li>
    </ul>
    <button
      class="py-4 mr-2 ml-2 disabled:opacity-30 flex w-full"
      :disabled="!selectedAnswer"
      @click="() => (showAnswer = !showAnswer)"
    >
      <span class="font-semibold">{{ showAnswer ? 'hide explanation' : 'show explanation' }}</span>
    </button>
    <div
      class="p-4 bg-blue-50 border border-blue-100 rounded-sm text-blue-800"
      v-if="showAnswer === true"
    >
      <code>{{ markdown?.explanation.replace(/^#### Answer: [A-D]\s*/, '') }}</code>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import useScoreStore from '@/store/score'

interface Markdown {
  title: string
  codeBlock: string
  suggestions: Record<string, string>[]
  answer: string
  explanation: string
}
const props = defineProps(['question', 'highlighter'])
const emits = defineEmits(['celebrate'])
const store = useScoreStore()
const showAnswer = ref<boolean>(false)

const markdown = ref<Markdown | null>(null)
const selectedAnswer = ref<string | null>(null)

onMounted(() => {
  markdown.value = parseMarkdown(props.question, props.highlighter) as Markdown
})

const handleClick = (key: string, answer: string) => {
  selectedAnswer.value = key
  key === answer ? store.increaseCorrectAnswers() : store.increaseInCorrectAnswers()
}

const handleClickAnswer = (key: string, answer: string, selectedAnswer: string) => {
  if (!selectedAnswer) return ''
  if (key === answer) {
    emits('celebrate')
    return 'correct' // Correct answer
  }
  if (key === selectedAnswer) {
    showAnswer.value = true;
    return 'incorrect' // Wrong answer
  }
  return '' // No styling if neither condition matches
}

function parseMarkdown(markdown: string, highlighter: (code: string) => void) {
  if (!highlighter) {
    return false
  }
  // Extract the question title
  const titleMatch = markdown.match(/######\s(.*)\n/)
  const title = titleMatch ? titleMatch[1].trim() : null

  // Extract the block of code
  const codeBlockMatch = markdown.match(/```typescript\n([\s\S]*?)\n```/)
  const codeBlock = codeBlockMatch ? codeBlockMatch[1].trim() : null

  // Extract the suggestions (choices) as key-value pairs
  const suggestionsMatch = markdown.match(/- ([A-Z]): `(.*?)`/g)
  const suggestions = suggestionsMatch
    ? suggestionsMatch.reduce((acc, s) => {
        //@ts-ignore
        const [_, key, value] = s.match(/- ([A-Z]): `(.*?)`/)
        //@ts-ignore
        acc[key] = value
        return acc
      }, {})
    : null

  // Extract the answer and explanation
  const answerMatch = markdown.match(
    /<summary><b>Answer<\/b><\/summary>\n<p>\n\n#### Answer: ([A-Z])/
  )
  const answer = answerMatch ? answerMatch[1] : null

  const explanationMatch = markdown.match(/<\/summary>\n<p>\n\n([\s\S]*?)<\/p>/)
  const explanation = explanationMatch ? explanationMatch[1].trim() : null

  return {
    title,
    codeBlock,
    suggestions,
    answer,
    explanation
  }
}
</script>

<style scoped>
.correct {
  background-color: aquamarine;
}
.incorrect {
  background-color: indianred;
}
</style>
