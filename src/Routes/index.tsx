import { Navigate } from "react-router-dom"
import DashHome from "../Components/Dashboard/Home"
import Sell from "../Components/Dashboard/Sell"
import Dashboard from "../Pages/Dashboard"
import Home from "../Pages/Home"
import Register from "../Pages/Register"

const Routes = (loggedIn: boolean) => {
  return [
    {
      path: "*",
      element: loggedIn ? <Navigate to="/dashboard" /> : <Home />,
    },
    {
      path: "register",
      element: loggedIn ? <Navigate to="/dashboard" /> : <Register />,
    },
    {
      path: "dashboard",
      element: loggedIn ? <Dashboard /> : <Navigate to="/" />,
      children: [
        { index: true, element: <DashHome /> },
        {
          path: "sell",
          element: <Sell />,
        },
      ],
    },
  ]
}

export default Routes
