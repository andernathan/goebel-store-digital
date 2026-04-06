const FooterSection = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/70 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="font-serif text-2xl text-primary-foreground mb-2">Goebel Store</h3>
        <p className="text-sm font-light mb-8">Winchester, Texas</p>
        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-xs font-light tracking-wide">
            © {new Date().getFullYear()} Goebel Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
