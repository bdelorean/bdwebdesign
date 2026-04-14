const whatsappLink =
  "https://wa.me/31626239678?text=Hoi!%20Ik%20wil%20graag%20een%20website%20of%20webshop%20laten%20maken.%20Kun%20je%20me%20meer%20info%20geven?";

function Pricecard({ label, badge, title, price, features, highlighted }) {
  return (
    <div
      className={`relative flex flex-col items-center gap-2 rounded-2xl p-20 md:p-10 shadow-lg transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-[0_10px_12px_rgba(15,23,42,0.18)]
        ${highlighted ? "bg-primary text-white md:scale-105" : "bg-white"}`}
    >
      {/* BADGE */}
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-6 py-1.5 text-xs tracking-wide text-white">
          {badge}
        </div>
      )}

      {/* LABEL */}
      <p className="text-sm uppercase tracking-wide text-[#9ca3af]">{label}</p>

      <h3
        className={`text-lg font-bold mt-2 ${
          highlighted ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h3>

      <p
        className={`text-4xl font-bold mt-2 ${
          highlighted ? "text-white" : "text-primary"
        }`}
      >
        {price}
      </p>

      {/* FEATURES */}
      <ul className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            {/* SVG */}
            <svg
              className="w-4 h-4 mt-1"
              fill="none"
              stroke="#9B1C27"
              strokeWidth="4"
              viewBox="0 0 24 24"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>

            {/* TEXT */}
            <span
              className={
                highlighted
                  ? "text-textWhite text-sm"
                  : "text-slate-600 text-sm"
              }
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* BUTTON */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 block w-full rounded-full bg-accent py-3 text-center text-white transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-[0_8px_10px_rgba(15,23,42,0.18)]"
      >
        Start project
      </a>
    </div>
  );
}

export default Pricecard;
