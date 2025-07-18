import { Check, X } from "lucide-react";

const ComparisonTable = () => {
  const features = [
    {
      feature: "Built for Fashion Industry",
      manual: "❌",
      adobe: "❌", 
      reach: "✅"
    },
    {
      feature: "Preloaded Libraries",
      manual: "❌",
      adobe: "❌",
      reach: "Extensive libraries"
    },
    {
      feature: "Collaboration Tools",
      manual: "❌", 
      adobe: "Limited",
      reach: "Seamless collaboration"
    },
    {
      feature: "AI-Powered Design Tools",
      manual: "❌",
      adobe: "Limited", 
      reach: "Advanced AI capabilities"
    },
    {
      feature: "Speed of Design",
      manual: "Slow",
      adobe: "Moderate",
      reach: "Superfast"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#B91C56] mb-6">
            Why Designers Choose REACH
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            When compared to manual methods or general-purpose graphic design software like Adobe Illustrator, REACH CAD stands out as the ultimate choice for fashion professionals.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-4 font-semibold text-gray-800">FEATURE</th>
                <th className="text-center p-4 font-semibold text-gray-800">MANUAL METHODS</th>
                <th className="text-center p-4 font-semibold text-gray-800">ADOBE ILLUSTRATOR</th>
                <th className="text-center p-4 font-semibold text-gray-800">REACH FASHION STUDIO</th>
              </tr>
            </thead>
            <tbody>
              {features.map((item, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-700">{item.feature}</td>
                  <td className="p-4 text-center">
                    {item.manual === "❌" ? (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    ) : (
                      <span className="text-gray-600">{item.manual}</span>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {item.adobe === "❌" ? (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    ) : item.adobe === "Limited" ? (
                      <span className="text-[#B91C56] text-sm">{item.adobe}</span>
                    ) : (
                      <span className="text-gray-600">{item.adobe}</span>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {item.reach === "✅" ? (
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    ) : (
                      <span className="text-[#B91C56] text-sm font-medium">{item.reach}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;