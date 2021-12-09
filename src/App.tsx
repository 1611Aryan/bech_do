import { useRoutes } from "react-router"
import useTypedSelector from "./Hooks/useTypedSelector"

import Routes from "./Routes"

const App = () => {
  const { loggedIn } = useTypedSelector(state => state.authentication)

  const routing = useRoutes(Routes(loggedIn))

  return routing
}

export default App
