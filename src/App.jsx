import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { alpha, Box, Stack } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import DiplomaticIt from "./features/DiplomaticIt/DiplomaticIt";
import HomePage from "./features/Home/page/HomePage";

function App() {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        bgcolor: "primary.main",
        color:theme=> alpha(theme.palette.common.white, 0.7)
      }}
    >
      <Header />

      <Box sx={{ flexGrow: 1 }}>
        <Routes>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="diplomatic-it" element={<DiplomaticIt />} />
        </Routes>
      </Box>

      <Footer />
    </Stack> 

  );
}

export default App;
