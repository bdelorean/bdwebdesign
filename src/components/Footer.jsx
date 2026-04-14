import logoFooter from "../assets/svg/logoInlinePrincipal.svg";
import mailIcon from "../assets/svg/mail.svg";
import phoneIcon from "../assets/svg/phone.svg";
import locationIcon from "../assets/svg/location.svg";
import { Link, useLocation } from "react-router-dom";

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.9 20v-6.2h2.1l.3-2.6h-2.4V9.6c0-.8.2-1.4 1.4-1.4h1.1V6c-.2 0-.8-.1-1.8-.1-1.7 0-2.9 1.1-2.9 3.1v2.2H9.7v2.6h2.1V20h2.1Z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="17.2" cy="6.8" r="1.35" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M15.2 4c.4 1.9 1.7 3.3 3.5 3.8v2.2c-1.3 0-2.5-.4-3.5-1v5.1a5 5 0 1 1-5-5c.3 0 .6 0 .9.1v2.3a2.6 2.6 0 1 0 1.5 2.4V4h2.6Z" />
    </svg>
  );
}

function Footer() {
  const location = useLocation();
  const getMenuLinkClass = (path) => {
    const isActive = location.pathname === path;

    return `group relative inline-flex w-fit items-center pb-1 transition-all duration-300 ease-out hover:text-accent hover:font-semibold hover:-translate-y-[1px] ${
      isActive ? "text-accent font-semibold" : "text-inherit"
    }`;
  };
  const getMenuUnderlineClass = (path) =>
    `pointer-events-none absolute left-0 bottom-0 h-[2px] w-full origin-center rounded-full bg-accent transition-transform duration-300 ease-out ${
      location.pathname === path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
    }`;

  return (
    <footer>
      <div className="grid md:grid-cols-4 items-start md:justify-items-center p-10 md:p-24 gap-6">
        {/* LOGO */}
        <div className="order-last md:order-none flex flex-col gap-4">
          <img src={logoFooter} alt="BD Webdesign" className="w-[300px] inline-block"/>
          <div className="flex flex-row items-center  gap-3 text-primary">
            <p className="font-bold text-lg">Volg ons:</p>
            <a
              href="https://www.facebook.com/profile.php?id=61577968104940"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-textWhite transition-colors duration-300 hover:bg-accent"
            >
              <FacebookIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href="https://www.tiktok.com/@bdwebdesign?_r=1&_t=ZG-95VLjj6a9NB"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-textWhite transition-colors duration-300 hover:bg-accent"
            >
              <TikTokIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href="https://www.instagram.com/bd_web_design/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-textWhite transition-colors duration-300 hover:bg-accent"
            >
              <InstagramIcon className="h-[19px] w-[19px]" />
            </a>
          </div>
        </div>

        {/* MENU */}
        <div className="flex flex-col">
          <p className="font-bold mb-2">Snel naar:</p>

          <Link to="/" className={getMenuLinkClass("/")}>
            Home
            <span className={getMenuUnderlineClass("/")} />
          </Link>
          <Link to="/diensten" className={getMenuLinkClass("/diensten")}>
            Diensten
            <span className={getMenuUnderlineClass("/diensten")} />
          </Link>
          <Link to="/over" className={getMenuLinkClass("/over")}>
            Over mij
            <span className={getMenuUnderlineClass("/over")} />
          </Link>
          <Link to="/projecten" className={getMenuLinkClass("/projecten")}>
            Projecten
            <span className={getMenuUnderlineClass("/projecten")} />
          </Link>
          <Link to="/contact" className={getMenuLinkClass("/contact")}>
            Contact
            <span className={getMenuUnderlineClass("/contact")} />
          </Link>
        </div>

        {/* CONTACT */}
        <div>
          <p className="font-bold mb-2">Neem contact op:</p>
          <div className="flex items-center gap-2 mb-2">
            <img src={mailIcon} alt="" className="w-4 h-4" />
            <p>info@bdwebdesignstudio.nl</p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <img src={phoneIcon} alt="" className="w-4 h-4" />
            <p>+31 6 12345678</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={locationIcon} alt="" className="w-4 h-4" />
            <p>Rotterdam, Nederland</p>
          </div>
        </div>

        {/* INFO */}
        <div>
          <p className="font-bold mb-2">Informatie:</p>
          <p>KVK: 91044555</p>
          <p>BTW: NL004709416B13</p>
        </div>
      </div>
      <div className="border-t border-primary/10 px-10 py-5 text-center text-sm text-primary/70 md:px-24">
        © 2026 BD Webdesign. Alle rechten voorbehouden.
      </div>
    </footer>
  );
}

export default Footer;
