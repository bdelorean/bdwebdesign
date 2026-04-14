import benefitsData from "./benefitsData";

function BenefitsCardsMobile() {
  return (
    <div className="flex flex-col gap-4 md:hidden">
      {benefitsData.map((item, index) => (
        <article
          key={index}
          className="benefit-card rounded-2xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/70 shadow-sm">
              <img src={item.icon} alt="" className="h-6 w-6" />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-[17px] leading-snug text-slate-900">
                {item.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-slate-500">
                {item.text}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default BenefitsCardsMobile;
