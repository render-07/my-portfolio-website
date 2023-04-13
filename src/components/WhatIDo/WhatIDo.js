import React from "react";
import {
  Box,
  Container,
  Grid,
  styled,
  Typography,
  Stack,
  Paper,
} from "@mui/material";
import { GoBrowser } from "react-icons/go";
import { AiFillBank } from "react-icons/ai";
import { GiVintageRobot } from "react-icons/gi";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 20,
  color: theme.palette.white.main,
  padding: "1.5rem",
}));

const StyledMainBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "100vw",
}));

const StyledHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.white.main,
  fontWeight: 700,
  alignItems: "center",
  justifyContent: "center",
  padding: "35px 90px",
}));

const StyledLeftGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flex: 0.5,
  alignItems: "center",
  justifyContent: "center",
}));

const StyledRightGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flex: 0.5,
  alignItems: "center",
  justifyContent: "center",
}));

const StyledIconContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flex: 0.3,
  justifyContent: "center",
  alignItems: "center",
}));

const StyledTextContainer = styled(Container)(({ theme }) => ({
  flex: 0.7,
}));

const StyledLineText = styled(Typography)(({ theme }) => ({
  color: theme.palette.blueGrotto.main,
}));

// const data = [
//   {
//     id: 1,
//     Title: "This Portfolio",
//     Description: "This also serves a practice for me as a developer.",
//   },
//   {
//     id: 2,
//     Title: "Job Hunting",
//     Description: "I'm part of the adulting club now.",
//   },
//   {
//     id: 3,
//     Title: "Playing Dota 2",
//     Description:
//       "I play during my break hours or when I'm lazy to do anything.",
//   },
//   {
//     id: 4,
//     Title: "Learn Learn Learn",
//     Description: "Learn new stuff in programming and get certifications.",
//   },
// ];

const WhatIDo = () => {
  return (
    <StyledMainBox>
      <StyledHeader
        variant="h2"
        component="div"
        sx={{
          display: { xs: "flex", md: "block" },
          fontSize: { xs: 40, md: 50 },
        }}
      >
        What I Do
      </StyledHeader>
      <Grid
        container
        sx={{
          flexDirection: {
            xs: "column",
            md: "column",
            lg: "row",
          },
          justifyContent: "flex-start",
          alignItems: "center",
          display: "flex",
          padding: "0 3rem 3rem 3rem",
        }}
      >
        <StyledLeftGrid item xs={6}>
          <Container
            sx={{
              height: 450,
              width: 450,
              display: { xs: "none", lg: "block" },
            }}
          >
            <img src="assets/coding.png" style={{ height: "100%" }} />
          </Container>
        </StyledLeftGrid>
        <StyledRightGrid item xs={6}>
          <Stack spacing={2}>
            <StyledPaper sx={{ display: { xs: "inline", lg: "flex" } }}>
              <StyledIconContainer sx={{ fontSize: { xs: 60, lg: 100 } }}>
                <AiFillBank />
              </StyledIconContainer>
              <StyledTextContainer
                sx={{ textAlign: { xs: "center", lg: "left" } }}
              >
                <StyledLineText variant="h3" component="div">
                  ___
                </StyledLineText>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ marginBottom: 2, fontWeight: 700 }}
                >
                  IST Switch Application Engineer
                </Typography>
                <Typography variant="h6" component="div">
                  I program / debug IST switch for bank institution.
                </Typography>
              </StyledTextContainer>
            </StyledPaper>

            <StyledPaper sx={{ display: { xs: "inline", lg: "flex" } }}>
              <StyledIconContainer sx={{ fontSize: { xs: 60, lg: 100 } }}>
                <GoBrowser />
              </StyledIconContainer>
              <StyledTextContainer
                sx={{ textAlign: { xs: "center", lg: "left" } }}
              >
                <StyledLineText variant="h3" component="div">
                  ___
                </StyledLineText>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ marginBottom: 2, fontWeight: 700 }}
                >
                  Web Development
                </Typography>
                <Typography variant="h6" component="div">
                  I learn web development in my college days, and I used this
                  knowledge to maintain my web portfolio.
                </Typography>
              </StyledTextContainer>
            </StyledPaper>

            <StyledPaper sx={{ display: { xs: "inline", lg: "flex" } }}>
              <StyledIconContainer sx={{ fontSize: { xs: 60, lg: 100 } }}>
                <GiVintageRobot />
              </StyledIconContainer>
              <StyledTextContainer
                sx={{ textAlign: { xs: "center", lg: "left" } }}
              >
                <StyledLineText variant="h3" component="div">
                  ___
                </StyledLineText>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ marginBottom: 2, fontWeight: 700 }}
                >
                  Arduino Programming
                </Typography>
                <Typography variant="h6" component="div">
                  I accept Arduino projects whenever I have free time.
                </Typography>
              </StyledTextContainer>
            </StyledPaper>
          </Stack>
        </StyledRightGrid>
      </Grid>
    </StyledMainBox>
  );
};

export default WhatIDo;
