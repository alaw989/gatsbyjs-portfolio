import React from "react";
import styled from "styled-components";

const HomeWrapper = styled.div`
height = 100vh;
color: #FFF;
padding: 100px 5% 80px;
h1 {
  font-size: 70px;
  font-weight: 100;
}
`;

export default () => (
  <HomeWrapper>
    <h1>I am Austin Law</h1>
    <p>I do things with Javascript.</p>
  </HomeWrapper>
);
