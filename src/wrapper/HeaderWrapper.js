import styled from "styled-components";

const Wrapper = styled.header`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: black;
  color: white;
  overflow: hidden;
  > .body {
    width: 75%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > .logo {
      font-size: 2em;
      font-weight: 600;
      color: white;
      letter-spacing: 2px;
      cursor: pointer;
      > span {
        color: coral;
      }
    }
    > nav {
      > .cross {
        display: none;
      }
      > ul {
        list-style: none;
        display: flex;
        > li {
          margin: 0 30px 0 0;
          color: white;
          letter-spacing: 1.25px;
          cursor: pointer;
          > a {
            text-decoration: none;
            color: white;
            position: relative;
            &::after {
              content: "";
              width: 0%;
              height: 3px;
              background-color: lightcoral;
              position: absolute;
              left: 0;
              bottom: -6px;
              transition: all 0.3s;
            }
            &:hover::after {
              width: 100%;
            }
          }
        }
      }
    }
    > .menu {
      display: none;
    }
  }
  @media (max-width: 700px) {
    > .body {
      nav {
        transform: translateX(250px);
        background-color: lightcoral;
        position: fixed;
        height: 100%;
        z-index: 1;
        width: 250px;
        top: 0;
        right: 0;
        transition: all 0.3s ease-in;
        > .cross {
          position: absolute;
          right: 5%;
          top: 2%;
          display: block;
          cursor: pointer;
        }
        > ul {
          margin-top: 50px;
          text-align: center;
          display: block;
          > li {
            margin: 20px 0;
          }
        }
      }
      > .showMenu {
        transform: translateX(0);
      }
      > .menu {
        display: block;
        font-size: 32px;
        cursor: pointer;
      }
    }
  }
`;

export default Wrapper;
