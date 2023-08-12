import React from "react";
import { Box, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from "@mui/icons-material/Apps";
import logo from "../images/logo.png";

function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        height: "4.5%",
        borderBottom: "1px solid rgba(0,0,0,.12)",
        p: 2,
      }}
    >
      <Box
        className="header__left"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <MenuIcon sx={{ ml: "1rem", mr: "1.3rem", color: "gray" }} />
        <Box
          component="img"
          src={logo}
          alt="logo"
          sx={{
            width: "150px",
            height: "auto",
            display: { xs: "none", sm: "none", md: "block" },
          }}
        />
      </Box>
      <Box
        className="header__right"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          mr: "1rem",
        }}
      >
        <AppsIcon sx={{ color: "gray", mr: "1.2rem" }} />
        <Avatar alt="Travis Howard" sx={{ width: "30px", height: "30px" }} />
      </Box>
    </Box>
  );
}

export default Header;
