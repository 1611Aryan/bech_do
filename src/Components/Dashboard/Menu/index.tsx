import styled from "@emotion/styled"

import { FaDollarSign, FaHeart, FaTimes } from "react-icons/fa"
import { MdLogout } from "react-icons/md"
import { BsBagFill } from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom"
import { logout } from "../../../Redux/Slices/Authentication.Slice"
import useTypedDispatch from "../../../Hooks/useTypedDispatch"

const Menu: React.FC<{
  menu: boolean
  setMenu: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ menu, setMenu }) => {
  const dispatch = useTypedDispatch()

  const navigate = useNavigate()

  const closeMenu = () => setMenu(false)
  const Logout = () => {
    dispatch(logout())
    navigate("/", { replace: true })
  }

  return (
    <StyledMenu className={menu ? "open" : ""}>
      <FaTimes onClick={closeMenu} className="back" />
      <ul>
        <Link to="/dashboard/sell">
          <li>
            <FaDollarSign />
            <span>Sell Items</span>
          </li>
        </Link>
        <li>
          <FaHeart />
          <span>Saved Items</span>
        </li>
        <li>
          <BsBagFill />
          <span>My Postings</span>
        </li>
      </ul>
      <div className="logout" onClick={Logout}>
        <MdLogout />
        <span>Logout</span>
      </div>
    </StyledMenu>
  )
}

const StyledMenu = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  padding: calc(1.5 * var(--padding)) 0;
  padding-right: var(--padding);

  z-index: 12;

  width: 20%;
  height: 100%;
  background: #fffe;
  backdrop-filter: blur(5px);

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  border-left: 4px solid #17a1ba;

  font-size: 1.25rem;

  transform: translate(100%);
  transition: transform 200ms;

  .back {
    align-self: flex-end;
    cursor: pointer;
    font-size: 2em;
  }

  ul {
    list-style-type: none;

    li {
      font-family: var(--cursive);
      font-size: 1.25em;
      font-weight: 600;

      padding: calc(var(--padding) / 3) var(--padding);
      border-radius: 0 20px 20px 0;

      cursor: pointer;

      background: #fd507e;
      color: #fff;

      transition: all 200ms;
      transform-origin: left center;

      display: flex;
      align-items: center;

      > * + * {
        margin-left: 1rem;
      }

      &:hover {
        transform: scale(1.05);
      }
    }

    > * + * {
      margin-top: 2rem;
    }
  }

  .logout {
    align-self: flex-end;

    display: flex;
    align-items: center;
    cursor: pointer;
  }
`

export default Menu
