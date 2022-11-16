import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Box, styled, Typography } from "@mui/material";
import { HiOutlineStatusOnline } from "react-icons/hi";
import {
  DiJavascript1,
  DiMongodb,
  DiNetmagazine,
  DiNodejs,
  DiJava,
} from "react-icons/di";
import { MdWork } from "react-icons/md";
import { SiCplusplus } from "react-icons/si";
import { SiArduino } from "react-icons/si";
import { AiFillClockCircle } from "react-icons/ai";

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

const Experiences = () => {
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
        Experiences
      </StyledHeader>

      <VerticalTimeline lineColor="#e8e8e8">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            backgroundColor: "#05051f",
            color: "#fff",
            boxShadow: "none",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #05051f",
          }}
          date="November 2022 - present"
          iconStyle={{ background: "#e8e8e8" }}
          icon={<MdWork color="#dc143c" />}
        >
          <SiCplusplus size={70} />
          <DiJava size={70} />

          <h3 style={{ color: "#dc143c", fontSize: "25px" }}>
            Software Engineer I at FIS Global Solutions Philippines Inc.
          </h3>
          <p>
            Working as a Software Engineer I at FIS Global Solutions Philippines
            Inc.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            backgroundColor: "#05051f",
            color: "#fff",
            boxShadow: "none",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #05051f",
          }}
          date="December 2021 - present"
          iconStyle={{ background: "#e8e8e8" }}
          icon={<AiFillClockCircle color="#dc143c" />}
        >
          <SiArduino size={70} />

          <h3 style={{ color: "#dc143c", fontSize: "25px" }}>
            Freelance Programmer
          </h3>
          <p>Freelance Arduino programmer.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            backgroundColor: "#05051f",
            color: "#fff",
            boxShadow: "none",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #05051f",
          }}
          date="March 2020 - November 2022"
          iconStyle={{ background: "#e8e8e8" }}
          icon={<MdWork color="#dc143c" />}
        >
          <DiMongodb size={70} />
          <DiNodejs size={70} />
          <DiJavascript1 size={70} />

          <h3 style={{ color: "#dc143c", fontSize: "25px" }}>
            Backend Developer at Stack Educational Technology Inc.
          </h3>
          <p>
            Worked as a backend developer for the Stack Educational Technology
            Inc. specializing in making and testing RESTful APIs.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            backgroundColor: "#05051f",
            color: "#fff",
            boxShadow: "none",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #05051f",
          }}
          date="March 2020 - November 2022"
          iconStyle={{ background: "#e8e8e8" }}
          icon={<MdWork color="#dc143c" />}
        >
          <DiMongodb size={70} />
          <DiNetmagazine size={70} />
          <HiOutlineStatusOnline size={70} />
          <h3 style={{ color: "#dc143c", fontSize: "25px" }}>
            Desktop Application Developer at Stack Educational Technology Inc.
          </h3>
          <p>
            Worked as a desktop application developer for the Stack Educational
            Technology Inc. specifically an identification system using RFID
            technology.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </StyledMainBox>
  );
};

export default Experiences;
