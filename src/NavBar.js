import React from "react";
import { Link } from "@reach/router";
import styled from "react-emotion";
import colors from "./colors";

const Header = styled("header")`
  background-color: ${colors.background};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavBar = () => (
  <Header>
    <Link to="/">SITE HEADER HERE</Link>
    <Link to="/details">
      <span aria-label="next-page" role="img">
        ➡️
      </span>
    </Link>
  </Header>
);

export default NavBar;
