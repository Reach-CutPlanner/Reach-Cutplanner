import { Clock, Users, TrendingUp, Star } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Automated Marker Allocation",
      description: "Streamline your cutting process with intelligent marker placement that optimizes fabric usage and reduces waste.",
      color: "text-[#B91C56]"
    },
    {
      icon: Users,
      title: "Automated Plies Allocation", 
      description: "Efficiently manage fabric layers with automated ply allocation that ensures accurate cutting specifications.",
      color: "text-[#B91C56]"
    },
    {
      icon: TrendingUp,
      title: "Automated Spread Planning",
      description: "Optimize fabric spreading operations with intelligent planning that maximizes efficiency and minimizes material waste.",
      color: "text-[#B91C56]"
    },
    {
      icon: Star,
      title: "Automated Rolls Management",
      description: "Track and manage fabric rolls seamlessly with automated inventory control and real-time monitoring.",
      color: "text-[#B91C56]"
    },
    {
      icon: Clock,
      title: "Informed Management Decisions",
      description: "Enables informed management decisions by capture and analysis of Cutting Room data.",
      color: "text-[#B91C56]"
    },
    {
      icon: Users,
      title: "Fabric Reconciliation", 
      description: "Maintain accurate fabric inventory with comprehensive reconciliation tools that track usage and optimize stock levels.",
      color: "text-[#B91C56]"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#B91C56] mb-4">
            Benefits of REACH Cut Planner
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            REACH Cut Planner isn't just another design tool, it's a game-changer for the fashion industry.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-gray-200 p-6 flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Icon className="w-16 h-16 text-[#B91C56]" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#B91C56] mb-3 leading-tight">{benefit.title}</h3>
                  <p className="text-gray-700 text-base leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;