function Pricecard({ label, badge, title, price, features, highlighted }) {
  return (
    <div
      className={`relative p-10 gap-2 rounded-2xl shadow-lg flex flex-col items-center
        ${highlighted ? "bg-primary text-white scale-105" : "bg-white"}`}
    >
      {/* BADGE */}
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1 text-xs rounded-full bg-accent text-white tracking-wide">
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
        href="https://wa.me/31626239678?text=Hoi!%20Ik%20wil%20graag%20een%20website/webshop%20laten%20maken.%20Kun%20je%20me%20meer%20info%20geven?"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 w-full py-2 rounded-full bg-accent text-white text-center block"
      >
        Start project
      </a>
    </div>
  );
}

export default Pricecard;
