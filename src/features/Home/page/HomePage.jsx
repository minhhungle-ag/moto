import React from "react";
import { Box } from "@mui/material";
import Banner from "../../../components/common/Banner";
import Company from "../components/Company";

function HomePage(props) {
  return (
    <Box>
      <Box>
        <Banner />
      </Box>

      <Box>
        <Company />
      </Box>
    </Box>
  );
}

export default HomePage;
