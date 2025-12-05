const ComparisonTable = () => {
  return (
    <section className="py-16 bg-gray-50">
       <div className="container mx-auto px-4 overflow-x-auto">

        {/* Title */}
        <h2 className="text-center text-4xl font-bold text-primary mb-4">
          Why Designers choose REACH Cut Planner?
        </h2>
        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Compared to Manual Methods, Getber AccuPlan, and FastReact Fabric, REACH Cut Planner is the only solution that offers complete automation, full optimization, and guaranteed results — making it the most advanced and reliable choice for apparel manufacturers.
        </p>

        {/* Table */}
        <div className="w-full overflow-x-auto bg-white rounded-2xl shadow-xl">
          <table className="min-w-max w-full text-left text-lg">
            <thead className="bg-gray-100 text-gray-800">
              <tr>
                <th className="py-4 px-6 font-semibold">FEATURE</th>
                <th className="py-4 px-6 font-semibold">MANUAL METHODS</th>
                <th className="py-4 px-6 font-semibold">GETBER ACCUPLAN</th>
                <th className="py-4 px-6 font-semibold">FASTREACT FABRIC</th>
                <th className="py-4 px-6 font-semibold text-primary">REACH CUT PLANNER</th>
              </tr>
            </thead>

            <tbody>
              {/* Row 1 */}
              <tr className="border-t">
                <td className="py-4 px-6 font-medium">AI Powered</td>
                <td className="py-4 px-6 text-red-500 text-xl">✖</td>
                <td className="py-4 px-6 text-red-500 text-xl">✖</td>
                <td className="py-4 px-6 text-gray-700">Partial</td>
                <td className="py-4 px-6 text-primary">YES</td>
              </tr>

              {/* Row 2 */}
              <tr className="border-t">
                <td className="py-4 px-6 font-medium">Optimization across CAD and Cut Planner</td>
                <td className="py-4 px-6 text-red-500 text-xl">✖</td>
                <td className="py-4 px-6 text-gray-700">Partial</td>
                <td className="py-4 px-6 text-red-500 text-xl">✖</td>
                <td className="py-4 px-6 text-primary">YES</td>
              </tr>

              {/* Row 3 */}
              <tr className="border-t">
                <td className="py-4 px-6 font-medium">Offered as SaaS, Onsite, Subscription, Perpetual Licenses</td>
                <td className="py-4 px-6 text-red-500 text-xl">✖</td>
                <td className="py-4 px-6 text-red-500 text-xl">✖</td>
                <td className="py-4 px-6 text-red-500 text-xl">✖</td>
                <td className="py-4 px-6 text-primary">YES</td>
              </tr>

              {/* Row 4 */}
              <tr className="border-t">
                <td className="py-4 px-6 font-medium whitespace-normal break-words leading-snug max-w-sm">
                 Integrated Automated Marker Planning, Plies Planning, Spread Planning, Rolls Planning, Fabric Reconciliation</td>
                <td className="py-4 px-6 text-red-500 text-xl">✖</td>
                <td className="py-4 px-6 text-red-500 text-xl">✖</td>
                <td className="py-4 px-6 text-red-500 text-xl">✖</td>
                <td className="py-4 px-6 text-primary">YES</td>
              </tr>

              {/* Row 5 */}
              <tr className="border-t">
                <td className="py-4 px-6 font-medium">Guaranteed Results OR Money Back!</td>
                <td className="py-4 px-6 text-red-500 text-xl">✖</td>
                <td className="py-4 px-6 text-red-500 text-xl">✖</td>
                <td className="py-4 px-6 text-red-500 text-xl">✖</td>
                <td className="py-4 px-6 text-primary">YES</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default ComparisonTable;
