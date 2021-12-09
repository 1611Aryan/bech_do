import { useRoutes } from "react-router"
import Routes from "./Routes"

const App = () => {
  const routing = useRoutes(Routes())

  return routing
}

export default App
