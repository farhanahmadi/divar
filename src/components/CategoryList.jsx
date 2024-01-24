"use client";

import React from "react";

//import component
import HeaderCategoryList from "@/components/HeaderCategoryList";

//import icons
import { HiChevronDown } from "react-icons/hi";

//import categories hooks
import { useGetCategories } from "@/hooks/useCategories";

function CategoryList({ open, categoryListHandler }) {
  const { isLoading, data } = useGetCategories();
  const { categoriesList } = data || {};

  return (
    <button
      onClick={categoryListHandler}
      className="flex items-center gap-x-1 py-2 px-4 text-light-primary-600"
    >
      دسته بندی
      <HiChevronDown className="icon" />
      {!isLoading && open && (
        <HeaderCategoryList categoriesList={categoriesList} />
      )}
    </button>
  );
}

export default CategoryList;
