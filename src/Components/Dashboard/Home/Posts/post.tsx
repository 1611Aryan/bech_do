import styled from "@emotion/styled"
import { useState } from "react"

import { HiPhone } from "react-icons/hi"
import { CgProfile } from "react-icons/cg"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { postData } from "../../../../Redux/Slices/Post.Slice"

const Post: React.FC<{ postData: postData }> = ({ postData }) => {
  const [bookmark, setBookmark] = useState(false)

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <StyledPost>
      <header>
        <div className="info">
          <CgProfile className="profile" />
          <div>
            <h3>{postData.itemName}</h3>
            <h5>
              {postData.createdAt &&
                new Date(postData.createdAt).toLocaleDateString()}
            </h5>
          </div>
        </div>
        <svg
          width="50"
          viewBox="0 0 50 201"
          className={`bookmark ${bookmark ? "marked" : ""}`}
          onClick={() => setBookmark(bookmark => !bookmark)}
        >
          <path
            d="M78.9191 156.052L23.2717 187.05C17.2034 190.43 14.1693 192.12 11.8336 190.998C11.5837 190.877 11.3441 190.737 11.1175 190.577C9 189.083 9 185.61 9 178.663V18.6C9 14.2738 9 12.1107 10.2494 10.6934C10.388 10.5363 10.5363 10.388 10.6934 10.2494C12.1107 9 14.2738 9 18.6 9H85H151.4C155.726 9 157.889 9 159.307 10.2494C159.464 10.388 159.612 10.5363 159.751 10.6934C161 12.1107 161 14.2738 161 18.6V178.97C161 185.802 161 189.218 158.914 190.714C158.69 190.875 158.454 191.016 158.207 191.138C155.903 192.271 152.891 190.658 146.868 187.433L88.1226 155.975C85.958 154.816 84.8757 154.237 83.7057 154.2C83.5725 154.195 83.4391 154.196 83.3059 154.203C82.1367 154.259 81.0642 154.857 78.9191 156.052Z"
            stroke="black"
            strokeWidth="18"
          />
        </svg>
      </header>

      <div className="gallery">
        <Carousel
          swipeable={true}
          draggable={false}
          responsive={responsive}
          infinite={true}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item"
        >
          {postData.images.map((src, index) => (
            <img src={src} key={index} alt="" />
          ))}
        </Carousel>
      </div>
      <p className="description">{postData.description}</p>
      <button className="contact">
        <HiPhone />
        <span className="vanish">Contact</span>
        <span className="appear">{postData.userPhone}</span>
      </button>
    </StyledPost>
  )
}

const StyledPost = styled.div`
  z-index: 2;

  width: 40%;

  padding: 1rem 0;

  border-radius: 10px;

  overflow: hidden;

  background: #fbfbfb;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);

  border: 1px solid #000;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  position: relative;

  gap: 1rem;

  header {
    z-index: 2;
    width: 100%;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .info {
      display: flex;
      align-items: center;

      > * + * {
        margin-left: 1rem;
      }
      h3,
      h5 {
        line-height: 1.2;
        font-weight: 400;
      }

      h3 {
        color: #000;
      }
      h5 {
        color: #363636;
      }
    }

    .profile {
      font-size: 2.5rem;
    }

    .bookmark {
      color: #000;
      transition: all 200ms;
      path {
        fill: #fff;
      }
      height: 1.5rem;
      cursor: pointer;
    }
    .marked {
      path {
        fill: #000;
      }
    }
  }
  .gallery {
    width: 100%;
    height: 40vh;

    .carousel-container {
      width: 100%;
      height: 100%;
      overflow: hidden;
      .react-multi-carousel-track {
        height: 100%;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  .description {
    padding: 0 1rem;
  }
  .contact {
    margin: 0 1rem;
    background: #eba655;
    color: #000;
    border: 0;
    line-height: 1;
    font-size: 1.1rem;
    border-radius: 2px;
    padding: 0.5rem 0.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: text;
    transition: all 200ms;
    > * + * {
      margin-left: clamp(0.5rem, 1vw, 1rem);
    }

    .appear {
      display: none;
    }

    &:focus {
      .vanish {
        display: none;
      }
      .appear {
        display: block;
      }
    }
  }
`

export default Post
