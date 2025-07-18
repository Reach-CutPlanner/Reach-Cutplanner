import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen">
      {/* Top white block */}
      <div className="absolute top-0 left-0 right-0 bg-white py-6 px-8 z-10 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#B91C56]">REACH CAD</h1>
        <p className="text-sm text-gray-600 max-w-md text-right">
          REACH CAD helps Apparel Firms Enhance Profitability, and Ship Orders Fast by Saving Fabric and Time.
        </p>
      </div>

      {/* Background image */}
      <div className="absolute inset-0 pt-20 pb-32">
        <img 
          src="/lovable-uploads/b9ce3481-6190-4f92-9368-2bc034499f48.png" 
          alt="Designer using REACH CAD software" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Central welcome message */}
      <div className="absolute inset-0 flex items-center justify-end pr-32 pt-20 pb-32">
        <div className="bg-white/20 backdrop-blur-sm px-12 py-6 text-center">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-[#8A2BE2]">Wel</span><span className="text-gray-400">co</span><span className="text-[#8A2BE2]">me</span> <span className="text-gray-600">to</span>
            <br />
            <span className="text-gray-600">REACH CAD!</span>
          </h2>
        </div>
      </div>

      {/* Request Demo button - separate in right corner */}
      <div className="absolute bottom-40 right-8 z-20">
        <Button className="bg-[#B91C56] hover:bg-[#A01747] text-white px-8 py-3 rounded-full font-medium text-lg">
          Request a Demo
        </Button>
      </div>

      {/* Bottom white block */}
      <div className="absolute bottom-0 left-0 right-0 bg-white py-8 px-8 z-10 text-center">
        <p className="text-lg text-[#B91C56] font-medium">
          REACH CAD helps Apparel Firms Enhance Profitability, and Ship Orders Fast by Saving Fabric and Time.
        </p>
      </div>
    </section>
  );
};

export default Hero;