function ServicesList({ services, className = "" }) {
  return (
    <p className={`font-sans font-medium text-[18px] italic text-primary ${className}`}>
      {services}
    </p>
  );
}

export default ServicesList;
