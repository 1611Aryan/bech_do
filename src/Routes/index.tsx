import Dashboard from "../Pages/Dashboard"
import Home from "../Pages/Home"
import Register from "../Pages/Register"

const Routes = () => [
  {
    path: "*",
    element: <Home />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
]

export default Routes
