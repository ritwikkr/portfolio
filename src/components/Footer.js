import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <div className="body">
        <p>
          Copyright &copy; Ritwik. Made with ❤️ by <span>Ritwik Rishu</span>
        </p>
      </div>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.footer`
  background-color: black;
  color: white;
  > .body {
    background-color: #242324;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    > p {
      > span {
        color: #cc163f;
        font-weight: 700;
      }
    }
  }
`;
