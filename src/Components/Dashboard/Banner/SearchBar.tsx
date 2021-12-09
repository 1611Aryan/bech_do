import styled from "@emotion/styled"
import React, { useState } from "react"
import { FaSearch } from "react-icons/fa"

const SearchBar = () => {
  const [input, setInput] = useState("")

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value)

  const submitHandler = () => {}

  return (
    <StyledSearchBar>
      <input
        placeholder="Search Something"
        type="text"
        onChange={changeHandler}
      />
      <button onClick={submitHandler}>
        <FaSearch />
      </button>
    </StyledSearchBar>
  )
}

const StyledSearchBar = styled.div`
  z-index: 2;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input,
  button {
    --radius: 5px;
    padding: clamp(0.4rem, 1vw, 0.6rem);
    font-size: 1.1rem;
    line-height: 1;
  }
  input {
    flex: 1;
    color: #000;
    border-radius: var(--radius) 0 0 var(--radius);
  }
  button {
    cursor: pointer;
    background: #fd507e;
    color: #fff;
    border-radius: 0 var(--radius) var(--radius) 0;
  }
`

export default SearchBar
