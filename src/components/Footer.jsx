import logoFooter from "../assets/svg/logoFooter.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-4 items-center justify-items-center p-10 md:p-24">
        {/* LOGO */}
        <div>
          <img src={logoFooter} alt="BD Webdesign" className="w-[300px] inline-block"/>
        </div>

        {/* MENU */}
        <div className="flex flex-col">
          <p className="font-bold mb-2">Menu</p>

          <Link to="/">Home</Link>
          <Link to="/diensten">Diensten</Link>
          <Link to="/over">Over mij</Link>
          <Link to="/projecten">Projecten</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* CONTACT */}
        <div>
          <p className="font-bold mb-2">Contact</p>
          <p>info@bdwebdesignstudio.nl</p>
          <p>+31 6 12345678</p>
          <p>Rotterdam, Nederland</p>
        </div>

        {/* INFO */}
        <div>
          <p className="font-bold mb-2">Informatie</p>
          <p>KVK: 91044555</p>
          <p>BTW: NL004709416B13</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
