export const WhatDoesSection = () => {
  return (
    <section className="py-10 bg-white text-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          What does REACH Cut Planner do?
        </h2>

        <div className="max-w-4xl mx-auto space-y-5">
          {/* Paragraph 1 */}
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>REACH Cut Planner</strong> is the industry-standard Cut Order Planning software for the apparel,
            garment, and clothing sectors. While traditional Pattern Design, Grading, and Marker Planning systems
            focus on savings within the marker, substantial additional fabric savings can be achieved{" "}
            <em>outside</em> the marker through optimal Cut Order Planning.
          </p>

          {/* Paragraph 2 */}
          <p className="text-lg text-gray-700 leading-relaxed">
            Since 60–80% of apparel manufacturing costs are fabric-related, reducing fabric usage directly
            impacts profitability. REACH Cut Planner leverages the latest Artificial Intelligence (AI) tools
            to help save significant fabric through:
          </p>

          {/* Bullet List 1 */}
          <ul className="list-disc pl-8 text-lg text-gray-700 leading-relaxed space-y-1">
            <li>Automated Marker Allocation</li>
            <li>Automated Plies Allocation</li>
            <li>Automated Spread Planning</li>
            <li>Automated Rolls Management</li>
          </ul>

          {/* Paragraph 3 */}
          <p className="text-lg text-gray-700 leading-relaxed">
            It tackles the complex challenge of allocating markers, plies, and rolls for orders with varying
            sizes, colors, shades, and fabric widths — all while minimizing waste like 'end bits'. But the
            benefits don’t stop at fabric savings.
          </p>

          {/* Paragraph 4 */}
          <p className="text-lg text-gray-700 leading-relaxed">
            REACH Cut Planner drives broader organizational impact by:
          </p>

          {/* Bullet List 2 */}
          <ul className="list-disc pl-8 text-lg text-gray-700 leading-relaxed space-y-1">
            <li>Enabling informed management decisions through cutting room data capture and analysis</li>
            <li>Improving productivity by automating the decision-making process</li>
            <li>Enhancing customer retention, reducing costs, and supporting on-time shipments</li>
          </ul>

          {/* Paragraph 5 */}
          <p className="text-lg text-gray-700 leading-relaxed">
            Ultimately, REACH Cut Planner empowers your team with unparalleled process control in the cutting
            room, making your operations smarter and more efficient.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatDoesSection;
