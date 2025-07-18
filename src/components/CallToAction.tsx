import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-[#B91C56]">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Transform Your Fashion Design Process?
        </h2>
        <p className="text-lg text-white/90 mb-8">
          Join thousands of designers who trust REACH CAD to bring their ideas to life.
        </p>
        <Button className="bg-white text-[#B91C56] hover:bg-gray-100 font-medium px-6 py-3 rounded-lg">
          Request a Demo
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;