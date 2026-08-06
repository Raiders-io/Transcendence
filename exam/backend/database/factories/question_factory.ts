import factory from '@adonisjs/lucid/factories'
import Question from '#models/question'


//Reminder:
// question_type: "DEFAULT" | "MCQ" | "TEXT" | "TRUE_FALSE"


export const QuestionFactory = factory
  .define(Question, async ({ faker }) => 
    {
      return {
        title: faker.lorem.sentence(),
        question_type: Question.randomQuestionType(),
        good_answers: JSON.stringify([faker.lorem.sentence()]),
        bad_answers: JSON.stringify([faker.lorem.sentence()])
      }
})
  .build()