"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

//imoirt mui
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Divider from "@mui/material/Divider";

//import icons
import { HiChevronUp } from "react-icons/hi";

//import components
import Loading from "@/common/Loading";

//import categories service
import { getCategories } from "@/services/categoriesService";

//constants
import { categoryList } from "@/constant/category";

//import hooks
import { useGetCategories, useGetSubCategories } from "@/hooks/useCategories";
import CategoryList from "@/common/CategoryList";

function page() {
  const router = useRouter();

  const [categoryId, setCategoryId] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    category: "",
    subCategory: "",
  });

  const { isPending: categoriesListPending, data: categoriesListData } =
    useGetCategories();
  const {
    isPending: filteredSubCategoriesListPending,
    data: filteredSubCategoriesListData,
  } = useGetSubCategories(categoryId);
  const { categoriesList } = categoriesListData || {};
  const { filteredSubCategoriesList } = filteredSubCategoriesListData || {};

  const categoryHandler = (value) => {
    console.log(value);
  };

  const accordionHandler = (id) => {
    setCategoryId(id);
    setExpanded(id === categoryId ? false : id);
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
            {categoriesListPending ? (
              <Loading />
            ) : (
              categoriesList &&
              categoriesList.map((category) => {
                return (
                  <Accordion
                    key={category._id}
                    className="border-none rounded-none shadow-none"
                    onChange={() => accordionHandler(category._id)}
                    expanded={expanded === category._id}
                  >
                    <AccordionSummary
                      expandIcon={<HiChevronUp />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                      className="flex items-center p-0 border-none rounded-none shadow-none text-light-primary-600"
                    >
                      <div className="min-w-8">
                        {categoryList.map((item) => (
                          <span key={item.id}>
                            {item.englishName === category.englishName &&
                              item.icon}
                          </span>
                        ))}
                      </div>
                      {category.label}
                    </AccordionSummary>
                    <AccordionDetails>
                      {filteredSubCategoriesListPending ? (
                        <Loading />
                      ) : (
                        <CategoryList
                          category={category}
                          filteredSubCategoriesList={filteredSubCategoriesList}
                          categoryHandler={categoryHandler}
                        />
                      )}
                    </AccordionDetails>
                  </Accordion>
                );
              })
            )}
          </AccordionDetails>
        </Accordion>
        <Divider />
      </div>
    </div>
  );
}

export default page;
