import CountDownWaiting from "atomic-design/atoms/CountDownWaiting";
import Wating from "atomic-design/atoms/Wating";
import Container from "atomic-design/layouts/Container";
import WithoutVerticalMenuLayout from "atomic-design/layouts/WithourVerticalMenu";
import QuestionCard from "atomic-design/organisms/QuestionCard";
import UserList from "atomic-design/organisms/UserList";
import { diff } from "helper";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Question } from "types";
import singleSocket from "singleSocket";
import { useSelector, useDispatch } from "react-redux";
import { setAuth } from "../redux/slice/AuthSlice";
import { setProfile } from "../redux/slice/ProfileSlice";
import { RootState } from "store";

const WaitingRoom = () => {
  const token = useSelector((state:RootState) => state.auth.access);
  const activeStep = useRef<number>(0);
  const navigate = useNavigate();
  const [content, setContent] = useState<React.ReactNode | undefined>(undefined);
  const [activeQuestion, setActiveQuestion] = useState<Question | null>();
  const dispatch = useDispatch();
  const routeParams = useParams();

  useEffect(() => {
    const examId = routeParams.examId ? parseInt(routeParams.examId) : null;

    singleSocket.send({type:"auth", message:token});
    singleSocket.send({type:"goto_room", message:examId})

    // Subscribe on mount
    const unsubscribe = singleSocket.subscribe((msg) => {
      console.log(msg)
      if (msg.type === "question_started") {
        setActiveQuestion(msg.message);
      }
      
      else if (msg.type === "error" && msg.message === "auth") {
        dispatch(setAuth({ access: "", refresh: "" }));
        dispatch(setProfile(null));
        navigate("/login");
      }
    });

    // Cleanup on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  const startQuestion = () => {
    if (activeQuestion)
      setContent(
        <Container>
          <QuestionCard
            question={activeQuestion}
            onEndTime={() => {
              activeStep.current = activeQuestion?.number as number;
              setActiveQuestion(null);
              singleSocket.send({type:"query", message:"get_active_users"});
              setContent(undefined);
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

export default WaitingRoom;