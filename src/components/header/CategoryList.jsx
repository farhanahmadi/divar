"use client";

import React, { useState } from "react";

//import component
import HeaderCategoryList from "@/components/header/HeaderCategoryList";

//import icons
import { HiChevronDown } from "react-icons/hi";

function CategoryList() {
  const [open, setOpen] = useState(false);

  const categoryListHandler = () => {
    setOpen(!open);
  };

  return (
    <button
      onClick={categoryListHandler}
      className="flex items-center gap-x-1 py-2 px-4 text-light-primary-600"
    >
      دسته بندی
      <HiChevronDown className="icon" />
      {open && <HeaderCategoryList />}
    </button>
  );
}

export default CategoryList;
