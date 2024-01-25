"use client";

import React, { useState } from "react";

//import mui
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

//import components
import CategoryList from "@/components/CategoryList";
import AuthModal from "@/app/(user)/auth/AuthModal";

//import icons
import { CiLocationOn } from "react-icons/ci";

//import constant
import { HeaderButtons } from "@/constant/buttons";

export default function Header() {
  const [categoryListOpen, setCategoryListOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  // open and close category list modal
  const categoryListHandler = () => {
    setCategoryListOpen(!categoryListOpen);
  };

  // open and close login/register list modal
  const authMoadlHandler = () => {
    setAuthModalOpen(!authModalOpen);
  };

  return (
    <>
      {categoryListOpen && (
        <div className="fixed right-0 left-0 top-0 bottom-0 bg-dark-primary-500/10 backdrop-blur-sm z-20"></div>
      )}
      <div className="shadow-text-field-shadow py-2 relative z-50 bg-white">
        <div className="grid grid-cols-3 container mx-auto">
          <div className="col-span-2 flex items-center">
            {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
          >
            <path
              fill="#A62626"
              fill-rule="evenodd"
              d="M8.386 14.617H8.28a.712.712 0 0 1-.595-.806c.473-3.117.63-8.092.63-8.127.035-.386.333-.7.736-.683a.715.715 0 0 1 .683.718c0 .21-.175 5.097-.648 8.303a.7.7 0 0 1-.7.595Zm10.037 1.296a.693.693 0 0 1-.666-.49.688.688 0 0 1 .455-.876c3.31-1.05 3.363-1.857 3.381-2.295.035-.683-.49-1.558-.7-1.856a.701.701 0 1 1 1.138-.824c.105.14 1.05 1.454.963 2.768-.087 1.594-1.314 2.575-4.361 3.556a.845.845 0 0 0-.105.009c-.035.004-.07.009-.105.009Zm-9.512 2.47a.656.656 0 0 1-.543-.262.683.683 0 0 1 .123-.981c1.436-1.139 2.4-2.155 3.03-3.048-.35-.175-.718-.438-.91-.876-.176-.403-.281-1.069.332-1.962.876-1.296 1.752-1.594 2.084-1.664a.871.871 0 0 1 1.016.613c.088.315.298 1.314-.332 2.838.84-.018 1.506-.245 2.014-.666.98-.788 1.033-2.12 1.033-2.137a.715.715 0 0 1 .719-.683.715.715 0 0 1 .683.718c0 .07-.07 1.944-1.524 3.17-.911.771-2.155 1.104-3.661.982-.718 1.103-1.857 2.4-3.626 3.8a.708.708 0 0 1-.438.158Zm3.801-7.076a3.134 3.134 0 0 0-.63.735c-.228.35-.246.543-.228.596.035.088.21.175.385.245.333-.665.438-1.191.473-1.576Zm.175 4.922a.71.71 0 0 0 .7.683h.036c.053 0 1.226-.035 2.908-.42a.702.702 0 0 0 .543-.841.702.702 0 0 0-.841-.543c-1.56.332-2.663.385-2.68.385a.704.704 0 0 0-.666.736ZM1.134 18.103c.122.175.35.28.56.28.14 0 .28-.035.42-.122 4.45-3.24 4.625-7.48 4.625-7.655 0-.385-.298-.7-.683-.718-.386-.018-.7.298-.718.683 0 .14-.176 3.731-4.047 6.551a.701.701 0 0 0-.157.981Z"
              clip-rule="evenodd"
            />
          </svg> */}
            logo
            <Divider
              style={{
                background: "#f5f5f5",
                margin: "10px 5px",
                height: "20px",
              }}
              orientation="vertical"
              variant="middle"
              flexItem
            />
            <button className="flex items-center gap-x-1 py-2 px-4 text-light-primary-600">
              <CiLocationOn className="icon" />
              ارومیه
            </button>
            <CategoryList
              open={categoryListOpen}
              categoryListHandler={categoryListHandler}
            />
            <input
              className="bg-light-primary-400 text-light-primary-600 rounded-md p-2 focus:outline-none border border-light-hover flex-1"
              type="text"
              placeholder="جستجو .."
            />
          </div>
          <div className="col-span-1 justify-end flex items-center">
            {HeaderButtons.map((button) => {
              return (
                <button
                  className="flex items-center gap-x-1 py-2 px-4 rounded text-light-primary-600 hover:text-dark-primary-500 hover:bg-light-hover transition"
                  key={button.id}
                >
                  {button.icon}
                  {button.label}
                </button>
              );
            })}
            <Button onClick={authMoadlHandler} className="redButton">
              ثبت آگهی
            </Button>
          </div>
        </div>
        <AuthModal
          authModalOpen={authModalOpen}
          authMoadlHandler={authMoadlHandler}
        />
      </div>
    </>
  );
}
