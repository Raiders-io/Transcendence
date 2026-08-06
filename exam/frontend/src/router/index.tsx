import { createBrowserRouter } from "react-router-dom";
import Question from "../pages/Question";
import ExamAuthoring from "../pages/ExamAuthoring";
import ExamPaper from "../pages/ExamPaper";

export const router = createBrowserRouter([
    {
        path: "/",
        element: null
    },
    {
        path: "/question",
        element: <Question />
    },
    {
        path: "/exam-authoring",
        element: <ExamAuthoring />
    },
    {
        path: "/exam-paper",
        element: <ExamPaper />
    }
]);