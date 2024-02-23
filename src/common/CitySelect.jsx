"use client";

import React, { useState } from "react";

// import constants
import { cities } from "@/constant/cities";

//import icons
import { HiChevronUp } from "react-icons/hi";

function CitySelect() {
  const [open, setOpen] = useState(false);
  const [acitveCity, setAcitveCity] = useState("ارومیه");

  const cityHandler = (value) => {
    setAcitveCity(value);
    setOpen(false);
  };
  return (
    <div className="mt-5">
      <div className="w-full relative group">
        <button
          className="w-full flex items-center justify-between rounded border border-light-hover group-hover:border-red-primary-500 transition p-2 cursor-pointer outline-none"
          onClick={() => setOpen(!open)}
        >
          <span>{acitveCity}</span>
          <HiChevronUp
            className={`icon transition ${open ? "rotate-180" : "rotate-0"}`}
          />
        </button>
        {open && (
          <ul className="absolute top-12 w-full max-h-96 overflow-y-auto shadow-text-field-shadow rounded border border-light-hover p-2 cursor-pointer outline-none focus:border-red-primary-500 focus:ring-0 focus:ring-offset-0">
            {cities.map((city) => (
              <li
                className="cursor-pointer px-1 py-2 text-light-primary-600 hover:bg-light-hover/40 transition rounded"
                key={city.id}
                value={city.label}
                onClick={() => cityHandler(city.label)}
              >
                {city.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CitySelect;
