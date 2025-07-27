import WithoutVerticalMenuLayout from "atomic-design/layouts/WithourVerticalMenu";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import singleSocket from "singleSocket";
import { useSelector, useDispatch } from "react-redux";
import { setAuth } from "../redux/slice/AuthSlice";
import { setProfile } from "../redux/slice/ProfileSlice";
import { RootState } from "store";
import { ApiError, ManagerTest, TestService } from "types";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import TestCard from "atomic-design/modules/TestCard";

const WaitingRoom = () => {
  const token = useSelector((state: RootState) => state.auth.access);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { testTestList } = TestService
  const { data, isLoading, error } = useQuery<any, ApiError, Array<ManagerTest>, any>({
    queryKey: ['testTestList', { status: 'active' }],
    queryFn: ({ queryKey }) => testTestList('active')
  })

  

  useEffect(() => {
    singleSocket.send({ type: "auth", message: token });

    // Subscribe on mount
    const unsubscribe = singleSocket.subscribe((msg) => {
      console.log(msg)

      if (msg.type === "error" && msg.message === "auth") {
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

  useEffect(() => {
    console.log('data', data, error)
  }, [data, error])

  if (isLoading) return <p>loading ...</p>

  return (
    <WithoutVerticalMenuLayout>
      <div className="row mt-2 mb-5">
        {data?.map(test => <>
          <div className="col-md-4 mb-4">
            <TestCard test={test} />
          </div>
        </>)}
      </div>
    </WithoutVerticalMenuLayout>
  );
};

export default WaitingRoom;