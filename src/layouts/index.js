import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import code2 from "./code2.mp4";

import "./index.css";


const videoWrapper = styled.div`
  
`
const ListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  list-style: none;
  margin: 0;
  color: #fff;
`;

const ListLink = styled.li`
  margin: 0 5px;
  > * {
    text-decoration: none;
    color: white;
    margin: 0 15px;
  }
`;

const Foot = styled.div`
  background: transparent;
  height: 10vh;
  margin: 0 auto;
`;


const Header = () => (
  <div
    style={{
      background: "transparent",
      height: "10vh"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        padding: "1.45rem 1.0875rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          AL
        </Link>
      </h1>
      <ListWrapper>
        <ListLink>
          <Link to="/about/">ABOUT</Link>
        </ListLink>
        <ListLink>
          <Link to="/projects/">PROJECTS</Link>
        </ListLink>
        <ListLink>
          <Link to="/contact/">CONTACT</Link>
        </ListLink>
      </ListWrapper>
    </div>
  </div>
);


const Footer = () => (
  <Foot />
);

const TemplateWrapper = ({ children }) => (
  <div>
  <video preload={"auto"} autoPlay={"autoplay"} muted loop
    style={{position: "fixed", minWidth: "100vw", zIndex: "-1000", opacity: "1"}}>
    <source src={code2} type={'video/mp4'}/>
  </video>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0,
        height: "80vh"
      }}
    >
      {children()}
    </div>
    <Foot>
    <ListWrapper>
    <h2> Where To Find Me</h2>
      <ListLink>
        <Link to="http://www.facebook.com">Facebook</Link>
        <Link to="http://www.facebook.com">Github</Link>
        <Link to="http://www.facebook.com">Linked In</Link>
      </ListLink>
    </ListWrapper>
    </Foot> 
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
