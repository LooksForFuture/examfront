import { createBrowserRouter } from "react-router-dom";
import Home from "pages";
import Login from "pages/Login";
import ManageTest from "pages/ManageTest";
import Congratulation from "pages/Congratulation";
import FAQ from "pages/FAQ";
import MyProfile from "pages/MyProfile";
import ContactUs from "pages/ContactUs";
import SocketTest from "pages/SocketTest"
import Page404 from "pages/page404";

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
    path: "/my-profile",
    element: <MyProfile />
  },
  {
    path: "/",
    element: <Home />,
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
    path: "*",
    element: <Page404 />
  },
]);

export default router;
