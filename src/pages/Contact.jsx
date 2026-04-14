import HeroInner from "../components/HeroInner";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import Title from "../components/Title";
import Text from "../components/Text";
import mailIcon from "../assets/svg/mail.svg";
import phoneIcon from "../assets/svg/phone.svg";
import locationIcon from "../assets/svg/location.svg";

const formspreeEndpoint = "https://formspree.io/f/meevoeoj";
const whatsappLink =
  "https://wa.me/31626239678?text=Hoi!%20Ik%20wil%20graag%20meer%20weten%20over%20een%20website%20voor%20mijn%20bedrijf.";
const mailAddress = "info@bdwebdesignstudio.nl";
const phoneNumber = "+31 6 12345678";

const contactDetails = [
  {
    icon: mailIcon,
    label: "E-mail",
    value: mailAddress,
    href: `mailto:${mailAddress}`,
  },
  {
    icon: phoneIcon,
    label: "Telefoon",
    value: phoneNumber,
    href: `tel:${phoneNumber.replace(/\s+/g, "")}`,
  },
  {
    icon: locationIcon,
    label: "Locatie",
    value: "Rotterdam, Nederland",
  },
];

function Contact() {
  return (
    <main>
      <HeroInner>
        <div className="flex flex-col gap-9">
          <Heading
            text={
              <>
                Neem <span>contact</span> op
              </>
            }
          />
          <Subheading
            subheading={
              <>
                Klaar om jouw ideeën te bespreken?
                <br />
                Stuur een bericht en ik denk graag met je mee.
              </>
            }
            className="max-w-2xl"
          />
          <div className="flex flex-col gap-6 md:flex-row">
            <PrimaryButton
              href={whatsappLink}
              text="Stuur een WhatsApp"
              className="shadow-[0_4px_10px_theme(colors.accent/25%)]"
            />
            <SecondaryButton href={`mailto:${mailAddress}`} text="Stuur een e-mail" />
          </div>
        </div>
      </HeroInner>

      <section>
        <div className="grid md:grid-cols-[3fr_1fr]">
          <div className="bg-[linear-gradient(180deg,rgba(126,24,32,0.96)_0%,rgba(140,28,38,0.94)_100%)] px-6 py-10 text-white md:px-24 md:py-14">
            <div className="flex flex-col gap-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Contactformulier
              </p>

              <Title
                title="Vertel kort wat je nodig hebt."
                className="max-w-2xl !text-white"
              />

              <Text
                text="Vul het formulier in en ik neem zo snel mogelijk contact met je op. Liever direct contact? Dan kun je me ook een WhatsApp-bericht of e-mail sturen."
                className="max-w-2xl leading-8 !text-white/85 md:text-lg"
              />

              <form
                action={formspreeEndpoint}
                method="POST"
                className="mt-2 grid gap-5"
              >
                <input type="hidden" name="_subject" value="Nieuw bericht via contactpagina" />
                <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />

                <div className="flex flex-col gap-5 md:flex-row">
                  <label className="flex flex-1 flex-col gap-2">
                    <span className="text-sm font-medium text-white">Naam</span>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white placeholder:text-white/45 outline-none transition-colors duration-300 focus:border-white/40 focus:bg-white/14"
                      placeholder="Jouw naam"
                    />
                  </label>

                  <label className="flex flex-1 flex-col gap-2">
                    <span className="text-sm font-medium text-white">E-mail</span>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white placeholder:text-white/45 outline-none transition-colors duration-300 focus:border-white/40 focus:bg-white/14"
                      placeholder="jij@bedrijf.nl"
                    />
                  </label>
                </div>

                <div className="flex flex-col gap-5 md:flex-row">
                  <label className="flex flex-1 flex-col gap-2">
                    <span className="text-sm font-medium text-white">
                      Bedrijfsnaam
                    </span>
                    <input
                      type="text"
                      name="company"
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white placeholder:text-white/45 outline-none transition-colors duration-300 focus:border-white/40 focus:bg-white/14"
                      placeholder="Naam van jouw bedrijf"
                    />
                  </label>

                  <label className="flex flex-1 flex-col gap-2">
                    <span className="text-sm font-medium text-white">
                      Telefoonnummer
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white placeholder:text-white/45 outline-none transition-colors duration-300 focus:border-white/40 focus:bg-white/14"
                      placeholder="Optioneel"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-white">Bericht</span>
                  <textarea
                    name="message"
                    rows="6"
                    required
                    className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white placeholder:text-white/45 outline-none transition-colors duration-300 focus:border-white/40 focus:bg-white/14"
                    placeholder="Vertel kort iets over jouw bedrijf en wat je zoekt."
                  />
                </label>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-10 py-4 font-heading text-lg font-medium text-accent shadow-[0_10px_24px_rgba(15,23,42,0.12)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-[0_10px_12px_rgba(15,23,42,0.18)]"
                  >
                    Verstuur bericht
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="bg-[#efe7e1] px-6 py-10 md:px-10 md:py-14">
            <div className="flex flex-col gap-6">
              <Title title="Contactgegevens" className="text-3xl" />

              <Text
                text="Liever direct contact? Je kunt me ook rechtstreeks bereiken via WhatsApp, e-mail of telefoon."
                className="leading-7"
              />

              <div className="flex flex-col gap-4">
                {contactDetails.map((item) => {
                  const content = (
                    <div className="group flex items-center gap-4 rounded-2xl bg-white/75 p-4 shadow-[0_8px_20px_rgba(15,23,42,0.05)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-[0_10px_12px_rgba(15,23,42,0.18)]">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center">
                        <img src={item.icon} alt="" className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-semibold uppercase tracking-[0.12em] text-primary/55">
                          {item.label}
                        </span>
                        <span className="text-base text-primary">{item.value}</span>
                      </div>
                    </div>
                  );

                  if (item.href) {
                    return (
                      <a key={item.label} href={item.href}>
                        {content}
                      </a>
                    );
                  }

                  return <div key={item.label}>{content}</div>;
                })}
              </div>

              <div className="border-t border-primary/10 pt-5">
                <p className="text-base italic leading-7 text-primary/75">
                  * Reactietijd: meestal ontvang je binnen 1 tot 2 werkdagen een
                  reactie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
