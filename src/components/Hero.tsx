import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen">
      {/* Header */}
      <div className="absolute top-6 left-6 z-10">
        <h1 className="text-2xl font-bold text-[#B91C56]">REACH CAD</h1>
      </div>
      
      {/* Top right tagline */}
      <div className="absolute top-6 right-6 z-10 max-w-md text-right">
        <p className="text-sm text-gray-600">
          REACH CAD helps Apparel Firms Enhance Profitability, and Ship Orders Fast by Saving Fabric and Time.
        </p>
      </div>

      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/b9ce3481-6190-4f92-9368-2bc034499f48.png" 
          alt="Designer using REACH CAD software" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Central welcome message */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/95 backdrop-blur-sm p-12 rounded-lg text-center max-w-lg">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-[#8A2BE2]">Wel</span><span className="text-gray-500">co</span><span className="text-[#8A2BE2]">me</span> <span className="text-gray-800">to</span><br />
            <span className="text-gray-800 text-3xl">REACH CAD!</span>
          </h2>
          <Button className="bg-[#B91C56] hover:bg-[#A01747] text-white px-8 py-3 rounded-lg font-medium">
            Request a Demo
          </Button>
        </div>
      </div>

      {/* Bottom tagline */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center max-w-4xl px-4">
        <p className="text-lg text-[#B91C56] font-medium">
          REACH CAD helps Apparel Firms Enhance Profitability, and Ship Orders Fast by Saving Fabric and Time.
        </p>
      </div>
    </section>
  );
};

export default Hero;