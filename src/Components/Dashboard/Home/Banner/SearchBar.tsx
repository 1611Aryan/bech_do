import styled from "@emotion/styled"
import React, { useState } from "react"
import axios from "axios"
import { FaSearch } from "react-icons/fa"
import { postsByTagEndpoint } from "../../../../Endpoints"
import useTypedDispatch from "../../../../Hooks/useTypedDispatch"
import { addPosts, postData } from "../../../../Redux/Slices/Post.Slice"

const SearchBar = () => {
  const [input, setInput] = useState("")

  const dispatch = useTypedDispatch()

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value)

  const submitHandler = async () => {
    try {
      const res = await axios[postsByTagEndpoint.method]<{
        payload: postData[]
      }>(postsByTagEndpoint.url + `/${input}`, { withCredentials: true })
      dispatch(addPosts(res.data.payload))
    } catch (err) {
      return console.log(err)
    }
  }

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
