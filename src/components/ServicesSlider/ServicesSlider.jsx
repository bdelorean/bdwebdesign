import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "./ServicesSlider.css";

const SERVICES = [
  "Webdesign",
  "Webontwikkeling",
  "Webshops",
  "WordPress websites",
  "Shopify webshops",
  "Grafisch ontwerp",
];

export default function ServicesSlider() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section className="services-slider-wrapper">
      {isMobile ? <MobileSlider /> : <DesktopMarquee />}
    </section>
  );
}

// ─── Desktop: pure CSS marquee, no Swiper ────────────────────────────────────
// Two identical rows animate together. When the first row scrolls fully out,
// the second is in its exact place — seamless, no JS, no pauses.

function DesktopMarquee() {
  const items = SERVICES.map((service, i) => (
    <span key={i} className="marquee-item">
      <span className="service-label">{service}</span>
      <span className="services-separator" aria-hidden="true">✦</span>
    </span>
  ));

  return (
    <div className="marquee-outer">
      <div className="marquee-track">
        <span className="marquee-group">{items}</span>
        <span className="marquee-group" aria-hidden="true">{items}</span>
      </div>
    </div>
  );
}

// ─── Mobile: Swiper fade carousel ────────────────────────────────────────────

function MobileSlider() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      loop={true}
      autoplay={{ delay: 2200, disableOnInteraction: false }}
      slidesPerView={1}
      allowTouchMove={true}
      className="mobile-swiper"
    >
      {SERVICES.map((service) => (
        <SwiperSlide key={service} className="mobile-slide">
          <span className="service-label">{service}</span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
