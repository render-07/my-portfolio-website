import React from "react";
import Marquee from "react-fast-marquee";
import { Box, Container, styled, Typography } from "@mui/material";
import { skillsImage } from "./utils/SkillsImage";

const skillsData = [
  "HTML",
  "CSS",
  "Javascript",
  "Node",
  "React",
  "Typescript",
  "Bootstrap",
  "MongoDB",
  "MySQL",
  "C",
  "C++",
  "C#",
  "PHP",
  "MaterialUI",
  "Microsoft Office",
];

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
  display: "flex",
}));

const StyledScrollingContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "3.5rem",
}));

const StyledSkillBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "10px",
  margin: "1.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem 1rem",
  transition: "300ms ease-in-out",
  boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.2)",
  color: theme.palette.white.main,
}));

const Skills = () => {
  return (
    <StyledMainBox>
      <StyledHeader
        variant="h2"
        component="div"
        sx={{
          fontSize: { xs: 40, md: 50 },
        }}
      >
        Skills That I Am Familiar With
      </StyledHeader>
      <StyledScrollingContainer>
        <Marquee
          gradient={false}
          speed={140}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="right"
        >
          {skillsData.map((skill, id) => (
            <StyledSkillBox
              key={id}
              sx={{
                width: { xs: 70, lg: 140 },
                height: { xs: 30, lg: 50 },
              }}
            >
              <Box sx={{ height: { xs: 30, lg: 50 } }} marginBottom="10px">
                <img
                  src={skillsImage(skill)}
                  alt={skill}
                  style={{ height: "100%" }}
                />
              </Box>

              <h3>{skill}</h3>
            </StyledSkillBox>
          ))}
        </Marquee>
      </StyledScrollingContainer>
    </StyledMainBox>
  );
};

export default Skills;
