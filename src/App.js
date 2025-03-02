// import React from "react";
// import ImageCarousel from "./components/ImageCarousel";

// function App() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <ImageCarousel />
//     </div>
//   );
// }

// export default App;

import CardCarousel from "./components/CardCarousel"; // Adjust path if needed

export default function Home() {
  return (
    <div className="p-6">
      <CardCarousel />
    </div>
  );
}
