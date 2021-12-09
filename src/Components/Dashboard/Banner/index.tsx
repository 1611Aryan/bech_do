import styled from "@emotion/styled"

import bg_webp from "./../../../Media/bg.webp"
import bg_jpg from "./../../../Media/bg.jpg"
import SearchBar from "./SearchBar"

const Banner = () => {
  return (
    <StyledBanner>
      <picture>
        <source srcSet={bg_webp} type="image/webp" />
        <source srcSet={bg_jpg} type="image/jpg" />
        <img src={bg_webp} alt="" />
      </picture>
      <SearchBar />
    </StyledBanner>
  )
}

const StyledBanner = styled.div`
  width: 100%;
  height: 25vh;
  display: grid;
  place-items: center;

  position: relative;

  picture {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`
export default Banner
