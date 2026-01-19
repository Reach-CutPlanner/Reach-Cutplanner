import markerIcon from "@/assets/marker.png";
import pliesIcon from "@/assets/plies.png";
import spreadIcon from "@/assets/spread.png";
import rollsIcon from "@/assets/rolls.png";
import manageIcon from "@/assets/manage.png";
import fabricIcon from "@/assets/fabric.png";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: markerIcon,
      title: "Automated Marker Allocation",
      description: "Streamline your cutting process with intelligent marker placement that optimizes fabric usage and reduces waste.",
      color: "text-[#B91C56]"
    },
    {
      icon: pliesIcon,
      title: "Automated Plies Allocation", 
      description: "Efficiently manage fabric layers with automated ply allocation that ensures accurate cutting specifications.",
      color: "text-[#B91C56]"
    },
    {
      icon: spreadIcon,
      title: "Automated Spread Planning",
      description: "Optimize fabric spreading operations with intelligent planning that maximizes efficiency and minimizes material waste.",
      color: "text-[#B91C56]"
    },
    {
      icon: rollsIcon,
      title: "Automated Rolls Management",
      description: "Track and manage fabric rolls seamlessly with automated inventory control and real-time monitoring.",
      color: "text-[#B91C56]"
    },
    {
      icon: manageIcon,
      title: "Informed Management Decisions",
      description: "Enables informed management decisions by capture and analysis of Cutting Room data.",
      color: "text-[#B91C56]"
    },
    {
      icon: fabricIcon,
      title: "Fabric Reconciliation", 
      description: "Maintain accurate fabric inventory with comprehensive reconciliation tools that track usage and optimize stock levels.",
      color: "text-[#B91C56]"
    }
  ];

  return (
    <section className="py-16 bg-white text-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Benefits of REACH Cut Planner
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            REACH Cut Planner isn't just another design tool, it's a game-changer for the fashion industry.
          </p>
        </div>
        
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
  {benefits.map((benefit, index) => (
    <div
      key={index}
      className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-start space-x-4">
        <div className="bg-f8b8d1 p-3 rounded-lg flex-shrink-0">
          <img
            src={benefit.icon}
            alt={benefit.title}
            className="w-10 h-10"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-ea6aad mb-3 leading-tight">
            {benefit.title}
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            {benefit.description}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default BenefitsSection;