import { Link } from "react-router-dom";

function PrimaryButton({ to, href, text, className }) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center rounded-xl bg-accent px-12 py-4 font-heading text-lg text-textWhite transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-[0_14px_28px_rgba(155,28,39,0.28)] ${className}`}
      >
        {text}
      </a>
    );
  }

  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-xl bg-accent px-12 py-4 font-heading text-lg text-textWhite transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-[0_14px_28px_rgba(155,28,39,0.28)] ${className}`}
    >
      {text}
    </Link>
  );
}

export default PrimaryButton;
