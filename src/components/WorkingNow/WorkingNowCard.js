import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  styled,
  Typography,
} from "@mui/material";
import { BsFillPinFill } from "react-icons/bs";

const StyledMainCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.notepad.main,
  color: theme.palette.black.main,
}));

const StyledColoredBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#ffd538",
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const WorkingNowCard = ({ title, description, date }) => {
  return (
    <Card>
      <StyledMainCard>
        <CardContent sx={{ display: "flex", flexDirection: "row" }}>
          <StyledColoredBox
            sx={{
              flex: 0.1,
              marginLeft: -2,
              marginTop: -2,
              marginBottom: -4,
              marginRight: 2,
            }}
          ></StyledColoredBox>
          <Box
            sx={{
              flex: 0.9,
            }}
          >
            <StyledTitle variant="h6" gutterBottom>
              <BsFillPinFill
                style={{ fontSize: 20, marginRight: "10px", color: "#de0a26" }}
              />
              {title}
            </StyledTitle>
            <Typography variant="body2" sx={{ mb: 1.5 }}>
              {description}
            </Typography>
            <Typography variant="caption">{date}</Typography>
          </Box>
        </CardContent>
        <CardActions></CardActions>
      </StyledMainCard>
    </Card>
  );
};

export default WorkingNowCard;
