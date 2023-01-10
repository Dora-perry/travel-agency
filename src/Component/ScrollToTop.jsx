import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png';


const ScrollToTop = () => {
    const [scrollState, setScrollState] = useState(false)

    const toTop = () => {
        window.scrollTo({top:0})
    }
    window.addEventListener("scroll", () => {
        window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false)
    })
  return (
      <TopTop scrollState={scrollState} onClick={toTop}>
          <img src={ logo} alt="" />
    </TopTop>
  )
}

const TopTop = styled.div`
  display: ${({ scrollState }) => (scrollState ? 'block' : 'none')};
  position:fixed;
  bottom:1rem;
  right:2rem;
  z-index:10;
  img{
    height:1.5rem;
  }
  border-radius:2rem;
  background-color:#1900ff39;
  padding:1rem;

`;
export default ScrollToTop