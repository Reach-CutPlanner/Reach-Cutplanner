import { Link } from "react-router-dom";

export const benefitPoints = [
  "Save fabric",
  "Save time",
  "Eliminate errors",
  "Eliminate repetitive tasks",
  "Automated Marker Allocation",
  "Automated Plies Allocation",
  "Automated Spread Planning",
  "Automated Rolls Management",
  "Optimal allocation of markers, plies and rolls for orders of different sizes, colors, shades and widths",
  "Ship your orders on time",
  "Enables informed management decisions by capture and analysis of Cutting Room data",
  "Fabric Reconciliation",
];

const BenefitLinks = () => {
  return (
    <section className="bg-white text-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Benefits of using <span className="text-primary">REACH Cut Planner</span>
        </h2>

        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          If you are an organization in the apparel, garment, clothing, textile, or fashion manufacturing sectors, REACH Cut Planner will help you save fabric, reduce costs, and enhance production efficiency.
        </p>


      <div className="space-y-6 max-w-5xl mx-auto">
         {benefitPoints.map((point, index) => (
      <div
          key={index}
          className="flex items-center justify-between bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition"
         >
      <div className="flex items-center gap-4">
        <p className="text-gray-800 font-semibold text-lg md:text-xl">
          {point}
        </p>
      </div>

          {/* <Link
             to={`/benefits/detail/${index + 1}`}
             className="text-primary font-medium hover:underline whitespace-nowrap"
          >
                Read more →
          </Link> */}
         </div>
        ))}
      </div>
      
      </div>
    </section>
  );
};

export default BenefitLinks;
