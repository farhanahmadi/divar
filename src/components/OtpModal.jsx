"use client";

import React, { useState } from "react";
import OTPInput from "react-otp-input";
//import components
import Loading from "@/common/Loading";

//import mui
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";

//import icons
import { IoClose } from "react-icons/io5";

function OtpModal({
  step,
  time,
  open,
  otp,
  setOtp,
  authMoadlHandler,
  phoneNumber,
  getOtpIsPending,
  checkOtpIsPending,
  phoneNumberHandler,
  getOtpSubmitHandler,
  checkOtpSubmitHandler,
}) {
  return (
    <Modal open={open} onClose={authMoadlHandler}>
      <Box className="modal">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-xl">ورود به حساب کاربری</h1>
          <button onClick={authMoadlHandler}>
            <IoClose className="icon text-light-primary-600/80" />
          </button>
        </div>
        <Divider />
        {step === 1 ? (
          // send otp code section
          <form onSubmit={getOtpSubmitHandler}>
            <div className="mt-5">
              <h1 className="text-xl">شمارهٔ موبایل خود را وارد کنید</h1>
              <p className="text-light-primary-600/80 text-xs mt-5">
                قبل از ثبت آگهی، لطفاً وارد حساب خود شوید.
              </p>
              <p className="text-light-primary-600/80 text-xs mt-2">
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
            {getOtpIsPending ? (
              <Loading />
            ) : (
              <Button type="submit" className="redButton mt-5">
                ارسال کد
              </Button>
            )}
          </form>
        ) : (
          // confirm otp code section
          <form onSubmit={checkOtpSubmitHandler}>
            <div className="mt-5">
              <h1 className="text-xl">کد پیامک شده را وارد کنید</h1>
              <p className="text-light-primary-600/80 text-xs mt-2 flex items-center gap-x-1">
                شماره را اشتباه وارد کردید ؟
                <button type="button" className="text-blue-400">
                  تصحیح شماره
                </button>
              </p>
              <p className="text-light-primary-600/80 text-xs mt-2">
                ارسال مجدد کد بعد از
                <span className="text-blue-400"> {time} </span> ثانیه
              </p>
              <div dir="ltr" className="inputOtpField mt-5">
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={5}
                  renderSeparator={<span>-</span>}
                  shouldAutoFocus
                  inputStyle="form-input border text-light-primary-600 border-light-hover rounded-2xl font-bold focus:outline-none focus:border-red-primary-500"
                  containerStyle="flex gap-x-2 justify-between"
                  renderInput={(props) => (
                    <div className="flex gap-x-2 justify-center items-center w-full">
                      <input type="number" {...props} />
                    </div>
                  )}
                />
              </div>
              {checkOtpIsPending ? (
                <Loading />
              ) : (
                <Button type="submit" className="redButton mt-5">
                  تایید
                </Button>
              )}
            </div>
          </form>
        )}
      </Box>
    </Modal>
  );
}

export default OtpModal;
