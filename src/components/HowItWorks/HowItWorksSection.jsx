import { useEffect } from "react"
import Title from "../Title"
import Step from "./Step"

function HowItWorksSection() {
  useEffect(() => {
    const element = document.querySelector(".how-it-works-mobile-reveal")

    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div className=" flex flex-col md:p-24  bg-primary/5 md:bg-[url('/images/howitworks-bgsection.webp')] bg-cover bg-center bg-no-repeat" >
      <div className="relative md:hidden">
        <img src='/images/howitworks-bgsection.webp' alt="" className="how-it-works-mobile-reveal h-[80vh] w-full object-cover object-right-top"/>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[rgba(229,231,235,0.24)] backdrop-blur-[28px] [mask-image:linear-gradient(to_top,black_18%,rgba(0,0,0,0.92)_38%,rgba(0,0,0,0.55)_68%,transparent_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_bottom,rgba(229,231,235,0),rgba(229,231,235,0.82)_72%,rgba(229,231,235,0.98)_100%)]" />
      </div>
        <div className="relative px-6 py-16 md:p-0">
          <Title title="Hoe het werkt?"/>
          <section className="flex flex-col gap-8 md:gap-10">
            <Step
              number="01"
              title="Kennismaking"
              time="1 dag"
              text="We bespreken jouw business en wat je nodig hebt.
              Samen bepalen we hoe de website eruit gaat zien: welke paginaâ€™s nodig zijn,
              wat het doel is (bijvoorbeeld meer aanvragen krijgen of iets verkopen),
              wie jouw klanten zijn en welke stijl het beste bij je past:
              elegant, klassiek, modern of minimalistisch, met kleuren die bij jouw merk passen."
            />
            <Step
              number="02"
              title="Design en content"
              time="1-2 weken"
              text="Hier begint het creatieve deel ðŸ˜Š Ik doe research, werk de structuur uit en zet de content
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
              title="Realisatie"
              time="1-2 weken"
              text="Als het design is goedgekeurd, ga ik alles bouwen en klaarzetten voor de
              lancering. Ik check ook of alles goed werkt op desktop en mobiel.
              Daarna zetten we de website online en is hij klaar om bezoekers te ontvangen."
            />
          </section>
        </div>
        
    </div>
  )
}

export default HowItWorksSection
