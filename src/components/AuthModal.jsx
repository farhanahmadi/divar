"use client";

import React, { useState } from "react";

//import mui
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

//import icons
import { IoClose } from "react-icons/io5";

function AuthModal({
  open,
  authMoadlHandler,
  phoneNumber,
  phoneNumberHandler,
  submitHandler,
}) {
  return (
    <Modal open={open} onClose={authMoadlHandler}>
      <Box className="modal">
        <div className="flex items-center justify-between">
          <h1 className="text-xl">ورود به حساب کاربری</h1>
          <button onClick={authMoadlHandler}>
            <IoClose className="icon text-light-primary-600/80" />
          </button>
        </div>
        {/* send otp code section */}
        <form onSubmit={submitHandler}>
          <div className="mt-10">
            <h1 className="text-xl">شمارهٔ موبایل خود را وارد کنید</h1>
            <p className="text-light-primary-600/80 text-sm mt-5">
              قبل از ثبت آگهی، لطفاً وارد حساب خود شوید.
            </p>
            <p className="text-light-primary-600/80 text-sm mt-2">
              کد تأیید به این شماره پیامک می‌شود.
            </p>
          </div>
          <div className="mt-5">
            <label className="relative">
              <input
                dir="ltr"
                type="text"
                className="modalTextField"
                placeholder="شماره موبایل"
                value={phoneNumber}
                onChange={phoneNumberHandler}
              />
              <span className="text-sm text-light-primary-600/80 absolute -top-1 left-2 translate-y-1/2">
                ۹۸+
              </span>
            </label>
          </div>
          <p className="text-sm text-light-primary-600/80 mt-5">
            <span className="text-red-500">شرایط استفاده از خدمات </span>و
            <span className="text-red-500"> حریم خصوصی </span> دیوار را
            می‌پذیرم.
          </p>
          <Button type="submit" className="redButton mt-5">
            تایید
          </Button>
        </form>
        {/* confirm otp code section  */}
      </Box>
    </Modal>
  );
}

export default AuthModal;
