import React from "react";

//import mui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

//constants
import { categoryList } from "@/constant/category";

//import categories service
import { getCategories } from "@/services/categoriesService";

export const dynamic = "force-dynamic";
export const runtime = "edge";

async function SideBar() {
  const { categoriesList } = await getCategories();
  return (
    <Box p={1}>
      <List dense={true}>
        {categoriesList.map((category) => {
          return (
            <ListItem alignItems="flex-start" key={category._id}>
              <ListItemButton className="rounded hover:bg-light-hover">
                <ListItemIcon className="min-w-8">
                  {categoryList.map(
                    (item) =>
                      item.englishName === category.englishName && item.icon
                  )}
                </ListItemIcon>
                <ListItemText sx={{ textAlign: "right" }}>
                  {category.label}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Divider
        style={{
          background: "#f5f5f5",
        }}
        variant="middle"
        flexItem
      />
    </Box>
  );
}

export default SideBar;
