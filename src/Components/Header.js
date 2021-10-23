import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import logo from "../Images/cinepolis.png";
import "../App.css";

export default function Header() {
  return (
    <Box >
      <AppBar position="static">
        <Toolbar
          sx={{
            height: 150,
            backgroundColor: "#344ceb",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img id="image" src={logo} alt="logo de mercado libre" />
        </Toolbar>
      </AppBar> 
      <br/>
    </Box>
  );
}
