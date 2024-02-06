"use client";

import React from "react";

//imoirt mui
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

//import icons
import { HiChevronUp } from "react-icons/hi";

//import categories service
import { getCategories } from "@/services/categoriesService";

//constants
import { categoryList } from "@/constant/category";

async function page() {
  const { categoriesList } = await getCategories();

  const AccordionHandler = (event) => {
    console.log(event.target);
  };
  return (
    <div className="md:container md:mx-auto md:max-w-2xl flex flex-col items-center mt-5">
      <div className="w-full">
        <h1 className="text-xl">چه چیزی را آگهی میکنید؟</h1>
        <p className="mt-3 text-sm text-light-primary-600">
          با جستجو در کادر زیر، دستهٔ آگهی را انتخاب کنید.
        </p>
        <input
          type="text"
          placeholder="مثلاً: اجارهٔ مسکونی، پراید، مبل، کیف و.."
          className="p-2 rounded border border-light-primary-400 w-full mt-3 outline-none focus:border-red-primary-500"
        />
      </div>
      <div className="w-full mt-2">
        <Accordion className="border-none rounded-none shadow-none">
          <AccordionSummary
            expandIcon={<HiChevronUp />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="flex items-center p-0 border-none rounded-none shadow-none text-light-primary-600"
          >
            دیدن تمام دسته‌های دیوار
          </AccordionSummary>
          <AccordionDetails>
            <List dense={true}>
              {categoriesList.map((category) => {
                return (
                  <Accordion
                    key={category._id}
                    className="border-none rounded-none shadow-none"
                    onChange={AccordionHandler}
                  >
                    <AccordionSummary
                      expandIcon={<HiChevronUp />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                      className="flex items-center p-0 border-none rounded-none shadow-none text-light-primary-600"
                    >
                      {category.label}
                    </AccordionSummary>
                    <AccordionDetails>
                      <List dense={true}>
                        {categoriesList.map((category) => {
                          return (
                            <ListItem
                              alignItems="flex-start"
                              className="pb-2 border-b border-light-primary-400"
                              key={category._id}
                            >
                              <ListItemButton className="rounded hover:bg-light-hover">
                                <ListItemText sx={{ textAlign: "right" }}>
                                  {category.label}
                                </ListItemText>
                              </ListItemButton>
                            </ListItem>
                          );
                        })}
                      </List>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </List>
          </AccordionDetails>
        </Accordion>
        <Divider />
      </div>
    </div>
  );
}

export default page;
