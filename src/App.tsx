import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Homepage } from "./pages/Homepage";
import { Signin } from "./pages/SignIn";
import { User } from "./pages/User";

// derniere version de react router a utiliser
const router = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/sign_in",
        element: <Signin />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
]);

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};
