"use client";

import { CarProps } from "@/app/types";
import { calculateCarRent } from "@/utils";
import Image from "next/image";
import { useState } from "react";

import { CustomButton } from "./";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);

  function closeModalHandler() {
    setIsOpen(false);
  }
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        {carRent}$<span className="self-end text-[14] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/model-icon.png"
          alt="car-image"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div
          className="flex group-hover:invisible
        w-full justify-between text-gray"
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="steering-wheel.svg"
              width={20}
              height={20}
              alt="wheel"
            />
            <p className="text-[14] ">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14] ">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="gas.svg" width={20} height={20} alt="wheel" />
            <p className="text-[14] ">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-gray-600 "
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails isOpen={isOpen} closeModal={closeModalHandler} car={car} />
    </div>
  );
};

export default CarCard;
