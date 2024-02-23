"use client";

import React from "react";
import { useParams } from "next/navigation";

// import components
import CitySelect from "@/common/CitySelect";

function page() {
  const { slug } = useParams();
  return (
    <div className="md:container md:mx-auto md:max-w-2xl mt-10">
      <h1 className="text-2xl mb-5">ثبت آگهی</h1>
      <div className="p-2 rounded-md border border-light-hover flex items-center relative max-h-32 justify-center gap-x-5">
        <h5 className="text-2xl text-light-primary-600">سواری و وانت</h5>
        <div>
          <img
            className="w-60 h-40"
            src="/assets/img/changeCategory.png"
            alt="category"
          />
        </div>
        <button className="redButton absolute top-1/2 -translate-y-1/2 -left-20">
          تغییر دسته بندی
        </button>
      </div>
      <CitySelect />
    </div>
  );
}

export default page;
