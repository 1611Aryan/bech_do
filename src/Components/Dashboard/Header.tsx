import styled from "@emotion/styled"
import { CgProfile } from "react-icons/cg"
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from "react-router-dom"

const Header: React.FC<{
  setMenu: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setMenu }) => {
  const openMenu = () => setMenu(true)

  return (
    <StyledHeader>
      <h1>
        <Link to="/">Bech Do</Link>
      </h1>
      <div className="options">
        <div className="profile">
          <CgProfile />
          <span>Aryan</span>
        </div>
        <GiHamburgerMenu onClick={openMenu} className="menu" />
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  z-index: 10;
  position: sticky;
  top: 0;
  left: 0;

  width: 100%;
  height: 10vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--padding);

  background: #fff;

  .options {
    display: flex;
    align-items: center;
    font-size: clamp(0.9rem, 2vw, 1.25rem);
    > * + * {
      margin-left: clamp(1rem, 3vw, 2rem);
    }
    svg {
      font-size: 1.2em;
    }
  }

  .menu {
    cursor: pointer;
  }

  .profile {
    background: #fd507e;
    color: #fff;
    padding: clamp(0.2rem, 1vw, 0.4rem) clamp(0.4rem, 1vw, 0.8rem);

    border-radius: 35px;

    display: flex;
    align-items: center;

    cursor: pointer;

    > * + * {
      margin-left: clamp(0.5rem, 1vw, 1rem);
    }
  }
`
export default Header
