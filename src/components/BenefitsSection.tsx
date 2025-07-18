import { Clock, Users, TrendingUp, Star } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Speed Up Product Development",
      description: "Shorten design cycles with AI-powered tools that automate repetitive tasks and streamline workflows.",
      color: "text-[#B91C56]"
    },
    {
      icon: Users,
      title: "Enhance Collaboration", 
      description: "Work seamlessly across departments to ensure cohesive results and reduce miscommunication in the design process.",
      color: "text-[#B91C56]"
    },
    {
      icon: TrendingUp,
      title: "Boost Productivity",
      description: "Create detailed technical flats, fabric designs, and color palettes effortlessly with specialized tools.",
      color: "text-[#B91C56]"
    },
    {
      icon: Star,
      title: "Stay Ahead of Trends",
      description: "Adapt quickly to changing consumer preferences with advanced customization options and design flexibility.",
      color: "text-[#B91C56]"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#B91C56] mb-4">
            Benefits of REACH CAD
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            REACH CAD isn't just another design tool, it's a game-changer for the fashion industry.
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