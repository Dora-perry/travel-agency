import React from 'react'
import styled from 'styled-components'
import homeImage from "../assets/hero.png"

const Hero = () => {
  return (
    <>
      <Section id="hero">
        <div className="background">
          <img src={homeImage} alt=" " />
        </div>
        <div className="content">
          <div className="title">
            <h1>TRAVEL TO EXPLORE</h1>
            <p>
              Being centrally situated within the business districts and the
              main shopping areas of the city, Heliconia Park Port Harcourt
              Hotel & Suites is a best choice for both leisure and business
              travellers.
            </p>
            </div>
                  <div className='search'>
                      <div className='container'>
                          <label htmlFor=''> where you want to go</label>
                          <input type="text" placeholder="Search your locaction"/>
                          
                      </div>
                      <div className='container'>
                          <label htmlFor=''>check-in</label>
                          <input type="date"/>
                          
                      </div>
                      <div className='container'>
                          <label htmlFor=''> check-out</label>
                          <input type="date"/>
                          
                      </div>
                      <button>Explore now</button>

                      
            </div>
        </div>
      </Section>
    </>
  );
}

const Section = styled.div`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;

  .background {
    height: 100%;
    img {
      width: 100%;
      filter: brightness(60%);
    }
  }

  .content {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    z-index: 3;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .title {
      color: white;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }

      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }

    .search {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;

      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 1.5rem;

        label {
          font-size: 1.1rem;
          color: #03045e;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type='date'] {
            padding-left: 3rem;
          }
          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }

      button {
        padding: 1rem;
        border-radius: 0.3rem;
        cursor:pointer ;
        border:none;
        color:white;
        background-color:#4361ee;
        text-transform:uppercase;
        font-size:1.1rem;
        transition:0.3 ease-in-out;

        &:hover{
            background-color:#023e8a;
            
        }

      }
    }
  }
`;

export default Hero