import { Link } from "react-router-dom"
import styled from "@emotion/styled"
import bg from "./../../Media/bg2.jpg"
import React, { useState } from "react"
import axios from "axios"
import { loginEndpoint } from "../../Endpoints"
import useTypedDispatch from "../../Hooks/useTypedDispatch"
import { login } from "../../Redux/Slices/Authentication.Slice"

const Home = () => {
  const [input, setInput] = useState({ email: "", password: "" })
  const [error, setError] = useState("")

  const dispatch = useTypedDispatch()

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(input => ({ ...input, [e.target.name]: e.target.value }))

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await axios[loginEndpoint.method](loginEndpoint.url, input, {
        withCredentials: true,
      })
      dispatch(login())
    } catch (error: any) {
      console.log(error)
      if (error.response.data.message) {
        return setError(error.response.data.message)
      } else console.log("Error", error.message)
      return setError("We encountered an Error please try again later")
    }
  }

  return (
    <StyledHome>
      <header>
        <h1>Bech Do</h1>
        <nav>
          <ul>
            <li>Contact</li>
          </ul>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </nav>
      </header>
      <img src={bg} alt="" />
      <div className="overlay"></div>
      <main>
        <div className="left">
          <span>Bech Do</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            consequuntur corporis alias atque ullam maxime. Distinctio in ut
            cupiditate deleniti?
          </p>
        </div>
        <div className="right">
          <div className="bg"></div>
          <form onSubmit={submitHandler}>
            <div className="error">{error}</div>

            <div className="container">
              <label htmlFor="email">Email: </label>
              <br />
              <input
                type="email"
                name="email"
                onChange={changeHandler}
                value={input.email}
                autoFocus
                required
              />
            </div>
            <div className="container">
              <label htmlFor="password">Password: </label>
              <br />
              <input
                type="password"
                name="password"
                onChange={changeHandler}
                value={input.password}
                required
              />
            </div>
            <button>Login</button>
          </form>
        </div>
      </main>
    </StyledHome>
  )
}

const StyledHome = styled.section`
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
    background: linear-gradient(#000, transparent);
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
    padding: 0 4rem;
    .left {
      width: 45%;
      color: #fff;

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
      width: 55%;
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
        background: rgba(0, 0, 0, 0.2);
      }
      form {
        position: relative;
        z-index: 2;
        width: 100%;
        height: 55%;
        border-radius: 10px;
        background: rgba(241, 201, 247, 0.5);
        backdrop-filter: blur(5px);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        padding: 0 2rem;

        .error {
          font-size: 0.9rem;
          color: red;
        }

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
          background: #fff8;

          border-radius: 2px;
        }
        button {
          padding: 0.4rem 1rem;
          font-size: 1rem;
        }
      }
    }
  }
`

export default Home
