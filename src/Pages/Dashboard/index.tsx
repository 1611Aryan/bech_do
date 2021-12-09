import styled from "@emotion/styled"

import Posts from "../../Components/Dashboard/Posts"
import Header from "../../Components/Dashboard/Header"
import Banner from "../../Components/Dashboard/Banner"
import Menu from "../../Components/Dashboard/Menu"
import { useState } from "react"

const Dashboard = () => {
  const [menu, setMenu] = useState(false)

  return (
    <StyledDashboard>
      <Header setMenu={setMenu} />
      <Menu menu={menu} setMenu={setMenu} />
      <Banner />
      <Posts />
    </StyledDashboard>
  )
}

const StyledDashboard = styled.main`
  width: 100%;
  height: 100%;
  background: #fff;

  .open {
    transform: translate(0);
  }
`

export default Dashboard
