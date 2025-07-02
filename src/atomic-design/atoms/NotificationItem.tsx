import { useMutation } from "@tanstack/react-query";
import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyNotification, NotificationService } from "types";
import Clickable from "./Clickable";

interface NotificationItemProps {
  notification: MyNotification;
}

const NotificationItem = ({ notification }: NotificationItemProps) => {
  const navigate = useNavigate()
  const { notificationNotificationUpdate } = NotificationService;
  const { mutate: readNotification, data: readNotificationData } = useMutation({
    // @ts-ignore
    mutationFn: (id: string) =>
      notificationNotificationUpdate(id, {
        is_seen: true,
      }),
  });

  const handleClick = () => {
    if (notification.id) {
      readNotification(notification.id?.toString())
      navigate(notification.url ?? "")
    }
  }

  return (
      <Clickable onClick={handleClick}>

      <li className="list-group-item list-group-item-action dropdown-notifications-item">
        <div className="d-flex">
          <div className="flex-grow-1">
            <h6 className="mb-1">{notification.title}</h6>
            <p className="mb-1">{notification.description}</p>
            <small className="text-muted">{notification.create_datetime}</small>
          </div>
          <div className="flex-shrink-0 dropdown-notifications-actions">
            <a href="javascript:void(0)" className="dropdown-notifications-read">
              <span className="badge badge-dot"></span>
            </a>
            <a href="javascript:void(0)" className="dropdown-notifications-archive">
              <span className="bx bx-x"></span>
            </a>
          </div>
        </div>
      </li>
      </Clickable>
  );
};

export default NotificationItem;
