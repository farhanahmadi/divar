"use client";

import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

//import components
import OtpModal from "@/components/OtpModal";

//import mui
import Button from "@mui/material/Button";

//import services
import { createUser, createUserJWT } from "@/services/usersServices";
const RESEND_TIME = 90;

function AuthModal({ authModalOpen, authMoadlHandler }) {
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");

  // create user mutation
  const {
    isPending,
    data,
    error,
    mutateAsync: mutateGetOtp,
  } = useMutation({
    mutationFn: createUser,
  });

  // to create user fake JWT code
  const {
    isPending: JWTIspending,
    data: JWTData,
    error: JWTError,
    mutateAsync: mutateGetJWT,
  } = useMutation({
    mutationFn: createUserJWT,
  });

  const phoneNumberHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

  //send phoneNumber to db
  const getOtpSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const data = await mutateGetOtp({ phoneNumber });
      const JWT = await mutateGetJWT({
        name: "divarUser",
        email: "divarUser@gmail.com",
        password: phoneNumber,
        avatar: "https://picsum.photos/800",
      });
      console.log(JWT);
      toast.success(data.message);
      setStep(2);
      setTime(RESEND_TIME);
      setOtp("");
    } catch (error) {}
  };
  return (
    <OtpModal
      open={authModalOpen}
      authMoadlHandler={authMoadlHandler}
      phoneNumber={phoneNumber}
      phoneNumberHandler={phoneNumberHandler}
      getOtpSubmitHandler={getOtpSubmitHandler}
    />
  );
}

export default AuthModal;
