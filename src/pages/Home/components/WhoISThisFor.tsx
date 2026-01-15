const WhoIsThisFor = () => {
  return (
    <section className="py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Who is REACH Cut Planner for?
        </h2>

        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
          REACH Cut Planner is ideal for organizations that manage significant cutting room volumes and want to save fabric, time, and manual planning effort.
        </p>

        <div className="max-w-5xl mx-auto space-y-10">

          {/* Apparel Manufacturers */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">
              Apparel manufacturers and exporters
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Large and medium woven/knit factories producing shirts, trousers, denim, uniforms, lingerie, sportswear, and kidswear with high cut-room loads.</li>
              <li>Export houses and multi-factory groups needing standardized, centralized cut planning to meet tight delivery dates.</li>
            </ul>
          </div>

          {/* Domestic Brands */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">
              Domestic brands and multi-store retailers
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Owned manufacturing units or nominated vendors of national brands and retail chains that must control fabric costs across multiple orders and styles.</li>
              <li>Private-label sourcing units coordinating cut planning across suppliers while maintaining on-time deliveries.</li>
            </ul>
          </div>

          {/* Cutting Rooms */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">
              Cutting rooms and subcontractors
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Standalone cutting units receiving fabric and orders from brands or exporters and optimizing marker, plies, and roll allocation.</li>
              <li>Subcontractors handling short runs, repeats, and multi-color orders where minimizing end-bits and remnant wastage is critical.</li>
            </ul>
          </div>

          {/* ERP Integrators */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">
              Apparel ERP and technology integrators
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>ERP/MES providers who want to plug in a specialized cut order planning engine.</li>
              <li>System integrators offering end-to-end “digital cutting room” solutions including CAD, spreaders, cutters, and data capture.</li>
            </ul>
          </div>

          {/* Training */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">
              Training centres and universities
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Fashion/apparel institutes teaching industrial cut order planning and fabric optimization.</li>
              <li>Government or CSR-funded training labs focused on production management.</li>
            </ul>
          </div>

          {/* Consultants */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">
              Consultants and cost-optimization service providers
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Lean manufacturing and IE consultants reducing fabric cost and improving roll yield.</li>
              <li>Service bureaus offering outsourced cut planning and fabric reconciliation services.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
