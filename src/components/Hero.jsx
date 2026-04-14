import React, { useEffect } from "react";
import Heading from "./Heading";
import Subheading from "./Subheading";
import heroPerson from "../assets/images/heroPerson.webp";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import heroMockup from "../assets/images/heroMockup.webp";
const whatsappOfferLink =
  "https://wa.me/31626239678?text=Hoi!%20Ik%20wil%20graag%20een%20offerte%20aanvragen%20voor%20een%20website.";

function Hero() {
  useEffect(() => {
    // Reveal the mockup when it actually enters the viewport
    const element = document.querySelector(".hero-mockup-reveal");

    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-16 gap-12 md:px-24 md:pt-24">
      <div className="max-w[740px] flex flex-col gap-8">
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
        <div className="flex flex-col md:flex-row space-between gap-4 md:gap-9">
          <PrimaryButton
            href={whatsappOfferLink}
            text="Offerte aanvragen →"
            className="shadow-[0_4px_10px_theme(colors.accent/25%)]"
          />
          <SecondaryButton to="/projecten" text="Bekijk portfolio" />
        </div>
      </div>
      <div className="relative md:w-[415px]">
        <img
          src={heroPerson}
          alt="girl with laptop in the hands"
          className="drop-shadow-[0_0_60px_rgba(0,0,0,0.12)] w-full h-auto"
        />
        <img
          src={heroMockup}
          alt="laptop phone website mockup"
          className="hero-mockup-reveal absolute bottom-[-100px] md:bottom-[-70px]  w-[350px] right-[-110px] md:right-[-130px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        />
      </div>
    </div>
  );
}

export default Hero;
