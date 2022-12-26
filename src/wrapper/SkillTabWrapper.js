import styled from "styled-components";

const Wrapper = styled.div`
  /* border: 2px solid red; */
  height: 200px;
  > .body {
    color: gray;
    > .main-title {
      display: flex;
      margin: 20px 0;
      > p {
        margin-right: 30px;
        cursor: pointer;
        position: relative;
        /* border: 2px solid red; */
        /* overflow: hidden; */
        &::after {
          content: "";
          width: 0%;
          height: 3px;
          position: absolute;
          background-color: lightcoral;
          left: 0;
          bottom: -6px;
          transition: all 0.2s;
        }
        &:hover::after {
          width: 100%;
        }
      }
      > .active::after {
        width: 75%;
      }
    }
    > .content {
      font-size: 14px;
      > div {
        /* border: 2px solid blue; */
        > div {
          margin: 0 0 15px 0;
          .heading {
            color: lightcoral;
            margin-bottom: 5px;
          }
        }
      }
      > .skills {
        width: 200px;
        /* border: 2px solid red; */
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;

export default Wrapper;
