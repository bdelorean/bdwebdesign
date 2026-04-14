import React from "react";
import HeroInner from "../components/HeroInner";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import ServicesSlider from "../components/ServicesSlider/ServicesSlider";
import LastCTA from "../components/LastCTA/LastCTA";
import Prices from "../components/Prices";
import WebServices from "../components/WebServices";
import GraphicDesignSection from "../components/GraphicDesignSection";
const whatsappOfferLink =
  "https://wa.me/31626239678?text=Hoi!%20Ik%20wil%20graag%20een%20offerte%20aanvragen%20voor%20een%20website.";

function Diensten() {
  return (
    <main>
      <HeroInner>
        <div className="flex flex-col gap-9">
          <Heading
            text={
              <>
                Onze <span>diensten</span>
              </>
            }
          />
          <Subheading
            subheading={
              <>
                Maatwerk websites die jouw bedrijf versterken <br />
                Voor zzp’ers en kleine bedrijven die online professioneel willen
                groeien.
              </>
            }
          />
          <div className="flex flex-col md:flex-row space-between gap-9">
            <PrimaryButton
              href={whatsappOfferLink}
              text="Offerte aanvragen →"
              className="shadow-[0_4px_10px_theme(colors.accent/25%)]"
            />
            <SecondaryButton to="/projecten" text="Bekijk portfolio" />
          </div>
        </div>
      </HeroInner>
      <ServicesSlider />

      <WebServices />
      <GraphicDesignSection />
      <Prices />
      <LastCTA />
    </main>
  );
}

export default Diensten;
