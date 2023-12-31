import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/Login/Login";
import ExchangesPage from "./components/Exchanges/Exchanges";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import GuestView from "./views/GuestView";
import CreateExchange from "./components/Exchanges/CreateExchange";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <GuestView />,
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
          {
            path: "exchanges",
            element: <ExchangesPage />,
          },
          {
            path: "exchanges/create",
            element: <CreateExchange />,
          },
        ],
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);

export default router;
