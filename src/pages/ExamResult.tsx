
import { useQuery } from "@tanstack/react-query";

import TopWinnerCard from "atomic-design/modules/TopWinnerCard";
import WinnerCard from "atomic-design/modules/WinnerCard";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { TestService } from "types";
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
import Congratulation from "./Congratulation";
import UserRank from "atomic-design/organisms/UserRank";

const ExamResult = () => {
  const { testId } = useParams();
  const { width, height } = useWindowSize();
  const { testResultRead } = TestService;
  const { data, isLoading } = useQuery({
    queryKey: ["testResultRead"],
    // @ts-ignore
    queryFn: () => testResultRead(testId),
  });

  if (isLoading) return <p>loading ...</p>;
  
  console.log('AAA', data)

  let first = null
  let second = null
  let third = null
  let others = null

  if (data) {
    if (data.length === 1) {
      first = data[0]
    } else if (data.length === 2) {
      first = data[0]
      second = data[1]
    } else if (data.length === 3) {
      first = data[0]
      second = data[1]
      third = data[2]
    } else if (data.length > 3) {
      first = data[0]
      second = data[1]
      third = data[2]
      others = (data ?? [])?.slice(3);
    }
  }

  return (
    <>
      <WithoutVerticalMenuLayout>
        <Container>
          <UserRank users={data} />
        </Container>
      </WithoutVerticalMenuLayout>
    </>
  );
};

export default ExamResult;