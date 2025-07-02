import { useMutation } from "@tanstack/react-query";
import Question from "atomic-design/modules/Question";
import { convertToPersianNumbers as _ } from "helper";
import { useIsDevelopment } from "hooks";
import useToastr from "hooks/toastr";
import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Question as QuestionType, TestService } from "types";

interface QuestionCardProps {
  question: QuestionType;
  onEndTime?: () => void;
}

const QuestionCard = ({ question, onEndTime }: QuestionCardProps) => {
  const isDevelopment = useIsDevelopment();
  const { testUserAnswerCreate } = TestService;
  const [disable, setDisable] = useState<boolean>(false);
  const { error: toastrError, success: toastrSuccess } = useToastr();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const { mutate, data, error, isError } = useMutation<any, Error>({
    // @ts-ignore
    mutationFn: (answerId: number) => testUserAnswerCreate({ answer: answerId }),
  });

  const hansleChange = (answerId: number) => {
    setSelectedAnswer(answerId);
  };

  const handleSubmit = () => {
    // @ts-ignore
    mutate(selectedAnswer);
  };

  useEffect(() => {
    if (isError && error) {
      if (error.message === "Forbidden") {
        toastrError("شما دسترسی ندارید!");
        setDisable(true);
      }
    }
  }, [isError, error]);

  useEffect(() => {
    if (data) {
      toastrSuccess("لطفا تا پایان زمان سوال منتظر بمانید", "با موفقیت ثبت شد");
    }
  }, [data]);

  return (
    <div className="card">
      <div className="card-body p-0">
        <div className="row row-bordered g-0">
          <div className="col-md-12 p-4 d-flex align-items-center justify-content-between">
            {/* <span>سوال {question.number && _(question.number.toString())}</span> */}
            <span data-selenium-id={isDevelopment ? "remaining-time" : undefined}>زمان باقی‌مانده</span>
            <CountdownCircleTimer
              isPlaying
              duration={question.duration_time as number}
              colors={["#0065DC", "#ff5b5c"]}
              colorsTime={[question.duration_time as number, 0]}
              size={40}
              strokeWidth={3.5}
              onComplete={onEndTime}
            >
              {({ remainingTime }) => _(remainingTime.toString())}
            </CountdownCircleTimer>
          </div>
          <div className="col-md-12 p-4">
            <Question question={question} onChange={hansleChange} />
          </div>
          <div className="col-md-12 p-4">
            <button
              onClick={handleSubmit}
              className="btn btn-success"
              disabled={Boolean(data?.answer as number) || disable || !selectedAnswer}
              data-selenium-id={isDevelopment ? 'submit' : undefined}
            >
              ثبت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
