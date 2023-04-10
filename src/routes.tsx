import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import RecoverPasswordPage from "./pages/Auth/RecoverPasswordPage";
import HomePage from "./pages/Home/HomePage";
import ComponentPage from "./pages/Component/ComponentPage";
import UserPage from "./pages/User/UserPage";
import FaqPage from "./pages/Faq/FaqPage";
import useAuth from "./hooks/useAuth";
import Error404Page from "./pages/Error/Error404Page";
import ProfilePage from "./pages/Profile/ProfilePage";

const Private = ({ Item }: any) => {
  const { signed } = useAuth();
  return signed ? <Item /> : <LoginPage />;
};

const routes: any[] = [
  {
    path: "*",
    element: <Private Item={Error404Page} />,
  },
  {
    path: "/home",
    exact: true,
    element: <Private Item={HomePage} />,
  },
  {
    path: "/profile",
    exact: true,
    element: <Private Item={ProfilePage} />,
  },
  {
    path: "/user",
    exact: true,
    element: <Private Item={UserPage} />,
  },
  {
    path: "/faq",
    exact: true,
    element: <Private Item={FaqPage} />,
  },
  {
    path: "/components",
    exact: true,
    element: <Private Item={ComponentPage} />,
  },
  {
    path: "/login",
    exact: true,
    element: <LoginPage />,
  },
  {
    path: "/register",
    exact: true,
    element: <RegisterPage />,
  },
  {
    path: "/recover",
    exact: true,
    element: <RecoverPasswordPage />,
  },
];

export default routes;
