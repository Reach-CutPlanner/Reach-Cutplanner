const Footer = () => {
  const footerLinks = [
    { label: "About REACH CAD", href: "#about" },
    { label: "The Problem REACH CAD solves", href: "#problem" },
    { label: "Benefits of REACH CAD", href: "#benefits" },
    { label: "Features of REACH CAD", href: "#features" },
    { label: "Presentations", href: "#presentations" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Product Videos", href: "#videos" }
  ];

  return (
    <footer className="bg-gray-700 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="mb-4">
              <span className="text-xl font-bold">
                <span className="text-[#B91C56]">REACH</span>{" "}
                <span className="text-white">CAD</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              REACH CAD helps Apparel Firms Enhance Profitability, and Ship Orders Fast by Saving Fabric and Time.
            </p>
          </div>
          
          <div>
            <div className="grid grid-cols-1 gap-2">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;