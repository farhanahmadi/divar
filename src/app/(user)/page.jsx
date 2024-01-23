import React from "react";

//import mui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

//import components
import SideBar from "@/app/(user)/SideBar";
import CardComponent from "@/common/Card";

async function page() {
  return (
    <Box className="container mx-auto" sx={{ flexGrow: 1 }} mt={5}>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <SideBar />
        </Grid>
        <Grid item xs={10}>
          <Grid container spacing={5} rowSpacing={5}>
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20,
            ].map((card) => (
              <Grid item xs={4}>
                <CardComponent key={card} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default page;
