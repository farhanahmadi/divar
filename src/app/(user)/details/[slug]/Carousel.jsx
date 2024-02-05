"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

// import components

// Import Swiper components & styles
import {
  Navigation,
  Scrollbar,
  A11y,
  Keyboard,
  Controller,
  Thumbs,
  FreeMode,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";

// import mui
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  border: "none",
};

function Carousel() {
  const swiper1Ref = useRef();
  const swiper2Ref = useRef();

  const [fullScreen, setFullScreen] = useState();
  const [open, setOpen] = React.useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //   set selected photo as active photo to full screen carousel
  const fullScreenHandler = (event) => {
    setFullScreen(event.activeIndex);
    handleOpen();
  };

  const carouselList = [
    {
      id: 1,
      alt: "pride",
      src: "/assets/img/pride1.jpg",
    },
    {
      id: 2,
      alt: "pride",
      src: "/assets/img/pride2.jpg",
    },
    {
      id: 3,
      alt: "pride",
      src: "/assets/img/pride3.jpg",
    },
    {
      id: 4,
      alt: "pride",
      src: "/assets/img/pride4.jpg",
    },
  ];

  return (
    <>
      <Swiper
        //   control both swipers with one command
        onSwiper={(swiper) => {
          swiper1Ref.current = swiper;
          swiper1Ref.current.controller.control = swiper2Ref.current;
        }}
        modules={[Navigation, Thumbs, Scrollbar, A11y, Keyboard, Controller]}
        spaceBetween={50}
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper }}
        navigation={{ enabled: true }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        controller
        className="rounded-xl max-h-[500px]"
        onClick={fullScreenHandler}
      >
        {carouselList.map(({ id, src, alt }) => (
          <SwiperSlide key={id} className="aspect-w-16 aspect-h-9">
            <Image
              src={src}
              alt={alt}
              fill
              quality={100}
              objectFit="cover"
              objectPosition="center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper cursor-pointer"
      >
        {carouselList.map(({ id, src, alt }) => (
          <SwiperSlide key={id} className="max-w-16 mt-5">
            <Image
              src={src}
              alt={alt}
              width={68}
              height={68}
              objectFit="cover"
              objectPosition="center"
              className="h-16 rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* // full screen carousel */}
      <Modal
        open={open}
        onClose={handleClose}
        className="bg-white-two bg-opacity-10 backdrop-blur-sm"
      >
        <Box className="outline-none" sx={style}>
          <Swiper
            //   control both swipers with one command
            onSwiper={(swiper) => {
              swiper2Ref.current = swiper;
              swiper2Ref.current.controller.control = swiper1Ref.current;
            }}
            modules={[Navigation, Scrollbar, A11y, Keyboard, Controller]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            initialSlide={fullScreen}
            keyboard={{ enabled: true, onlyInViewport: true }}
            controller
            className="max-w-5xl"
          >
            {carouselList.map(({ id, src, alt }) => (
              <SwiperSlide key={id} className="aspect-w-16 aspect-h-9">
                <img src={src} alt={alt} className="object-contain" />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Modal>
    </>
  );
}

export default Carousel;
