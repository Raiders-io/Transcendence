import factory from '@adonisjs/lucid/factories'
import Exam from '#models/exam'

export const ExamFactory = factory
  .define(Exam, async ({ faker }) => {
    return {
      title: faker.lorem.sentence(),
      lesson_related_id: crypto.randomUUID(),
      user_id: faker.number.int({ min: 1, max: 10 })
    }
  })
  .build()