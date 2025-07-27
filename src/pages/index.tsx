import WithoutVerticalMenuLayout from "atomic-design/layouts/WithourVerticalMenu";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import singleSocket from "singleSocket";
import { useSelector, useDispatch } from "react-redux";
import { setAuth } from "../redux/slice/AuthSlice";
import { setProfile } from "../redux/slice/ProfileSlice";
import { RootState } from "store";

const WaitingRoom = () => {
  const token = useSelector((state:RootState) => state.auth.access);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    singleSocket.send({type:"auth", message:token});

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

  return (
    <WithoutVerticalMenuLayout>
      <div className="row mt-2 mb-5">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
            </div>
          </div>
        </div>
      </div>
    </WithoutVerticalMenuLayout>
  );
};

export default WaitingRoom;