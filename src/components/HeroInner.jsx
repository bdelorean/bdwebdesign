function HeroInner({ children }) {
    return (
      <section className="flex flex-col bg-[linear-gradient(rgba(249,250,251,0.8),rgba(249,250,251,0.8)),url('/images/heroinnerbg.webp')] bg-cover bg-center p-10 md:p-24">
        {children}
      </section>
    );
  }
  
  export default HeroInner;