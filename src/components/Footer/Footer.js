import React from "react";
import styled from "styled-components";
// material UI Imports
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

// styled components
const FooterSection = styled.div`
  display: flex;
  justify-content: center;
  height: 10rem;
`;

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <FooterSection>
      <Box mt={8}>
        <Copyright />
      </Box>
    </FooterSection>
  );
};

export default Footer;
