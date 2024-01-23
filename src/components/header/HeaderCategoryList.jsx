import React from "react";
//import icons
import { HiChevronLeft } from "react-icons/hi";

//import mui
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

//constants
import { categoryList } from "@/constant/category";

function HeaderCategoryList({ categoriesList }) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-30">
      <div className="grid grid-cols-5 max-w-7xl w-full relative mx-auto top-16 p-2 rounded border border-light-hover shadow text-sm bg-white">
        <List dense={true}>
          {categoriesList.map((category) => {
            return (
              <ListItem key={category._id} alignItems="flex-start">
                <ListItemButton className="rounded hover:bg-light-hover px-0">
                  {categoryList.map(
                    (item) =>
                      item.englishName === category.englishName && (
                        <ListItemIcon key={item.id} className="min-w-8">
                          {item.icon}
                        </ListItemIcon>
                      )
                  )}

                  <ListItemText sx={{ textAlign: "right" }}>
                    {category.label}
                  </ListItemText>
                  <ListItemIcon className="min-w-8">
                    <HiChevronLeft className="icon" />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <Divider
          style={{
            background: "#f5f5f5",
            margin: "0px 10px 0px 0px",
            width: "2px",
          }}
          orientation="vertical"
          variant="middle"
          flexItem
        />
      </div>
    </div>
  );
}

export default HeaderCategoryList;
