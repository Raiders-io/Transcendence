import Question from './question.ts'

export default class Exam
{
    id: number;
    title: string;
    lesson_related_id: number;
    questions: Question[];

    constructor()
    {
        this.id = -1;
        this.title = "(null)";
        this.lesson_related_id = -1;
        this.questions = [];
    }
}