import styled from "@emotion/styled"
import Post from "./post"
import axios from "axios"
import texture_webp from "./../../../../Media/texture.webp"

import useTypedSelector from "../../../../Hooks/useTypedSelector"
import { useEffect } from "react"
import { allPostsEndpoint } from "../../../../Endpoints"
import { addPosts, postData } from "../../../../Redux/Slices/Post.Slice"
import useTypedDispatch from "../../../../Hooks/useTypedDispatch"

const Posts = () => {
  const { posts } = useTypedSelector(state => state.posts)

  const dispatch = useTypedDispatch()

  useEffect(() => {
    ;(async () => {
      try {
        const res = await axios[allPostsEndpoint.method]<{
          payload: postData[]
        }>(allPostsEndpoint.url, { withCredentials: true })

        dispatch(addPosts(res.data.payload))
      } catch (err) {
        console.log(err)
      }
    })()
  }, [dispatch])

  return (
    <StyledPosts>
      {posts.map((postData, index) => (
        <Post postData={postData} key={index} />
      ))}
    </StyledPosts>
  )
}

const StyledPosts = styled.div`
  padding: var(--padding);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  > * + * {
    margin-top: 2rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${texture_webp});
    background-repeat: repeat;
    background-position: center;

    opacity: 0.1;
  }
`

export default Posts
