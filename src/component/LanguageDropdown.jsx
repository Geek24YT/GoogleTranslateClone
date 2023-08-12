import { IconButton, Menu, MenuItem, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

function LanguageDropdown({ currentLanguage, setLanguage, languages }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang) => {
    setLanguage(lang);
    setAnchorEl(null);
  };

  return (
    <>
      <Tabs
        sx={{ border: "none" }}
        value={currentLanguage}
        onChange={(event, newValue) => setLanguage(newValue)}
        aria-label="custom tabs example"
      >
        {languages.map((lang) => (
          <Tab
            sx={{
              textTransform: "none",
              fontWeight: 600,
              display: {
                xs: currentLanguage === lang.id ? "initial" : "none",
                md: "initial",
              },
            }}
            label={lang.label}
            value={lang.id}
          />
        ))}
        <IconButton sx={{ width: 50, height: 50 }} onClick={handleClick}>
          <ExpandMoreOutlinedIcon />
        </IconButton>
      </Tabs>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {languages.map((lang) => (
          <MenuItem onClick={() => handleClose(lang.id)}>{lang.label}</MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default LanguageDropdown;
