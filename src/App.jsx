import { useState } from "react";
import Experience from "./components/Experience";
import Overlay from "./components/Overlay";

function App() {
  const [carColor, setCarColor] = useState("#0f172a");

  return (
    <div className="h-screen w-full bg-black relative">
      {/* 3D Scene Layer */}
      <div className="absolute inset-0">
        <Experience carColor={carColor} />
      </div>

      {/* UI Layer */}
      <Overlay carColor={carColor} setCarColor={setCarColor} />

      {/* Subtle bottom gradient for depth */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-black to-transparent opacity-60" />
    </div>
  );
}

export default App;
