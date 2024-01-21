"use client";
import React, { useState } from "react";
import axios from "axios";
//import mui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

//import components
import SideBar from "@/app/(user)/SideBar";
import Card from "@/common/Card";

function page() {
  const [category, setCategory] = useState({
    label: "املاک",
    englishName: "estate",
  });
  const categoryHandler = async () => {
    await axios
      .post(`/api/categories`, { category })
      .then(({ data }) => console.log(data))
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
  };
  return (
    <Box className="container mx-auto" sx={{ flexGrow: 1 }} mt={5}>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <SideBar />
        </Grid>
        <Grid item xs={10}>
          <Grid container spacing={1} rowSpacing={5}>
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20,
            ].map((card) => (
              <Grid item xs={3}>
                <Card key={card} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <button onClick={categoryHandler} className="bg-red-200">
        create category
      </button>
    </Box>
  );
}

export default page;
