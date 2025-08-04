import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

export default function Header() {
  return (
    <>
      <CssBaseline />
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: "white",
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          color: "black",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontWeight: "bold",
              }}
            >
              BlogmeUP
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
