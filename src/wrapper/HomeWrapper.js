import styled from "styled-components";
import myPic from "../assets/myPic.png";

const Wrapper = styled.main`
  background-color: black;
  height: calc(100vh - 60px);
  > .body {
    display: flex;
    position: relative;
    height: 100%;
    /* 1st part */
    > .info {
      @media (max-width: 750px) {
        width: 100%;
        > .info-content {
          position: absolute;
          bottom: 10%;
          left: -20%;
        }
      }
      color: white;
      > .info-content {
        margin: 200px 0 0 200px;
        font-size: 28px;
        > .designation {
          font-size: 1em;
          margin: 0 0 25px 0;
        }
        > .name {
          font-size: 40px;
          font-weight: 800;
          margin: 0 0 20px 0;
          > span {
            color: lightcoral;
          }
        }
        > .address {
          font-weight: 800;
          font-size: 40px;
        }
      }
    }
    /* 2nd part */
    > .image {
      flex: 1;
      background-image: url(${myPic});
      background-repeat: no-repeat;
      background-size: 1000px;
      background-attachment: fixed;
      background-position: 500px 50px;
    }
  }

  @media (max-width: 1000px) {
    > .body {
      > .info {
        width: 550px;
        > .info-content {
          > .designation {
            font-size: 0.8em;
          }
        }
      }
      > .image {
        background-size: 900px;
        background-position: 370px 100px;
      }
    }
  }

  @media (max-width: 750px) {
    > .body {
      > .info {
        position: absolute;
        width: 100%;
        height: calc(100vh - 60px);
        background-position: 100px 150px;
        background-size: 900px;
      }
      > .image {
        background-size: 900px;
        background-position: 100px 100px;
      }
    }
  }

  @media (max-width: 500px) {
    > .body {
      .designation {
        font-size: 0.1em;
      }
      > .image {
        background-position: -100px 100px;
      }
    }
  }
`;

export default Wrapper;
