// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import heroImage from "@/assets/heroimage.png";

// const HeroSection = () => {
//   const [viewport, setViewport] = useState<"mobile" | "tablet" | "laptop">("laptop");

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width <= 640) {
//         setViewport("mobile");
//       } else if (width <= 1024) {
//         setViewport("tablet");
//       } else {
//         setViewport("laptop");
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const sectionStyle: React.CSSProperties = {
//     backgroundImage: `url(${heroImage})`,

//     backgroundSize: "contain",
//     backgroundPosition: "center top",
//     backgroundColor: "#fff", // to fill white around image

//     backgroundRepeat: "no-repeat",

//     height: viewport === "mobile" ? "55vh" :
//     viewport === "tablet" ? "75vh" : "100vh",

//   };

//   const buttonStyle: React.CSSProperties = {
//     padding:
//       viewport === "mobile"
//         ? "4vw 8vw"
//         : viewport === "tablet"
//           ? "3vw 6vw"
//           : "2vw 4vw",
//     borderRadius: viewport === "mobile" ? "4vw" : "1.6vw",
//     fontSize:
//       viewport === "mobile"
//         ? "26px"
//         : viewport === "tablet"
//           ? "18px"
//           : "20px",
//     width: viewport === "mobile" ? "80vw" : "auto",
//     height: viewport === "mobile" ? "15vw" : "auto",
//     textAlign: "center",
//   };

//   const buttonContainerStyle: React.CSSProperties =
//     viewport === "mobile"
//       ? {
//         position: "absolute",
//         bottom: "0px",
//         left: "50%",
//         transform: "translateX(-50%)",
//         zIndex: 10,
//       }
//       : viewport === "tablet"
//         ? {
//           position: "absolute",
//           bottom: "28px",
//           right: "40px",
//           zIndex: 10,
//         }
//         : {
//           position: "absolute",
//           bottom: "36px",
//           right: "80px",
//           zIndex: 10,
//         };

//   return (
//     <section
//       className="relative flex items-center bg-white"
//       style={{ minHeight: viewport === "mobile" ? "500px" : "900px" }}
//     >
//       <div className="absolute inset-0" style={sectionStyle}>
//         <div className="absolute inset-0 bg-[#f5f6f8]/70"></div>
//       </div>      

// <div
//   className="
//     absolute
//     left-[28%] sm:left-[30%] lg:left-[30%]
//     top-[73%] sm:top-[70%] lg:top-[68%]
//     transform -translate-x-1/2
//     z-20 hidden
//   "
// >

//         <div className="relative bg-white/70 backdrop-blur-md px-6 py-4 sm:px-10 sm:py-8 lg:px-16 lg:py-12 text-center max-w-[90vw] sm:max-w-xl rounded-xl">
//           <div className="absolute inset-0 bg-black/20 rounded-xl"></div>

//         <div className="relative z-10">
//  <h2
//   className="
//     font-bold 
//     text-2xl 
//     sm:text-3xl 
//     md:text-4xl 
//     lg:text-5xl 
//     text-gray-900 
//     leading-tight
//   "
// >
//   Welcome to <br className="hidden sm:block" />
//   <span className="text-[#b0004c]">REACH</span> Cut Planner
// </h2>


// </div>

//         </div>
//       </div>

//       <div style={buttonContainerStyle}>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;











import { useEffect, useState } from "react";

const HeroSection = () => {
  const [viewport, setViewport] = useState<"mobile" | "tablet" | "laptop">("laptop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 640) setViewport("mobile");
      else if (width <= 1024) setViewport("tablet");
      else setViewport("laptop");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
<section className="bg-[#f5f6f8] py-10 md:py-20">
  <div
    className="
      max-w-[1500px] mx-auto px-4 
      grid grid-cols-2 
      gap-6 md:gap-20
    "
  >
    {/* LEFT SIDE */}
    <div className="flex flex-col justify-center text-center px-2 md:px-10">
      <p className="text-[#a00043] font-bold text-xl sm:text-2xl md:text-[38px] leading-tight">
        Guaranteed Fabric Savings
      </p>

      <p className="text-[#a00043] font-bold text-xl sm:text-2xl md:text-[38px] leading-tight mt-4 md:mt-10">
        through
      </p>

      <p className="text-[#a00043] font-bold text-xl sm:text-2xl md:text-[38px] leading-tight mt-4 md:mt-10">
        AI Powered Cut Order Planning
      </p>
    </div>

    {/* RIGHT SIDE */}
    <div
      className="
        border-l-2 border-[#d0d0d0] 
        pl-4 sm:pl-8 md:pl-16 
        flex flex-col justify-center 
        space-y-4 sm:space-y-6 md:space-y-12
      "
    >
      <p className="text-[#000000] font-medium text-lg sm:text-l md:text-[33px] leading-tight">
        Automated Marker Allocation
      </p>

      <p className="text-[#000000] font-medium text-lg sm:text-l md:text-[33px] leading-tight">
        Automated Plies Allocation
      </p>

      <p className="text-[#000000] font-medium text-lg sm:text-l md:text-[33px] leading-tight">
        Automated Spread Planning
      </p>

      <p className="text-[#000000] font-medium text-lg sm:text-l md:text-[33px] leading-tight">
        Automated Rolls Management
      </p>

      <p className="text-[#000000] font-medium text-lg sm:text-l md:text-[33px] leading-tight">
        Automated Fabric Reconciliation
      </p>
    </div>
  </div>
</section>



  );
};

export default HeroSection;

