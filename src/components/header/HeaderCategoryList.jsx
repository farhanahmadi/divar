import React from "react";

//constants
import { categoryList } from "@/constant/category";

//import icons
import { HiChevronLeft } from "react-icons/hi";

//import mui
import Divider from "@mui/material/Divider";

function HeaderCategoryList() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-30">
      <div className="grid grid-cols-5 max-w-7xl w-full relative mx-auto top-16 p-2 rounded border border-light-hover shadow text-sm bg-white">
        <ul className="col-span-1 flex flex-col items-start gap-y-1">
          {categoryList.map((category) => {
            return (
              <li
                className="w-full py-2 flex items-center justify-between hover:bg-light-hover transition rounded"
                key={category.id}
              >
                {category.label}
                <HiChevronLeft className="w-4 h-4" />
              </li>
            );
          })}
        </ul>
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
