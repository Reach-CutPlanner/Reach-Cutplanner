import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/561093c9-8798-42ba-9e2e-f42f63dbb3f8.png" 
          alt="REACH CAD workspace background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Top tagline */}
        <div className="text-center pt-8 pb-16">
          <p className="text-sm font-medium text-white/90 max-w-2xl mx-auto px-4">
            REACH CAD helps Apparel Firms Enhance Profitability and Ship Orders Fast by Saving Fabric and Time
          </p>
        </div>
        
        {/* Main content centered */}
        <div className="flex items-center justify-center min-h-[60vh] px-4">
          <div className="text-center">
            {/* Welcome message with background */}
            <div className="bg-white/95 backdrop-blur-sm p-8 lg:p-12 rounded-lg shadow-elegant max-w-2xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold mb-8">
                <span className="text-reach-purple">Welcome</span> to<br />
                <span className="text-gray-700">REACH CAD!</span>
              </h1>
              <Button variant="cta" size="lg" className="text-lg px-8 py-4">
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom tagline */}
        <div className="text-center pb-12">
          <p className="text-lg text-white font-medium max-w-4xl mx-auto px-4">
            REACH CAD helps Apparel Firms Enhance Profitability, and Ship Orders Fast by Saving Fabric and Time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;