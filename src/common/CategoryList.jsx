import React from "react";
import Link from "next/link";

//imoirt mui
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

function CategoryList({ filteredSubCategoriesList, categoryHandler }) {
  return (
    <List dense={true}>
      {filteredSubCategoriesList &&
        filteredSubCategoriesList.map((subCategory) => {
          return (
            <Link href={`/new/${subCategory._id}`}>
              <ListItem
                alignItems="flex-start"
                className="pb-2 border-b border-light-primary-400"
                key={subCategory._id}
              >
                <ListItemButton
                  className="rounded hover:bg-light-hover"
                  onClick={() => categoryHandler(subCategory.englishName)}
                >
                  <ListItemText sx={{ textAlign: "right" }}>
                    {subCategory.label}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}
    </List>
  );
}

export default CategoryList;
