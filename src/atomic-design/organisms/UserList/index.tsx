import { useEffect, useRef, useState, memo } from "react";
import { TestService, User } from "types";
import singleSocket from "singleSocket";
import styles from "./style.module.css";
import { convertToPersianNumbers as _ } from "helper";

const UserList = () => {
  const { testUserList } = TestService;
  const [users, setUsers] = useState<Array<User>>([]);
  const interval = useRef<any>();

  useEffect(() => {
    // Subscribe on mount
    const unsubscribe = singleSocket.subscribe((msg) => {
      if (msg.type == "active_users") {
        setUsers(msg.message);
      }
    });

    // Cleanup on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  /* useEffect(() => {
    interval.current = setInterval(async () => {
      try {
        const updatedUsers = await testUserList();
        setUsers(updatedUsers);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, []); */

  return (
    <div className="list-group">
      {users.map((user: User, index: number) => (
        <UserItem key={index} user={user} />
      ))}
    </div>
  );
};

const UserItem = memo(({ user }: { user: User }) => (
  <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
    {/* <img src="../../assets/img/avatars/2.png" alt="User Image" className="rounded-circle me-3 w-px-50" /> */}
    <div className="avatar avatar-md me-2">
      <span className="avatar-initial rounded-circle">{user.username.slice(0, 2)}</span>
    </div>
    <div className="w-100">
      <div className="d-flex justify-content-between">
        <div className="user-info">
          <h6 className="mb-1">{user.username}</h6>
          <div className="user-status"></div>
          <span className={`badge badge-dot ${user.is_online ? "bg-success" : "bg-danger"}`}></span>
          <small className="ms-1">{user.is_online ? "آنلاین" : "آفلاین"}</small>
        </div>
        <div className={`add-btn d-flex flex-column align-items-center ${styles.score}`}>
          <i className="bx bx-award h3 mb-0"></i>
          <span>{_(user.active_test_score.toString())}</span>
        </div>
      </div>
    </div>
  </div>
));

export default UserList;
