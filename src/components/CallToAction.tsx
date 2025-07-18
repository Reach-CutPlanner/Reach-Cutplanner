import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-reach-gradient">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Fashion Design Process?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of designers who trust REACH CAD to bring their ideas to life.
        </p>
        <Button 
          variant="outline" 
          size="lg" 
          className="bg-white text-primary hover:bg-white/90 border-white font-semibold px-8 py-3"
        >
          Request a Demo
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;