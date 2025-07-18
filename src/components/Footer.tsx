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
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="mb-6">
              <span className="text-2xl font-bold">
                <span className="text-primary">REACH</span>{" "}
                <span className="text-white">CAD</span>
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              REACH CAD helps Apparel Firms Enhance Profitability, and Ship Orders Fast by Saving Fabric and Time.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="grid grid-cols-1 gap-3">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 REACH CAD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;