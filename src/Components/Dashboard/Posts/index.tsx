import styled from "@emotion/styled"
import Post from "./post"

import texture_webp from "./../../../Media/texture.webp"

export type postData = {
  itemName: string
  date: string
  description: string
  gallery: string[]
  profilePhoto: string
  contact: {
    phone: string
    email: string
  }
}

const Posts = () => {
  const data: postData[] = [
    {
      profilePhoto:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&w=100",
      itemName: "White Mattress",
      date: "4th Dec, 2021",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium        reprehenderit similique animi nulla deleniti magnam blanditiis porro        beatae quibusdam maxime?",
      gallery: [
        "https://images.unsplash.com/photo-1583535045024-e2479a694777",
        "https://images.unsplash.com/photo-1506720186575-11354d325017",
        "https://images.unsplash.com/photo-1530629013299-6cb10d168419?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
        "https://images.unsplash.com/photo-1425219366480-47fdbbe0e83b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      ],
      contact: {
        phone: "8146740057",
        email: "abc@xyz.com",
      },
    },
  ]

  return (
    <StyledPosts>
      {data.map((postData, index) => (
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
