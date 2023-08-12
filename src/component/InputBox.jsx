import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

import LeftTextArea from "./LeftTextArea";
import RightTextArea from "./RightTextArea";
import LanguageDropdown from "./LanguageDropdown";

// Custom hook for debouncing
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

function InputBox() {
  const [translateFromLanguag, setTranslateFromLanguag] = useState("all");
  const [translateToLanguag, setTranslateToLanguag] = useState("hi");

  const [enteredText, setEnteredText] = useState("");
  const [fetchedText, setFetchedText] = useState("");

  // Debounce enteredText
  const debouncedEnteredText = useDebounce(enteredText, 2000);

  useEffect(() => {
    if (debouncedEnteredText) {
      fetch(
        `https://api.mymemory.translated.net/get?q=${debouncedEnteredText}!&langpair=${
          translateFromLanguag === "all" ? "en" : translateFromLanguag
        }|${translateToLanguag}`
      )
        .then((res) => res.json())
        .then((data) => {
          setFetchedText(data.responseData.translatedText);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [debouncedEnteredText, translateFromLanguag, translateToLanguag]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        flexDirection: { xs: "column", md: "row" },
        m: "1rem",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <LanguageDropdown
          currentLanguage={translateFromLanguag}
          setLanguage={setTranslateFromLanguag}
          languages={[
            { id: "all", label: "Detect language" },
            { id: "en", label: "English" },
            { id: "hi", label: "Hindi" },
          ]}
        />
        <LeftTextArea
          enteredText={enteredText}
          setEnteredText={setEnteredText}
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <LanguageDropdown
          currentLanguage={translateToLanguag}
          setLanguage={setTranslateToLanguag}
          languages={[
            { id: "hi", label: "Hindi" },
            { id: "en", label: "English" },
            { id: "fr", label: "French" },
          ]}
        />
        <RightTextArea
          fetchedText={fetchedText}
          setFetchedText={setFetchedText}
        />
      </Box>
    </Box>
  );
}

export default InputBox;
