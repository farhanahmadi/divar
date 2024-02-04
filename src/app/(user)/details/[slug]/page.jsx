import React from "react";
import Link from "next/link";

//import mui
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Divider from "@mui/material/Divider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

//import icons
import { IoWarningOutline } from "react-icons/io5";
import { HiChevronUp } from "react-icons/hi";
import { IoShareSocialOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";

function page() {
  return (
    <div className="md:container md:mx-auto grid grid-cols-2 mt-5">
      {/* details of product */}
      <div className="col-span-1">
        <Breadcrumbs aria-label="breadcrumb" className="text-light-primary-600">
          <Link href="#">وسیله نقلیه</Link>
          <Link href="#">سواری و وانت</Link>
          <h5>۲۰۶ بدون رنگ بدون ضربه</h5>
        </Breadcrumbs>
        <div className="mt-5 flex flex-col gap-y-2">
          <h1 className="text-3xl text-black font-medium">
            ۲۰۶ بدون رنگ بدون ضربه
          </h1>
          <h2 className="text-light-primary-600 text-lg mt-2">
            لحظاتی پیش در ارومیه
          </h2>
          <Divider />
          <Accordion className="border-none rounded-none shadow-none">
            <AccordionSummary
              expandIcon={
                <HiChevronUp className="icon text-light-primary-600" />
              }
              className="flex items-center p-0 border-none rounded-none shadow-none text-light-primary-600"
            >
              <IoWarningOutline className="icon ml-2" />
              زنگ خظرهای قبل معامله
            </AccordionSummary>
            <AccordionDetails className="text-xs leading-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </AccordionDetails>
          </Accordion>
          <Divider />
          <div className="grid grid-cols-2 mt-5">
            <div className="col-span-1 flex items-center">
              <button className="redButton flex justify-center flex-1">
                اطلاعات تماس
              </button>
              <button className="grayButtonRounded flex justify-center flex-1">
                چت
              </button>
            </div>
            <div className="col-span-1 flex items-center gap-x-2 justify-end">
              <button className="p-2 rounded-full hover:bg-gray-100 transition">
                <IoShareSocialOutline className="icon text-light-primary-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition">
                <BsBookmark className="icon text-light-primary-600" />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-around mt-5">
            <div className="flex flex-col items-center justify-center gap-y-2 flex-1">
              <span className="text-light-primary-600">کارکرد</span>
              <span>۰</span>
            </div>
            <Divider orientation="vertical" flexItem />
            <div className="flex flex-col items-center justify-center gap-y-2 flex-1">
              <span className="text-light-primary-600">سال تولید</span>
              <span>۱۳۹۵</span>
            </div>
          </div>
          <Divider />
          <div className="flex items-center justify-between text-lg">
            <p className="text-light-primary-600">برند</p>
            <p>هیوندا</p>
          </div>
          <Divider />
          <div className="flex items-center justify-between text-lg">
            <p className="text-light-primary-600">قیمت</p>
            <p>۱۵۰۰۰۰۰ تومان</p>
          </div>
          <Divider />
          <div className="mt-2">
            <span className="text-xl">توضیحات</span>
            <p className="text-light-primary-600 mt-2 leading-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-1"></div>
    </div>
  );
}

export default page;
