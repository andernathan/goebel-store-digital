const VirtualTourSection = () => {
  return (
    <section id="tour" className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-sans text-sm tracking-[0.25em] uppercase mb-3">
            Step Inside
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
            Virtual Tour
          </h2>
        </div>
        <div className="w-full rounded-lg overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="640"
            frameBorder="0"
            allow="xr-spatial-tracking; gyroscope; accelerometer"
            allowFullScreen
            scrolling="no"
            src="https://kuula.co/share/collection/7MTgg?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1&startItem=5"
            title="Goebel Store 360° Virtual Tour"
          />
        </div>
      </div>
    </section>
  );
};

export default VirtualTourSection;
