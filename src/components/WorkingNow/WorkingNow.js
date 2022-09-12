import React from "react";
import WorkingNowCard from "./WorkingNowCard";
import { Box, Grid, styled, Typography } from "@mui/material";

const data = [
  {
    id: 1,
    Title: "Grad-waiting",
    Description:
      "I'm finishing our thesis project and we are in publishing state.",
    Date: "Sept 06 2022",
  },
  {
    id: 2,
    Title: "This Portfolio",
    Description: "This also serves a practice for me as a developer.",
    Date: "August 31 2022",
  },
  {
    id: 3,
    Title: "Job Hunting",
    Description: "I'm part of the adulting club now.",
    Date: "August 31 2022",
  },
  {
    id: 4,
    Title: "Playing Dota 2",
    Description:
      "I play during my break hours or when I'm lazy to do anything.",
    Date: "August 31 2022",
  },
  {
    id: 5,
    Title: "Learn Learn Learn",
    Description: "Learn new stuff in programming and get certifications.",
    Date: "August 31 2022",
  },
];

const StyledMainBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "100vw",
  paddingBottom: 30,
}));

const StyledHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.white.main,
  fontWeight: 700,
  alignItems: "center",
  justifyContent: "center",
  padding: "35px 90px",
}));

const WorkingNow = () => {
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
        What I Am Working Now
      </StyledHeader>
      <Box sx={{ flexGrow: 1, margin: { xs: "0 40px", lg: "0 90px" } }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {data.map((value, index) => (
            <Grid item key={index} xs={12} sm={4} md={3}>
              <WorkingNowCard
                title={value.Title}
                description={value.Description}
                date={value.Date}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </StyledMainBox>
  );
};

export default WorkingNow;
