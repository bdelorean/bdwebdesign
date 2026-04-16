import React from "react";
import Title from "./Title";
import Subheading from "./Subheading";
import Pricecards from "./PriceCards/PriceCards";

function Prices() {
  return (
    <section id="prijzen" className="flex flex-col gap-12 p-6 md:p-24">
      <div className="flex flex-col items-center gap-4">
        <Title title="KIES HET JUISTE PAKKET" 
        className="text-center"/>
        <Subheading
          className="text-center"
          subheading={
            <>
              Transparante prijzen zonder verrassingen achteraf. <br />
              Alle genoemde prijzen zijn exclusief BTW.
            </>
          }
        />
      </div>
      <Pricecards />
    </section>
  );
}

export default Prices;
