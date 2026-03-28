import Title from "../Title"
import Step from "./Step"

function HowItWorksSection() {
  return (
    <div className=" md:p-24  bg-primary/5 md:bg-[url('/images/howitworks-bgsection.webp')] bg-cover bg-center bg-no-repeat" >
      <img src='/images/howitworks-bgsection.webp' alt="" className="md:hidden"/>
        <Title title="Hoe het werkt?"/>
        <section className="flex flex-col gap-10">
          <Step
            number="01"
            title="Kennismaking"
            time="1 dag"
            text="We bespreken jouw business en wat je nodig hebt.
            Samen bepalen we hoe de website eruit gaat zien: welke pagina’s nodig zijn,
            wat het doel is (bijvoorbeeld meer aanvragen krijgen of iets verkopen),
            wie jouw klanten zijn en welke stijl het beste bij je past:
            elegant, klassiek, modern of minimalistisch, met kleuren die bij jouw merk passen."
          />
          <Step
            number="02"
            title="Design + structuur + content"
            time="1-2 weken"
            text="Hier begint het creatieve deel 😊 Ik doe research, werk de structuur uit en zet de content
            op een logische manier klaar. Daarna maak ik het design, zodat de website duidelijk
            en makkelijk te gebruiken is. In deze fase krijgt de website echt vorm."
          />
          <Step
            number="03"
            title="Feedback en verwerking"
            time="1 week"
            text="We spreken online of persoonlijk af en ik laat je het design zien. 
            Jij geeft aan wat je mooi vindt en wat je graag anders wilt. 
            Daarna pas ik alles aan tot het helemaal goed voelt."
          />
          <Step
            number="04"
            title="Implementatie + lancering"
            time="1-2 weken"
            text="Als het design is goedgekeurd, ga ik alles bouwen en klaarzetten voor de
            lancering. Ik check ook of alles goed werkt op desktop en mobiel.
            Daarna zetten we de website online en is hij klaar om bezoekers te ontvangen."
          />
        </section>
        
    </div>
  )
}

export default HowItWorksSection