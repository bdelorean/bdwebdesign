import React from "react";
import Title from "../Title";
import Text from "../Text";
import PrimaryButton from "../PrimaryButton";

function BenefitsText() {
  return (
    <div className="md:w-1/2 flex flex-col flex-start gap-8 md:gap-10">
      <div className="flex flex-col gap-6">
        <Title title="De kracht van een goede website" />
        <Text
          text="“Maar ik heb toch al social media?”"
          className="p-4 italic bg-white border-l-4 border-accent md:w-3/4 rounded-xl"
        />
      </div>
      <Text
        text="Dat horen we vaak. Social media is een mooie aanvulling, maar het vervangt geen eigen website.

        Een website geeft je controle, overzicht en een professionele basis online. Je bepaalt zelf hoe je bedrijf wordt gepresenteerd, zonder afhankelijk te zijn van algoritmes of platformen.
        
        Bovendien zorgt een website voor meer vertrouwen bij potentiële klanten en maakt het het makkelijker om contact op te nemen of jouw diensten te ontdekken."
         className="md:w-[85%]"
      />
      <PrimaryButton
        to="/contact"
        text="Vraag een offerte aan →"
        className="shadow-[0_4px_10px_theme(colors.accent/25%)] font-semibold font-sans tracking-wide md:w-[50%]"
      />
    </div>
  );
}

export default BenefitsText;
