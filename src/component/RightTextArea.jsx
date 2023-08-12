import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import ThumbsUpDownOutlinedIcon from "@mui/icons-material/ThumbsUpDownOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

function RightTextArea({ fetchedText, setFetchedText }) {
  const textareaRef = useRef();
  const resizeTextarea = () => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.addEventListener("input", resizeTextarea, false);

      // Clean up the event listener when the component unmounts
      return () => {
        textareaRef.current.removeEventListener("input", resizeTextarea, false);
      };
    }
  }, []);

  useEffect(() => {
    if (textareaRef.current) {
      resizeTextarea();
    }
  }, [fetchedText]);

  const handleInputChange = (e) => {
    setFetchedText(e.target.value);
  };
  const clearTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.value = "";
      textareaRef.current.style.height = "auto";
    }
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
          backgroundColor: "#f5f5f5",
        }}
      >
        <div className="input-container" style={{ display: "flex" }}>
          <textarea
            disabled="true"
            value={fetchedText}
            style={{
              marginRight: "5%",
              border: "none",
              outline: "none",
              padding: "10px",
              fontSize: "20px",
              backgroundColor: "#f5f5f5",
              width: "90%",
            }}
            ref={textareaRef}
            className="dynamic-textarea"
            id="myInput"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ marginBottom: "0.5rem", marginLeft: "0.7rem" }}>
            <VolumeUpIcon sx={{ color: "gray" }} />
          </div>
          <div>
            <ContentCopyIcon sx={{ mr: 2, color: "gray" }} />
            <ThumbsUpDownOutlinedIcon sx={{ mr: 2, color: "gray" }} />
            <ShareOutlinedIcon sx={{ mr: 2, color: "gray" }} />
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default RightTextArea;
