import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Box, styled, Typography } from "@mui/material";
import { MdSchool } from "react-icons/md";

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

const Education = () => {
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
        Education
      </StyledHeader>
      <VerticalTimeline lineColor="#e8e8e8">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            backgroundColor: "#05051f",
            color: "#fff",
            boxShadow: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #05051f",
          }}
          date="2018 - 2022"
          iconStyle={{ background: "#e8e8e8" }}
          icon={<MdSchool color="#dc143c" />}
        >
          <img src="assets/PUPLogo.ico" style={styles.icon}></img>
          <h3
            className="vertical-timeline-element-title"
            style={{ marginBottom: 7 }}
          >
            Polytechnic University of the Philippines
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            1016 Anonas, Sta. Mesa, Maynila, Kalakhang Maynila
          </h4>
          <p>Bachelor of Science in Computer Engineering</p>
          {/* <Box
            display="flex"
            width={500}
            height={80}
            sx={{
              backgroundImage: "url(assets/border.PNG)",
              backgroundSize: "contain, cover",
              textAlign: "center",
              height: { xs: "180px", sm: "200px", md: "200px", lg: "150px" },
              width: { xs: "180px", sm: "200px", md: "200px", lg: "150px" },
            }}
          >
            <Box m="auto">DOST SCHOLAR</Box>
          </Box> */}
          <p style={styles.awards}>Awards: DOST Scholar, LANI Scholar</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            backgroundColor: "#05051f",
            color: "#fff",
            boxShadow: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #05051f",
          }}
          date="2012 - 2018"
          iconStyle={{ background: "#e8e8e8" }}
          icon={<MdSchool color="#dc143c" />}
        >
          <img src="assets/tagscie.ico" style={styles.icon}></img>
          <h3
            className="vertical-timeline-element-title"
            style={{ marginBottom: 7 }}
          >
            Taguig Science High School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            5 M. L. Quezon Avenue, Taguig, Metro Manila
          </h4>
          <p style={styles.awards}>Awards: Graduated With Honors</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            backgroundColor: "#05051f",
            color: "#fff",
            boxShadow: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #05051f",
          }}
          date="2006 - 2012"
          iconStyle={{ background: "#e8e8e8" }}
          icon={<MdSchool color="#dc143c" />}
        >
          <img src="assets/cardones.ico" style={styles.icon}></img>
          <h4
            className="vertical-timeline-element-title"
            style={{ marginBottom: 7 }}
          >
            Capt. Jose Cardones Memorial Elementary School
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            19 Friendship, Brgy, Taguig, 1633 Metro Manila
          </h4>
          <p></p>
          <p style={styles.awards}>
            Awards: First Honorable Mention, Huwarang Bata Award
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </StyledMainBox>
  );
};

const styles = {
  icon: { width: "100px", height: "100px", marginBottom: 20 },
  awards: {
    fontSize: 16,
    fontFamily: "Playfair Display",
    fontWeight: 400,
  },
};
export default Education;
