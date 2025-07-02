import { useMutation, useQuery } from "@tanstack/react-query";
import CountDownWaiting from "atomic-design/atoms/CountDownWaiting";
import Spinner from "atomic-design/atoms/Spinner";
import Wating from "atomic-design/atoms/Wating";
import Container from "atomic-design/layouts/Container";
import WithoutVerticalMenuLayout from "atomic-design/layouts/WithourVerticalMenu";
import QuestionCard from "atomic-design/organisms/QuestionCard";
import UserList from "atomic-design/organisms/UserList";
import { diff } from "helper";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Question, TestService } from "types";
import singleSocket from "singleSocket";
import { useSelector } from "react-redux";
import { RootState } from "store";

const Home = () => {
  const token = useSelector((state:RootState) => state.auth.access);
  const activeStep = useRef<number>(0);
  const interval = useRef<any>();
  const navigate = useNavigate();
  const [content, setContent] = useState<React.ReactNode | undefined>(undefined);
  const [activeQuestion, setActiveQuestion] = useState<Question | null>();
  const { testGetActiveQuestionRead, testTestList } = TestService;
  const { mutate: getTests, data: testsData } = useMutation({
    mutationFn: testTestList,
  });
  const { mutate, data, isPending } = useMutation<any>({
    mutationFn: testGetActiveQuestionRead,
  });

  useEffect(() => {
    singleSocket.send({type:"auth", message:token});

    // Subscribe on mount
    const unsubscribe = singleSocket.subscribe((msg) => {
      console.log(msg)
      if (msg.type === "question_started") {
        setActiveQuestion(msg.message);
        clearInterval(interval.current);
      }
    });

    // Cleanup on unmount
    return () => {
      unsubscribe();
    };
  }, []);

/*   useEffect(() => {
    if (!interval.current) {
      interval.current = setInterval(() => {
        mutate();
      }, 100000);
    }
  }, []);

  useEffect(() => {
    if (!isPending && data) {
      if (data.id) {
        setActiveQuestion(data);
        clearInterval(interval.current);
      }
    }
  }, [isPending, data]); */

  /* useEffect(() => {
    console.log('ASD', isPending , testsData , testsData)
    if (!isPending && testsData && testsData.length) {
      navigate(`/finish/${testsData?.[0].id}`);
    }
  }, [testsData]); */

  const startQuestion = () => {
    if (activeQuestion)
      setContent(
        <Container>
          <QuestionCard
            question={activeQuestion}
            onEndTime={() => {
              activeStep.current = activeQuestion?.number as number;
              setActiveQuestion(null);
              /* interval.current = setInterval(() => {
                mutate();
              }, 1000000); */
              singleSocket.send({type:"query", message:"get_active_users"});
              setContent(undefined);
              getTests("finished");
            }}
          />
        </Container>
      );
  };

  if (content) {
    return <WithoutVerticalMenuLayout>{content}</WithoutVerticalMenuLayout>;
  }

  return (
    <WithoutVerticalMenuLayout>
      {activeQuestion && activeQuestion?.start_datetime && (
        <>
          <CountDownWaiting duration={diff(activeQuestion?.start_datetime)} onComplete={startQuestion} />
        </>
      )}
      <div className="row mt-2 mb-5">
        <div className="col-md-12">
          <div className="card">
            <Wating />
            <div className="card-body">
              <UserList />
            </div>
          </div>
        </div>
      </div>
    </WithoutVerticalMenuLayout>
  );
};

export default Home;
