import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, TrendingUp, Star } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Speed Up Product Development",
      description: "Shorten design cycles with AI-powered tools that automate repetitive tasks and streamline workflows.",
      color: "text-blue-600"
    },
    {
      icon: Users,
      title: "Enhance Collaboration",
      description: "Work seamlessly across departments to ensure cohesive results and reduce miscommunication in the design process.",
      color: "text-green-600"
    },
    {
      icon: TrendingUp,
      title: "Boost Productivity",
      description: "Create detailed technical flats, fabric designs, and color palettes effortlessly with specialized tools.",
      color: "text-purple-600"
    },
    {
      icon: Star,
      title: "Stay Ahead of Trends",
      description: "Adapt quickly to changing consumer preferences with advanced customization options and design flexibility.",
      color: "text-orange-600"
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Benefits of <span className="text-primary">REACH CAD</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            REACH CAD isn't just another design tool; it's a game-changer for the fashion industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full bg-white shadow-card flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;