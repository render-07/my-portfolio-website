import React from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { AppBar, styled, Toolbar, Typography } from "@mui/material";

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.white.main,
}));

const StyledLogo = styled(Typography)(() => ({
  fontSize: 40,
  fontWeight: 900,
  flex: 1,
}));

const StyledContacts = styled(Typography)(() => ({
  fontWeight: 500,
  flex: 1,
}));

const Topbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <StyledLogo>render07.</StyledLogo>
        <StyledContacts
          sx={{ display: { xs: "none", md: "flex" } }}
        ></StyledContacts>
        <StyledContacts sx={{ display: { xs: "none", md: "flex" } }}>
          <EmailIcon style={{ marginRight: "10px" }} />
          rednerivanpadasay@gmail.com
        </StyledContacts>
      </StyledToolBar>
    </AppBar>
  );
};

export default Topbar;
