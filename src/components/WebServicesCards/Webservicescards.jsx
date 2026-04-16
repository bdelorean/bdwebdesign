import WebserviceCard from "./Webservicecard";

import web1 from "../../assets/svg/webservice1.svg";
import web2 from "../../assets/svg/webservice2.svg";
import web3 from "../../assets/svg/webservice3.svg";

function Webservicescards() {
  const services = [
    {
      icon: web1,
      title: "One page site / Landing page",
      description:
        "Wist je dat niet elk bedrijf een website met veel pagina's nodig heeft? Heb je een kleine onderneming en bied je vooral één dienst aan, dan kan een one page website precies zijn wat je nodig hebt. Alle belangrijke informatie staat overzichtelijk op één pagina, zodat bezoekers snel kunnen zien wie je bent, welke diensten je aanbiedt en hoe ze contact met je kunnen opnemen.",
      sectionLabel: "Ideaal voor:",
      sectionItems: [
        "Nagelstudio's",
        "Fotografen",
        "Massagetherapeuten",
        "Lokale freelancers",
      ],
    },
    {
      icon: web2,
      title: "Business Website",
      description:
        "Een business website biedt meer ruimte om je bedrijf professioneel te presenteren. Met meerdere pagina's wordt informatie duidelijk opgebouwd en kunnen diensten uitgebreider worden uitgelegd. Bezoekers kunnen ontdekken wie je bent, wat je doet en waarom ze voor jouw bedrijf moeten kiezen. Daarnaast helpt een duidelijke structuur ook bij een betere vindbaarheid in Google.",
      sectionLabel: "Kenmerken:",
      sectionItems: [
        "SEO-geoptimaliseerd",
        "Meerdere pagina's",
        "Uitgebreide dienstomschrijvingen",
      ],
    },
    {
      icon: web3,
      title: "Webshop",
      description:
        "Voor bedrijven die producten online willen verkopen, ontwikkelen wij webshops die aangepast zijn aan de behoeften van het project. De webshop kan gebouwd worden met Shopify of WordPress, afhankelijk van de wensen van het project en het aantal producten. Wij zorgen voor een vlekkeloze gebruikerservaring.",
      sectionLabel: "Platforms:",
      sectionItems: ["Shopify", "WooCommerce (WordPress)", "Maatwerk oplossingen"],
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3 md:gap-10">
      {services.map((service, index) => (
        <WebserviceCard key={index} {...service} />
      ))}
    </div>
  );
}

export default Webservicescards;
