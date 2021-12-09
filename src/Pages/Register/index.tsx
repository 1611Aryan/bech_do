import { Link } from "react-router-dom"
import styled from "@emotion/styled"
import RegisterBg from "./../../Media/register.jpg"

const Register = () => {
  return (
    <StyledRegister>
      <header>
        <Link to="/">
          <h1>Bech Do</h1>
        </Link>
        <nav>
          <ul>
            <li>Contact</li>
          </ul>
          <Link to="/">
            <button>Login</button>
          </Link>
        </nav>
      </header>
      <main>
        <div className="left">
          <h1>
            <span>Let's Get</span>
            <br />
            <span>You Started</span>
          </h1>
        </div>
        <div className="right">
          <img src={RegisterBg} alt="" />
          <div className="overlay"></div>
          <form>
            <div className="container">
              <label htmlFor="name">Name: </label>
              <br />
              <input type="text" name="name" autoFocus required />
            </div>
            <div className="container">
              <label htmlFor="email">Email: </label>
              <br />
              <input type="email" name="email" required />
            </div>
            <div className="container">
              <label htmlFor="password">Password: </label>
              <br />
              <input type="password" name="password" required />
            </div>
            <button>Login</button>
          </form>
        </div>
      </main>
    </StyledRegister>
  )
}

const StyledRegister = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
  }

  header {
    position: relative;
    padding: 0 4rem;
    z-index: 4;
    width: 100%;
    height: 10vh;
    background: #000;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      > * + * {
        margin-left: 2rem;
      }
      ul {
        list-style-type: none;
        > * + * {
          margin-left: 2rem;
        }
        li {
          cursor: pointer;
        }
      }
      button {
        padding: 0.4rem 0.8rem;
        background: #fff;
        border: none;
        border-radius: 5px;
        font-size: 1.1rem;
        transition: all 200ms;
        cursor: pointer;

        &:hover {
          background: #000;
          color: #fff;
        }
      }
    }
  }
  main {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      height: 100%;
      width: 40%;
      color: #fff;
      background: #1b1b1b;
      display: grid;
      place-items: center;
      line-height: 1;
      span {
        font-size: 5rem;
        font-weight: 700;
      }
      p {
        padding-right: 4rem;
        margin-top: 1.2rem;
        font-size: 1.5rem;
      }
    }
    .right {
      position: relative;
      width: 60%;
      height: 100%;
      display: grid;
      place-items: center;
      padding: 0 6rem;
      .bg {
        position: absolute;
        top: -10vh;
        left: 0;
        width: calc(100% + 4rem);
        height: 100vh;
        background: rgba(0, 0, 0, 0.2) 10%;
      }
      form {
        position: relative;
        z-index: 2;
        width: 100%;
        height: 65%;
        border-radius: 10px;
        background: rgba(252, 234, 255, 0.5);
        backdrop-filter: blur(5px);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        padding: 0 2rem;
        .container {
          width: 100%;
        }
        label {
          font-size: 1.3rem;
        }
        input {
          margin-top: 0.5rem;
          width: 100%;
          padding: 0.4rem;
          font-size: 1rem;

          border: 0;
          &:focus {
            outline: 0;
          }
        }
        button {
          border: 0;
          cursor: pointer;
          padding: 0.4rem 1rem;
          font-size: 1rem;
        }
      }
    }
  }
`

export default Register
