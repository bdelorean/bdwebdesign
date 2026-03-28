import { Link } from "react-router-dom";

function PrimaryButton({ to, text, className }) {
  return (
    <Link
      to={to}
      className={`bg-accent text-textWhite font-heading text-lg px-12 py-4 rounded-xl ${className}`}
    >
      {text}
    </Link>
  );
}

export default PrimaryButton;