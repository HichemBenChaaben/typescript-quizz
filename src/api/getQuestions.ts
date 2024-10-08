function parseQuestions(text: string) {
  const unparsed = text.split(/(?=#{6} [1-9])/).slice(1)
  return unparsed
}

export default async function getQuestions() {
  const url =
    'https://raw.githubusercontent.com/HichemBenChaaben/typescript-quizz/master/src/assets/easy-questions.md'
  let questions = []
  try {
    const response = await fetch(url)
    const responseText = await response.text()
    const parsedQuestions = parseQuestions(responseText)
    questions = parsedQuestions
    return questions
  } catch (error) {
    console.log(error)
  }
}
