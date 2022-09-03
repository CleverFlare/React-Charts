// @ts-nocheck
import React from "react";
import Chart from "components/Chart";
import { Box } from "@mui/system";
import { AppBar, Toolbar, Typography } from "@mui/material";

const App = () => {
  return (
    <div>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "white",
          color: "black",
          borderBottom: "1px solid #80808033",
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Flare - Charts
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
          p: 2,
        }}
      >
        <Chart variant="bar" />
        <Chart variant="line" />
        <Chart variant="pie" />
        <Chart variant="radar" />
        <Chart variant="doughnut" />
      </Box>
    </div>
  );
};

export default App;
