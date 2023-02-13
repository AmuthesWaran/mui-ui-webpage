
import React, { useState } from 'react'
import { createTheme, ThemeProvider } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Add from "./componets/Add";
import { Feed } from "./componets/Feed";
import { Navbar } from "./componets/Navbar";
import { Rightbar } from "./componets/Rightbar";
import { Slidebar } from "./componets/Slidebar";

function App() {

  const [mode, setMode] = useState("light")

    const darkTheme = createTheme ({
      palette:{
        mode: mode
      }
    })
    return (
      <ThemeProvider theme={darkTheme}>
  
      
      <Box bgcolor={"background.default"} color={"text.primary"} >
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between" >
        <Slidebar setMode={setMode} mode={mode} />
        <Feed />
        <Rightbar />
        </Stack>
        <Add />
      </Box>
  
      </ThemeProvider>

      
   
   
   
   );
  }


export default App;
