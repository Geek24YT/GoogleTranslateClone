import { Box, IconButton, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MicIcon from "@mui/icons-material/Mic";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import KeyboardIcon from "@mui/icons-material/Keyboard";

function LeftTextArea({ enteredText, setEnteredText }) {
  const textareaRef = useRef();

  useEffect(() => {
    const resizeTextarea = () => {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    };

    if (textareaRef.current) {
      textareaRef.current.addEventListener("input", resizeTextarea, false);

      // Clean up the event listener when the component unmounts
      return () => {
        textareaRef.current.removeEventListener("input", resizeTextarea, false);
      };
    }
  }, []);

  const [charCount, setCharCount] = useState(0);
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const handleInputChange = (e) => {
    if (e.target.value.length <= 5000) {
      setEnteredText(e.target.value);
      setCharCount(e.target.value.length);
    }
  };
  const clearTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.value = "";
      textareaRef.current.style.height = "auto";
    }
  };

  const handleChange = (input) => {
    setEnteredText(input);
    console.log("Input changed", input);
  };

  const handleKeyPress = (button) => {
    console.log("Button pressed", button);
  };

  const toggleKeyboard = () => {
    setKeyboardOpen(!keyboardOpen);
  };

  return (
    <Box>
      <Box
        sx={{
          border: 1,
          borderColor: "divider",
          width: "98%",
          minHeight: "150px",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div className="input-container" style={{ display: "flex" }}>
          <textarea
            value={enteredText}
            style={{
              marginRight: "5%",
              border: "none",
              outline: "none",
              padding: "10px",
              fontSize: "20px",
              width: "90%",
            }}
            ref={textareaRef}
            className="dynamic-textarea"
            id="myInput"
            onChange={handleInputChange}
          ></textarea>
          <CloseIcon
            sx={{ color: "gray", m: "5px" }}
            onClick={clearTextarea}
            className="clear-button"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ marginBottom: "0.5rem", marginLeft: "0.7rem" }}>
            <IconButton>
              <MicIcon sx={{ color: "gray" }} />
            </IconButton>
            {charCount > 0 ? (
              <IconButton>
                <VolumeUpIcon sx={{ color: "gray" }} />
              </IconButton>
            ) : (
              ""
            )}
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography
              component="span"
              sx={{ color: "gray", fontSize: "12px", mr: "0.5rem" }}
            >
              {charCount}/5000
            </Typography>
            <KeyboardIcon
              sx={{ mr: "1rem", color: "gray" }}
              onClick={toggleKeyboard}
            />
          </div>
        </div>
      </Box>
      {keyboardOpen === true ? (
        <Keyboard onChange={handleChange} onKeyPress={handleKeyPress} />
      ) : (
        ""
      )}
    </Box>
  );
}

export default LeftTextArea;
