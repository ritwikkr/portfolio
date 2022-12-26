import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  background-color: black;
  color: white;
  > .body {
    width: 80%;
    margin: 50px auto;
    > .heading {
      font-size: 36px;
      font-weight: 600;
      margin-bottom: 40px;
    }
    > .content {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .service {
        cursor: pointer;
        background-color: #272627;
        height: 350px;
        margin: 20px 40px 80px 0;
        padding: 20px;
        border-radius: 10px;
        transition: all 0.3s ease-in-out;
        max-width: 350px;
        > .service-icon {
          font-size: 36px;
          font-weight: 900;
        }
        > .heading {
          font-size: 26px;
          margin-bottom: 20px;
        }
        > .content {
          font-size: 15px;
          line-height: 20px;
          color: lightgray;
          margin-bottom: 20px;
        }
        &:hover {
          background-color: #d51f44;
          transform: translateY(-10px);
        }
      }
    }
  }
`;

export default Wrapper;
