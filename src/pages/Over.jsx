import { useEffect } from "react";
import HeroInner from "../components/HeroInner";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import Title from "../components/Title";
import Text from "../components/Text";
import LastCTA from "../components/LastCTA/LastCTA";
import VisitWebsiteButton from "../components/VisitWebsiteButton";
import promoSpik from "../assets/images/promoSpik.webp";
import promoWTW from "../assets/images/promoWTW.webp";
import promoMartinus from "../assets/images/promoMartinus.webp";
import promoBeauty from "../assets/images/promoBeauty.webp";

const whatsappLink =
  "https://wa.me/31626239678?text=Hoi!%20Ik%20wil%20graag%20meer%20weten%20over%20een%20website%20voor%20mijn%20bedrijf.";

const reasons = [
  {
    title: "Persoonlijke aanpak",
    text: "Je werkt direct met mij. Geen onduidelijke lijnen, maar helder contact en een samenwerking die persoonlijk aanvoelt.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0ZM4.5 20.25a7.5 7.5 0 0115 0"
        />
      </svg>
    ),
  },
  {
    title: "Webdesign met strategie",
    text: "Een website moet niet alleen mooi zijn, maar ook vertrouwen wekken, duidelijk zijn en passen bij jouw doelen als ondernemer.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M7.5 3.75v3m9-3v3M6.75 10.5h10.5m-10.5 4.5h6"
        />
        <rect
          x="3.75"
          y="5.25"
          width="16.5"
          height="15"
          rx="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Voor kleine en middelgrote bedrijven",
    text: "Ik begrijp wat kleinere ondernemingen nodig hebben: een professionele uitstraling, overzicht en een website die echt voor je werkt.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 19.5h16.5M6 19.5V9.75A.75.75 0 016.75 9h3.75a.75.75 0 01.75.75v9.75m2.25 0V5.25a.75.75 0 01.75-.75H18a.75.75 0 01.75.75V19.5"
        />
      </svg>
    ),
  },
];

const strengths = [
  "Persoonlijke samenwerking",
  "Professionele uitstraling",
  "Duidelijke structuur",
  "Een website die bij jouw merk past",
];

const projects = [
  {
    title: "Spik & Span met Simona",
    image: promoSpik,
    href: "https://spikenspanmetsimona.nl",
  },
  {
    title: "WTW Pedicure",
    image: promoWTW,
    href: "https://wtwpedicure.nl",
  },
  {
    title: "Martinus Alle Klussen",
    image: promoMartinus,
    href: "https://martinusalleklussen.be",
  },
  {
    title: "Beauty Salon For You",
    image: promoBeauty,
    href: "https://beautysalon-foryou.be",
  },
];

function Over() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".over-project-title.reveal-up, .over-photo-reveal.reveal-up"
    );

    if (!elements.length) return;

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
        threshold: 0.2,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <HeroInner>
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="flex max-w-3xl flex-col gap-9">
            <Heading
              text={
                <>
                  Over <span>mij</span>
                </>
              }
            />
            <Subheading
              subheading={
                <>
                  Webdesign met aandacht voor uitstraling, duidelijkheid en groei.
                  <br />
                  Voor ondernemers die professioneel online zichtbaar willen zijn.
                </>
              }
              className="max-w-2xl"
            />
            <div className="flex flex-col gap-6 md:flex-row">
              <PrimaryButton
                href={whatsappLink}
                text="Plan een kennismaking"
                className="shadow-[0_4px_10px_theme(colors.accent/25%)]"
              />
              <SecondaryButton to="/projecten" text="Bekijk portfolio" />
            </div>
          </div>

          <div className="hidden md:flex md:flex-1 md:justify-end">
            <img
              src="/images/LastCtaGirl.webp"
              alt="Bianca, webdesigner"
              className="w-full max-w-[420px] object-contain drop-shadow-[0_34px_44px_rgba(15,23,42,0.28)]"
            />
          </div>
        </div>
      </HeroInner>

      <section className="">
        <div className="grid md:grid-cols-[3fr_1fr]">
          <div className="flex flex-col gap-6 bg-[linear-gradient(180deg,rgba(126,24,32,0.96)_0%,rgba(140,28,38,0.94)_100%)] px-6 py-10 text-center text-white md:px-24 md:py-14">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Over Bianca
            </p>

            <Title
              title="Ik ontwerp websites die professioneel aanvoelen en vertrouwen uitstralen."
              className="mx-auto max-w-2xl text-center !text-white"
            />

            <Text
              text="Ik ben een gepassioneerde webdesigner en ik help kleine en middelgrote bedrijven met een sterke, professionele online aanwezigheid. Geen standaard templates, maar websites die passen bij jouw merk, jouw stijl en jouw doelen."
              className="mx-auto max-w-2xl text-center leading-8 !text-white/85 md:text-lg"
            />

            <div className="mx-auto max-w-2xl border-y border-white/20 py-5">
              <div className="grid gap-5 text-center md:grid-cols-3 md:gap-6">
                {strengths.slice(0, 3).map((strength) => (
                  <div key={strength}>
                    <p className="font-heading text-lg leading-snug text-white">
                      {strength}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="over-photo-reveal reveal-up min-h-[340px] bg-[#efe7e1]">
            <img
              src="/images/overFoto.webp"
              alt="Bianca, webdesigner"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-24 md:py-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <Title title="Bekijk mijn projecten" />
          <Text
            text="Een selectie van websites die ik met zorg heb ontworpen voor verschillende ondernemers."
            className="max-w-2xl leading-7"
          />
        </div>

        <div className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-4 md:gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="flex flex-col items-center gap-3 md:gap-5"
            >
              <article
                className="group flex aspect-[0.78] w-full items-center justify-center overflow-hidden rounded-[24px] bg-cover bg-center p-6 text-center shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-[0_10px_12px_rgba(15,23,42,0.18)]"
                style={{
                  backgroundImage: `linear-gradient(rgba(14,24,42,0.38), rgba(14,24,42,0.34)), url(${project.image})`,
                }}
              >
                <h3
                  className="over-project-title reveal-up font-heading text-2xl font-medium leading-tight text-white [text-shadow:0_4px_18px_rgba(15,23,42,0.55)]"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  {project.title}
                </h3>
              </article>

              <VisitWebsiteButton
                href={project.href}
                text="Visit website"
                className="min-w-[190px] justify-center border border-primary/20 shadow-[0_8px_18px_rgba(15,23,42,0.08)] hover:-translate-y-[2px] hover:shadow-[0_8px_10px_rgba(15,23,42,0.18)]"
              />
            </div>
          ))}
        </div>
      </section>

      <LastCTA />
    </main>
  );
}

export default Over;
