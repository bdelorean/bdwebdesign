import Pricecard from "./Pricecard";

function Pricecards() {
  const cards = [
    {
      label: "Basis",
      title: "One page site",
      price: "350 €",
      features: [
        "Modern & responsive design",
        "Overzichtelijke structuur",
        "Professionele uitstraling",
        "Vertrouwen opbouwen",
      ],
    },
    {
      label: "Groei",
      badge: "MEEST GEKOZEN",
      title: "Business Website",
      price: "750 €",
      features: [
        "Meerdere pagina's",
        "Duidelijke structuur",
        "Uitgebreide informatie",
        "Gratis logo-ontwerp inbegrepen",
      ],
      highlighted: true,
    },
    {
      label: "E-commerce",
      title: "Webshop",
      price: "In overleg",
      features: [
        "Shopify of WordPress",
        "Veilige betaalmethoden",
        "Eenvoudig beheer",
        "Gebruiksvriendelijke shop",
      ],
    },
    {
      label: "Design",
      title: "Graphic Design",
      price: "v.a. 50 €",
      features: [
        "Shopify of WordPress",
        "Veilige betaalmethoden",
        "Eenvoudig beheer",
        "Gebruiksvriendelijke shop",
      ],
    },
  ];

  return (
    <div className="pricecards-grid grid gap-10 md:grid-cols-4 md:gap-8">
      {cards.map((card, index) => (
        <Pricecard key={index} {...card} />
      ))}
    </div>
  );
}

export default Pricecards;
