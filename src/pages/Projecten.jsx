import React, { useEffect } from "react";
import HeroInner from "../components/HeroInner";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import Project from "../components/Project";
import promoSpik from "../assets/images/promoSpik.webp";
import promoWTW from "../assets/images/promoWTW.webp";
import promoMartinus from "../assets/images/promoMartinus.webp";
import promoBeauty from "../assets/images/promoBeauty.webp";
const whatsappOfferLink =
  "https://wa.me/31626239678?text=Hoi!%20Ik%20wil%20graag%20een%20offerte%20aanvragen%20voor%20een%20website.";

const whatsappLink =
  "https://wa.me/31626239678?text=Hoi!%20Ik%20wil%20graag%20gratis%20advies%20over%20mijn%20website.";

function Projecten() {
  useEffect(() => {
    // Watch images and reveal them when they enter the viewport
    const elements = document.querySelectorAll(".reveal-up");

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
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    // Clean up the observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <HeroInner>
        <div className="flex flex-col gap-9">
          <Heading text={<>Ze gingen je voor...</>} />
          <Subheading
            subheading={
              <>
                Een greep uit de projecten die wij met passie hebben
                gerealiseerd.
              </>
            }
          />
          <div className="flex flex-col md:flex-row space-between gap-9">
            <PrimaryButton
              href={whatsappOfferLink}
              text="Offerte aanvragen →"
              className="shadow-[0_4px_10px_theme(colors.accent/25%)]"
            />
            <SecondaryButton href={whatsappLink} text="Gratis advies" />
          </div>
        </div>
      </HeroInner>
      <Project
        image={promoSpik}
        imageAlt="Website preview van Spik & Span met Simona"
        imageClassName="h-[500px] md:h-[750px]"
        badge="SCHOONMAAK BEDRIJF"
        title="Web design voor Spik & Span met Simona"
        text={`Spik en Span met Simona is een bedrijf dat professionele schoonmaakdiensten aanbiedt. Voor dit project heb ik eerst de doelgroep geanalyseerd, waarna de website is ontworpen met een duidelijke focus op deze doelgroep, zonder het elegante en vrouwelijke karakter te verliezen.

Samen met de klant zijn de diensten logisch gestructureerd, zodat bezoekers eenvoudig het pakket kunnen kiezen dat het beste bij hen past, met nadruk op de kwaliteit van de aangeboden diensten.`}
        services="Uitgevoerde diensten: custom design, copywriting, website ontwikkeling, logo en grafisch ontwerp, visitekaartjes en brochures."
        websiteUrl="https://spikenspanmetsimona.nl"
      />
      <Project
        reverse
        className="bg-primary/5"
        image={promoWTW}
        imageAlt="Website preview van WTW Pedicure"
        badge="MEDISCH PEDICURE SALON"
        title="WTW Pedicure"
        text={`WTW Pedicure is een website voor een medisch pedicuresalon. Het design is subtiel en uitgevoerd in een boho-stijl, volledig afgestemd op de wensen van de klant. De informatie is logisch en overzichtelijk opgebouwd, zodat bezoekers snel vinden wat ze zoeken — van uitleg over de behandelingen tot een duidelijke prijslijst.`}
        services="Uitgevoerde diensten: custom design, copywriting, website ontwikkeling en logo ontwerp."
        websiteUrl="https://wtwpedicure.nl"
      />
      <Project
        image={promoMartinus}
        imageAlt="Website preview van Martinus Alle Klussen"
        imageClassName="h-[500px] md:h-[750px]"
        badge="BOUW BEDRIJF"
        title="Website voor Martinus Alle Klussen"
        text={`Martinus Alle Klussen is een bouwbedrijf dat complete renovatiediensten aanbiedt voor zowel binnen- als buitenwerk. De wens van de klant was een eenvoudige website die snel en duidelijk de juiste informatie overbrengt aan potentiële klanten.

De diensten zijn samen met de klant logisch gestructureerd, zodat bezoekers gemakkelijk vinden wat ze zoeken. Op strategische plaatsen zijn subtiele call-to-action knoppen toegevoegd, zodat gebruikers snel contact kunnen opnemen zonder lang te moeten zoeken.`}
        services="Uitgevoerde diensten: custom design, copywriting, website ontwikkeling en logo ontwerp."
        websiteUrl="https://martinusalleklussen.be"
      />
      <Project
        reverse
        className="bg-primary/5"
        image={promoBeauty}
        imageAlt="Website preview van Beauty Salon For You"
        badge="SCHOONHEIDSSALON"
        title="Beauty Salon For You"
        text={`Beauty Salon For You is een schoonheidssalon gevestigd in België, gericht op een breed internationaal publiek. Daarom is de website ontwikkeld in drie talen.

Het design is elegant en afgestemd op de wensen van de klant. De website bevat duidelijke informatie over alle behandelingen, aangevuld met een overzichtelijke prijslijst.`}
        services="Uitgevoerde diensten: custom design, copywriting, website ontwikkeling en vertalingen."
        websiteUrl="https://beautysalon-foryou.be"
      />
    </div>
  );
}

export default Projecten;
