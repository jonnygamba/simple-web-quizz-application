import Question from "../src/components/question";
import Option from "../src/components/answer";

export default function Home() {
  return (
    <form action="">
      <Question question="question 1">
        <Option id="answer-1" group="question-1" question="question 1?" />
        <Option id="answer-2" group="question-1" question="question 2?" />
        <Option id="answer-3" group="question-1" question="question 3?" />
        <Option id="answer-4" group="question-1" question="question 4?" />
      </Question>
    </form>
  );
}
