import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen">
      {/* Background image covering entire page */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/9e92abf1-d3d8-4d8a-bd11-7722688835de.png" 
          alt="Designer using REACH CAD software" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Top white block */}
      <div className="absolute top-0 left-0 right-0 bg-white py-6 px-8 z-10 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#B91C56]">REACH CAD</h1>
        <p className="text-sm text-gray-600 max-w-md text-right">
          REACH CAD helps Apparel Firms Enhance Profitability, and Ship Orders Fast by Saving Fabric and Time.
        </p>
      </div>

      {/* Welcome message positioned on the right side */}
      <div className="absolute top-1/2 right-24 transform -translate-y-1/2 z-20">
        <div className="bg-white/95 backdrop-blur-sm px-16 py-12 text-center">
          <h2 className="text-6xl font-bold text-transparent bg-clip-text" style={{
            WebkitBackgroundClip: 'text',
            backgroundImage: 'url(/lovable-uploads/9e92abf1-d3d8-4d8a-bd11-7722688835de.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            Welcome to
            <br />
            REACH CAD!
          </h2>
        </div>
      </div>

      {/* Request Demo button positioned below welcome message */}
      <div className="absolute bottom-32 right-24 z-20">
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