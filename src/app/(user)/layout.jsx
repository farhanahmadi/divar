import { Inter } from "next/font/google";
import "../globals.css";
import { Toaster } from "react-hot-toast";

//import font
import estedadFont from "@/constant/localFonts";

//import theme
import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme } from "@/theme/Theme";

// import components
import Header from "@/app/(user)/Header";

//import react query provider
import Providers from "@/app/Providers";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="en">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <body
          suppressHydrationWarning={true}
          className={`${estedadFont.variable} font-sans`}
        >
          <Providers>
            <Toaster />
            <Header />
            {children}
          </Providers>
        </body>
      </ThemeProvider>
    </html>
  );
}
