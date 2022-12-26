import styled from "styled-components";

const Wrapper = styled.div`
  border: 2px solid transparent;
  min-height: 80vh;
  background-color: black;
  color: white;
  > .body {
    width: 80%;
    margin: 40px auto 0;
    display: flex;
    flex-wrap: wrap;
    > .contact {
      width: 300px;
      > h1 {
        font-size: 42px;
        font-weight: 600;
        margin-bottom: 30px;
      }
      > .email,
      .contact {
        display: flex;
        align-items: center;
        > .icon {
          margin: 0 10px;
          color: red;
          font-size: 22px;
        }
        > p {
          color: white;
        }
      }
      > .icons {
        margin: 20px 10px;
        font-size: 26px;
        display: flex;
        justify-content: space-between;
        width: 150px;
        align-items: center;
        > .icon {
          display: flex;
          color: lightgray;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          &:hover {
            color: #d31741;
            transform: translateY(-5px);
          }
        }
      }
      > .btn {
        > a {
          width: 140px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: white;
          background-color: #d31741;
          border-radius: 5px;
          font-size: 14px;
        }
      }
    }
    > .form {
      width: 70%;
      > form {
        > .form-content {
          margin-bottom: 20px;
          > input {
            width: 80%;
            height: 40px;
            padding-left: 5px;
            background-color: #272627;
            outline: none;
            color: white;
            border: none;
            border-radius: 5px;
          }
          > textarea {
            padding: 10px;
            background-color: #272627;
            outline: none;
            width: 80%;
            color: white;
            border: none;
            border-radius: 5px;
          }
          > button {
            width: 150px;
            height: 40px;
            background-color: #d31741;
            color: white;
            cursor: pointer;
            border: none;
            border-radius: 5px;
          }
        }
      }
    }
  }

  @media (max-width: 1200px) {
    > .body {
      > .contact {
        width: 100%;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      > .form {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default Wrapper;
