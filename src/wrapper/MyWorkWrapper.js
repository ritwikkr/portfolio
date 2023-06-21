import styled from "styled-components";

export const StyledDiv = styled.div`
  background-image: url(${(props) => props.imageUrl});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  cursor: pointer;
  margin: 20px 40px 20px 0;
  border-radius: 10px;
  height: 400px;
  width: 350px;
  overflow: hidden;
  > a {
    color: unset;
    text-decoration: unset;
    > .text {
      padding: 150px 20px 20px 20px;
      height: 100%;
      text-align: center;
      background: linear-gradient(to bottom, transparent, red);
      transition: all 0.2s ease-in-out;
      transform: translateY(400px);
      > .heading {
        margin-bottom: 20px;
        font-weight: 600;
      }
      > .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: white;
        color: red;
        width: 50px;
        height: 50px;
        font-size: 28px;
        margin: 30px auto 0;
      }
    }
    &:hover {
      transform: scale(1.05);
      > .text {
        transform: translateY(0);
      }
    }
  }
`;

const Wrapper = styled.div`
  min-height: 90vh;
  color: white;
  background-color: black;
  padding: 20px;
  > .body {
    width: 80%;
    margin: auto;
    > .heading {
      font-size: 36px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    > .content {
      display: flex;
      flex-wrap: wrap;
    }
    > .see-more {
      text-align: center;
      margin-top: 20px;
      > button {
        cursor: pointer;
        height: 40px;
        background-color: transparent;
        color: white;
        border: 2px solid #b91539;
        width: 120px;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
        &:hover {
          border: none;
          background-color: #ff1d4c;
        }
      }
    }
  }
`;

export default Wrapper;
