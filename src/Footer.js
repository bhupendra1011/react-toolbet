import React from "react";
import styled from "react-emotion";
import colors from "./colors";

const StyledFooter = styled("footer")`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: ${colors.footer};
  text-align: center;
`;

const Footer = () => <StyledFooter>This is the site footer ...</StyledFooter>;

export default Footer;
