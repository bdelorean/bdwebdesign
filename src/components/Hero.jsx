import React from "react";
import Heading from "./Heading";
import Subheading from "./Subheading";
import heroPerson from "../assets/images/heroPerson.webp";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import heroMockup from "../assets/images/heroMockup.webp";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-10 py-10 md:px-24 md:py-24">
      <div className="max-w[740px] flex flex-col gap-9">
        <Heading 
        text={<>
        Laat je website voor<br /> 
         je spreken
        </>} />
        <Subheading
          subheading={
            <>
              Maatwerk websites die jouw bedrijf versterken. <br />
              Voor zzp’ers en kleine bedrijven die online professioneel willen
              groeien.
            </>
          }
        ></Subheading>
        <div className="flex flex-col md:flex-row space-between gap-9">
          <PrimaryButton
            to="/contact"
            text="Start project →"
            className="shadow-[0_4px_10px_theme(colors.accent/25%)]"
          />
          <SecondaryButton to="/projecten" text="Bekijk portfolio" />
        </div>
      </div>
      <div className="relative w-[415px]">
        <img
          src={heroPerson}
          alt="girls with laptop in the hands"
          className=" drop-shadow-[0_0_60px_rgba(0,0,0,0.12)] w-full h-auto"
        />
        <img
          src={heroMockup}
          alt="laptop phone website mockup"
          className="absolute bottom-[-70px]  w-[350px] right-[-130px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        />
      </div>
    </div>
  );
}

export default Hero;
