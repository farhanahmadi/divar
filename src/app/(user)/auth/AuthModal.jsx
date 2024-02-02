"use client";

import React, { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

//import components
import OtpModal from "@/components/OtpModal";

//import services
import { checkOtp, createUser } from "@/services/usersServices";

const RESEND_TIME = 90;

function AuthModal({ authModalOpen, authMoadlHandler }) {
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [time, setTime] = useState(RESEND_TIME);

  // create user mutation
  const { isPending: getOtpIsPending, mutateAsync: mutateGetOtp } = useMutation(
    {
      mutationFn: createUser,
    }
  );

  // check otp mutation
  const {
    isPending: checkOtpIsPending,
    data,
    mutateAsync: mutateCheckOtp,
  } = useMutation({
    mutationFn: checkOtp,
  });

  const phoneNumberHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  //send phoneNumber to db
  const getOtpSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const { message } = await mutateGetOtp({ phoneNumber });
      toast.success(message);
      setTime(RESEND_TIME);
      setStep(2);
      setOtp("");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  //check otp code
  const checkOtpSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const { message } = await mutateCheckOtp({ phoneNumber, otp });
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <OtpModal
      step={step}
      time={time}
      otp={otp}
      setOtp={setOtp}
      open={authModalOpen}
      authMoadlHandler={authMoadlHandler}
      phoneNumber={phoneNumber}
      getOtpIsPending={getOtpIsPending}
      checkOtpIsPending={checkOtpIsPending}
      phoneNumberHandler={phoneNumberHandler}
      getOtpSubmitHandler={getOtpSubmitHandler}
      checkOtpSubmitHandler={checkOtpSubmitHandler}
    />
  );
}

export default AuthModal;
