export enum QuestionType
{
    DEFAULT,
    MCQ,
    TEXT,
    TRUE_FALSE,
}

export default class Question
{
    id: number;
    title: string;
    question_type: QuestionType;
    good_answers: string[];
    bad_answers: string[]

    constructor()
    {
        this.id = -1;
        this.title = "(null)";
        this.question_type = QuestionType.DEFAULT;
        this.good_answers = [];
        this.bad_answers = []
    }
}