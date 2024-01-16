import React from "react";

//import mui
import Divider from "@mui/material/Divider";

//import icons
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineChevronDown } from "react-icons/hi";

//import constant
import { HeaderButtons } from "@/constant/buttons";

function Header() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div>logo</div>
        <Divider orientation="vertical" />
        <button className="flex items-center gap-x-1 text-light-primary-600">
          ارومیه
          <SlLocationPin className="icon" />
        </button>
        <button className="flex items-center gap-x-1 text-light-primary-600">
          دسته بندی
          <HiOutlineChevronDown className="icon" />
        </button>
        <label>
          <input
            className="bg-light-primary-400 rounded-md p-2 shadow-text-field-shadow"
            type="text"
            placeholder="جستجو .."
          />
        </label>
      </div>
      <div>
        {HeaderButtons.map((button) => {
          return (
            <button className="flex items-center gap-x-1 p-2" key={button.id}>
              {button.icon}
              {button.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
