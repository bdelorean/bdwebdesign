function HeroInner({ children }) {
    return (
      <section className="flex flex-col justify-center bg-[linear-gradient(rgba(249,250,251,0.8),rgba(249,250,251,0.8)),url('/images/heroinnerbg.webp')] bg-cover bg-center px-6 pt-16 md:px-24 min-h-[90vh]">
        {children}
      </section>
    );
  }
  
  export default HeroInner;
