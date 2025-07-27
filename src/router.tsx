import { createBrowserRouter } from "react-router-dom";
import Home from "pages/index";
import ExamRoom from "pages/ExamRoom";
import Login from "pages/Login";
import ManageTest from "pages/ManageTest";
import Congratulation from "pages/Congratulation";
import FAQ from "pages/FAQ";
import Profile from "pages/MyProfile";
import ContactUs from "pages/ContactUs";
import SocketTest from "pages/SocketTest"
import Page404 from "pages/page404";
import ExamResult from "pages/ExamResult";

const router = createBrowserRouter([
  {
    path: "/finish/:testId",
    element: <Congratulation />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/exam/:examId",
    element: <ExamRoom />
  },
  {
    path: "/exam/:testId/result",
    element: <ExamResult />
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/manage-test",
    element: <ManageTest />,
  },
  {
    path: "/faq",
    element: <FAQ />
  },
  {
    path:"/ws",
    element: <SocketTest />
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Page404 />
  },
]);

export default router;
