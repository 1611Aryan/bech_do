import styled from "@emotion/styled"

import { useState } from "react"
import Page1 from "./Page1"
import Page2 from "./Page2"
const Sell = () => {
  const [page, setPage] = useState(1)

  const [data, setData] = useState({
    itemName: "",
    description: "",
    tags: "",
    photos: null as null | { file: File; preview: string }[],
  })
  const formData = new FormData()
  return (
    <StyledSell>
      <h1>Create Your Posting</h1>
      <div className="content">
        {page === 1 ? (
          <Page1 data={data} setData={setData} setPage={setPage} />
        ) : (
          <Page2
            data={data}
            formData={formData}
            setData={setData}
            setPage={setPage}
          />
        )}
      </div>
    </StyledSell>
  )
}

const StyledSell = styled.section`
  width: 100%;

  padding: var(--padding) calc(4 * var(--padding));
  h1 {
    font-family: var(--sanSerif);
    color: #fd507e;
    font-size: 4rem;
    font-weight: 900;
  }

  .content {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  form {
    flex: 0.5;
    > * {
      margin-top: 2rem;
    }

    .message {
      color: green;
    }

    .error {
      color: red;
    }

    .thumb {
      display: inline-flex;
      border-radius: 2px;
      border: 1px solid #eaeaea;
      margin-bottom: 8px;
      margin-right: 8px;
      max-width: 60%;

      padding: 4px;
      img {
        width: 100%;
        object-fit: cover;
      }
    }

    label {
      color: #000;
      font-size: 1.5rem;
      line-height: 1;
      small {
        font-size: 0.6em;
        color: #4a4a4a;
      }
    }
    input,
    textarea,
    .photos {
      width: 100%;
      border: 2px solid #17a1ba;
      border-radius: 5px;
      padding: 0.4rem 0.8rem;
    }

    .photos {
      color: #4a4a4a;
      p {
        cursor: pointer;
      }
    }

    textarea {
      resize: none;
    }

    .description,
    .photos {
      min-height: 35vh;
    }
    .tags {
      height: 10vh;
    }
  }

  .btnContainer {
    flex: 0.3;
    font-size: 5rem;
    svg {
      display: block;
      cursor: pointer;
    }
    > * + * {
      margin-top: 2rem;
    }
    .cancel {
      color: #ff5050;
    }
    .next {
      color: #17a1ba;
    }
    .done {
      color: green;
    }
  }
`

export default Sell
