import styled from "@emotion/styled"

import Header from "../../Components/Dashboard/Header"

import { useState } from "react"
import { Outlet } from "react-router-dom"
import Menu from "../../Components/Dashboard/Menu"

const Dashboard = () => {
  const [menu, setMenu] = useState(false)

  return (
    <StyledDashboard>
      <Header setMenu={setMenu} />
      <Menu menu={menu} setMenu={setMenu} />
      <Outlet />
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
