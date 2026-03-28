import React from "react";
import Title from "./Title";
import Subheading from "./Subheading";
import Pricecards from "./PriceCards/PriceCards";

function Prices() {
  return (
    <div className="p-24 gap-12 flex flex-col">
      <div className="flex flex-col items-center gap-4">
        <Title title="KIES HET JUISTE PAKKET" />
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
    </div>
  );
}

export default Prices;
