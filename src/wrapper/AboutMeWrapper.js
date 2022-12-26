import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  background-color: black;
  color: white;
  display: flex;
  > .body {
    width: 80%;
    margin: auto;
    height: 80%;
    display: flex;
    align-items: center;
    > .image {
      background-color: #272627;
      width: 800px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      > img {
        width: 100%;
      }
    }
    > .about-me {
      height: 70%;
      margin: 20px 0 0 40px;
      > h1 {
        font-size: 44px;
      }
      > p {
        font-size: 15px;
        color: gray;
        line-height: 20px;
      }
    }
  }

  @media (max-width: 1000px) {
    > .body {
      padding: 20px;
      display: flex;
      flex-direction: column;
      > .image {
        width: 250px;
      }
    }
  }
`;

export default Wrapper;
