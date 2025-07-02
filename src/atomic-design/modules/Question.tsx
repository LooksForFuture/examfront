import { useIsDevelopment } from "hooks";
import { useState } from "react";
import { Question as QuestionType } from "types";

interface QuestionProps {
  question: QuestionType;
  onChange?: (answerId: number) => void;
}

const Question = ({ question, onChange }: QuestionProps) => {
  const isDevelopment = useIsDevelopment()
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const handleAnswerChange = (answerId: number) => {
    onChange?.(answerId);
    setSelectedAnswer(answerId);
  };

  return (
    <>
      <h5 data-selenium-id={isDevelopment ? 'question': undefined}>{question.title}</h5>
      <div className="col-sm-9 mt-2">
        {/* @ts-ignore */}
        {question?.answer_set?.map((answer: Answer, index: number) => (
          <div className="form-check mb-2" key={index}>
            <input
              name="collapsible-addressType"
              className="form-check-input"
              type="radio"
              value={answer.id}
              id={`collapsible-addressType-${answer.id}`}
              checked={selectedAnswer === answer.id}
              onChange={() => handleAnswerChange(answer.id as number)}
              data-selenium-id={isDevelopment ? `question-${index}` : undefined}
            />
            <label
              className="form-check-label"
              htmlFor={`collapsible-addressType-${answer.id}`}
            >
              {answer.title}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Question;
