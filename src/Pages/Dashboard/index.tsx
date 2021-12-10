import styled from "@emotion/styled"
import axios from "axios"

import Header from "../../Components/Dashboard/Header"

import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import Menu from "../../Components/Dashboard/Menu"
import { profileEndpoint } from "../../Endpoints"
import useTypedDispatch from "../../Hooks/useTypedDispatch"
import {
  deleteProfile,
  getProfile,
  profile,
} from "../../Redux/Slices/User.Slice"
import { logout } from "../../Redux/Slices/Authentication.Slice"

const Dashboard = () => {
  const [menu, setMenu] = useState(false)
  const dispatch = useTypedDispatch()

  useEffect(() => {
    ;(async () => {
      try {
        const res = await axios[profileEndpoint.method]<{ payload: profile }>(
          profileEndpoint.url,
          {
            withCredentials: true,
          }
        )
        dispatch(getProfile(res.data.payload))
      } catch (error: any) {
        console.log(error)
        dispatch(deleteProfile())
        dispatch(logout())
      }
    })()
  }, [dispatch])

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
