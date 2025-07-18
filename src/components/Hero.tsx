import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-reach-gradient-subtle py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium text-primary uppercase tracking-wide">
                REACH CAD helps Apparel Firms Enhance Profitability and Ship Orders Fast by Saving Fabric and Time
              </p>
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-card">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  <span className="text-reach-purple">Welcome</span> to<br />
                  <span className="text-2xl lg:text-3xl">REACH CAD!</span>
                </h1>
                <Button variant="cta" size="lg" className="mt-6">
                  Request a Demo
                </Button>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-4 rounded-lg shadow-elegant">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop" 
                alt="REACH CAD Software Interface" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-lg text-primary font-medium max-w-4xl mx-auto px-4">
          REACH CAD helps Apparel Firms Enhance Profitability, and Ship Orders Fast by Saving Fabric and Time.
        </p>
      </div>
    </section>
  );
};

export default Hero;