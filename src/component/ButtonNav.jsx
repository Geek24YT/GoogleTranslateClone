import { Box, Button } from "@mui/material";
import React from "react";
import TranslateIcon from "@mui/icons-material/Translate";
import ImageIcon from "@mui/icons-material/Image";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import LanguageIcon from "@mui/icons-material/Language";
function ButtonNav() {
  const buttonStyles = {
    textTransform: "none",
    fontWeight: "bold",
    borderColor: "#e3e3e3",
    borderRadius: "4px",
    marginRight: "8px",
  };

  const icons = [
    { icon: TranslateIcon, name: "Text" },
    { icon: ImageIcon, name: "Image" },
    { icon: ContactPageIcon, name: "Document" },
    { icon: LanguageIcon, name: "Website" },
  ];
  const Buttons = () => {
    return icons.map((icon, index) => (
      <Button
        key={index}
        variant="outlined"
        style={buttonStyles}
        sx={{ mt: { xs: "0.5rem", md: "0" } }}
        startIcon={<icon.icon />}
      >
        {icon.name}
      </Button>
    ));
  };

  return (
    <Box style={{ margin: "1rem" }}>
      <Buttons />
    </Box>
  );
}

export default ButtonNav;
