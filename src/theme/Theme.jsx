"use client";

import { createTheme } from "@mui/material/styles";

//import font
import estedadFont from "@/constant/localFonts";

export const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: estedadFont.style.fontFamily,
  },
  direction: "rtl",
});
