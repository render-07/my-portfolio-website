import React, { useEffect, useRef } from "react";
import "./Landing.scss";
import { Box, Container, Grid, styled, Typography } from "@mui/material";
import { init } from "ityped";
import { fadeInRight, fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

const StyledColoredContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  left: "0%",
  marginLeft: 0,
  position: "absolute",
  zIndex: -1,
}));

const StyledLeftContainer = styled(Container)(() => ({
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
}));

const StyledTextContainer = styled(Container)(() => ({
  flex: 0.5,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const StyledTextHeader1 = styled(Typography)(({ theme }) => ({
  color: theme.palette.white.main,
}));

const StyledTextHeader2 = styled(Typography)(({ theme }) => ({
  color: theme.palette.white.main,
}));

const StyledTextHeader3 = styled(Typography)(({ theme }) => ({
  color: theme.palette.skyBlue.main,
}));

const Landing = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      typeSpeed: 50,
      strings: ["Software Engineer", "Arduino Hobbyist", "He/Him"],
    });
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100vw",
        height: { xs: "auto", lg: "calc(100vh - 70px)" },
      }}
    >
      <Grid
        container
        spacing={0}
        sx={{
          flexDirection: {
            xs: "column",
            md: "column",
            lg: "row",
          },
          justifyContent: "center",
          alignItems: "center",
          marginTop: { xs: 0, lg: 15 },
        }}
      >
        <Grid item xs={6}>
          <StyledLeftContainer>
            <StyledColoredContainer
              sx={{
                display: { xs: "flex", lg: "flex" },
                height: { xs: "15vh", lg: "190vh" },
                width: { xs: "100%", lg: "25%" },
                // marginTop: ,
                top: { xs: 0, lg: "auto" },
              }}
            ></StyledColoredContainer>
            <StyleRoot>
              <div className="imageContainer" style={styles.imageContainer}>
                <img src="assets/me.JPG" style={styles.image}></img>
              </div>
            </StyleRoot>
          </StyledLeftContainer>
        </Grid>
        <Grid item xs={6}>
          <StyleRoot>
            <div
              style={{
                animation: "x 1.5s",
                animationName: Radium.keyframes(fadeInRight, "fadeInRight"),
              }}
            >
              <StyledTextContainer
                style={styles.text}
                sx={{
                  textAlign: { xs: "center", lg: "start" },
                  color: {
                    xs: "black",
                    md: "black",
                  },
                  marginTop: { xs: 2, lg: "auto" },
                }}
              >
                <StyledTextHeader2
                  variant="h2"
                  component="div"
                  sx={{ fontSize: { xs: 20, md: 30, lg: 35 }, fontWeight: 700 }}
                >
                  Hello, I am
                </StyledTextHeader2>
                <StyledTextHeader1
                  variant="h1"
                  component="div"
                  sx={{
                    fontSize: { xs: 25, md: 45, lg: 60 },
                    margin: "10px 0px",
                    fontWeight: 700,
                  }}
                >
                  Redner Ivan P. Cabra
                </StyledTextHeader1>
                <StyledTextHeader3
                  variant="h3"
                  component="div"
                  sx={{
                    fontSize: { xs: 17, md: 25, lg: 30 },
                    fontWeight: 700,
                  }}
                >
                  <span ref={textRef}></span>
                </StyledTextHeader3>
              </StyledTextContainer>
            </div>
          </StyleRoot>
        </Grid>
      </Grid>
    </Box>
  );
};

const styles = {
  imageContainer: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
    display: "flex",
    justifyContent: "center",
  },

  image: {
    borderRadius: "50%",
    height: "100%",
    boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.2)",
  },
};

export default Landing;
