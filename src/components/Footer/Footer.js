import React from "react";
import { Box, Container, Grid, Link, styled, Typography } from "@mui/material";
import {
  IoIosCall,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoMdMail,
  IoLogoTwitter,
} from "react-icons/io";

const StyledHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.powderBlue.main,
  fontWeight: 700,
  alignItems: "center",
  justifyContent: "center",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: "inherit",
  "&:hover": {
    color: theme.palette.midnightBlue.main,
  },
}));

const StyledFooterContainer = styled(Container)(({ theme }) => ({
  color: theme.palette.white.main,
  top: "50%",
  left: "50%",
}));

const StyledNumberContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Footer = () => {
  return (
    <Box
      color="white"
      sx={{
        backgroundImage: "url(assets/420461.jpg)",
        backgroundSize: "contain, cover",
        position: "relative",
        textAlign: "center",
        backgroundRepeat: "repeat-x",
        height: { xs: "180px", sm: "200px", md: "200px", lg: "300px" },
      }}
    >
      <StyledFooterContainer>
        <StyledHeader
          component="div"
          sx={{
            display: { xs: "flex", md: "block" },
            paddingTop: { xs: "5px", lg: "40px" },
            fontSize: { xs: 25, lg: 35 },
          }}
        >
          Reach me!
        </StyledHeader>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12}>
            <Grid
              container
              justifyContent="center"
              spacing={2}
              sx={{ fontSize: { xs: 30, lg: 45 } }}
            >
              <Grid item>
                <StyledLink
                  href="https://www.facebook.com/render07"
                  target={"_blank"}
                >
                  <IoLogoFacebook />
                </StyledLink>
              </Grid>
              <Grid item>
                <StyledLink href="https://twitter.com/" target={"_blank"}>
                  <IoLogoTwitter />
                </StyledLink>
              </Grid>
              <Grid item>
                <StyledLink
                  href="https://www.linkedin.com/in/redner-ivan-padasay-cabra-ba2983228/"
                  target={"_blank"}
                >
                  <IoLogoLinkedin />
                </StyledLink>
              </Grid>
              <Grid item>
                <StyledLink
                  href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNqtbpngJVZWwlKXLqgdKHlqNcXkLVKckZdsJsbMwPTHvmWhmwwjpSBxTsmqHHzxKbGSjB"
                  target={"_blank"}
                >
                  <IoMdMail />
                </StyledLink>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <StyledNumberContainer
          sx={{
            fontSize: { xs: 15, lg: 25 },
          }}
        >
          <Typography
            component="div"
            sx={{ fontSize: { xs: 14, lg: 15 } }}
          ></Typography>
        </StyledNumberContainer>

        <Container sx={{ marginTop: 1 }}>
          <footer>
            <Typography sx={{ fontSize: { xs: 11, lg: 15 } }}>
              &copy; Copyright {new Date().getFullYear()}, Redner Ivan P. Cabra.
              All rights reserved.
            </Typography>
          </footer>
        </Container>
      </StyledFooterContainer>
    </Box>
  );
};

export default Footer;
