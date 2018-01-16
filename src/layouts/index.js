import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";

import "./index.css";

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
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
  }
`;

const Foot = styled.div`
  background: tomato;
  height: 40px;
  margin: 0 auto;
`;


const Header = () => (
  <div
    style={{
      background: "tomato",
      marginBottom: "1.45rem"
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
          Gatsby
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
        paddingTop: 0
      }}
    >
      {children()}
    </div>
    <Foot/> 
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
