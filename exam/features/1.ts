import router from '@adonisjs/core/services/router'
import Exam from '../app/models/exam.ts'
import Question, { QuestionType } from '../app/models/question.ts'

const exams: Exam[] = []

router.post('/authoring/exams', async ({ request }) =>
{
    const body = request.body()
    const exam = new Exam()

    exam.id = exams.length + 1
    exam.title = body.title ?? "(null)"
    exam.lesson_related_id = body.lesson_related_id ?? -1
    exam.questions = []
    exams.push(exam)
    return (exam)
})

router.post('/authoring/exams/:id/questions', async({request, params}) =>
{
    const examId = Number(params.id)
    const body = request.body()
    const exam = exams.find(e => e.id === examId)
    const question = new Question()

    if (!exam)
    {
        console.error("/features/exam_authoring.ts:27: could not find exam " + examId)
        return { error: "Exam not found"}
    }
    question.id = exam.questions.length + 1
    question.title = body.title
    question.question_type = body.question_type ?? QuestionType.DEFAULT
    question.good_answers = body.good_answers
    switch (question.question_type)
    {
        case (QuestionType.MCQ):
            question.bad_answers = body.bad_answers
            break
        case (QuestionType.TEXT):
            question.bad_answers = []
            break
        case (QuestionType.TRUE_FALSE):
            question.bad_answers = body.bad_answers
            break
        default:
            question.bad_answers = []
    }
    exam.questions.push(question)
    return (exam)
})