import React from "react";

//import icons
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiWarningOctagonThin } from "react-icons/pi";
import { HiChevronLeft } from "react-icons/hi";

//import mui
import Divider from "@mui/material/Divider";

function Feedback() {
  return (
    <div>
      <div className="flex items-center justify-between my-10">
        بازخورد شما دربارهٔ این آگهی چیست؟
        <div>
          <div className="flex items-center">
            <button className="p-2 rounded-full hover:bg-gray-100 transition">
              <BiLike className="icon text-light-primary-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition">
              <BiDislike className="icon text-light-primary-600" />
            </button>
          </div>
        </div>
      </div>
      <button className="w-full mt-5 mb-2 flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <PiWarningOctagonThin className="icon text-light-primary-600" />
          <p className="text-light-primary-600">
            گزارش کلاهبرداری و رفتار مشکوک
          </p>
        </div>
        <HiChevronLeft className="icon text-light-primary-600" />
      </button>
      <Divider />
    </div>
  );
}

export default Feedback;
