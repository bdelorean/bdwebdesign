import { Link } from "react-router-dom";

function SecondaryButton({ to, href, text }) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-primary text-primary font-heading text-lg text-center px-9 py-4 rounded-xl font-semibold transition-all duration-300 ease-out hover:bg-primary hover:text-textWhite"
      >
        {text}
      </a>
    );
  }

  return (
    <Link
      to={to}
      className="border-2 border-primary text-primary font-heading text-lg px-9 py-4 rounded-xl font-semibold transition-all duration-300 ease-out hover:bg-primary hover:text-textWhite"
    >
      {text}
    </Link>
  );
}

export default SecondaryButton;
