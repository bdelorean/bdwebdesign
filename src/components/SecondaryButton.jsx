import { Link } from "react-router-dom";

function SecondaryButton({ to, text }) {
  return (
    <Link
      to={to}
      className="border-2 border-primary text-primary font-heading text-lg px-9 py-4 rounded-xl font-semibold"
    >
      {text}
    </Link>
  );
}

export default SecondaryButton;