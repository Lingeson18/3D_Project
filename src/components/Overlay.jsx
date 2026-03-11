import { motion } from "framer-motion";
import { Info, Gauge, Zap, Palette, ArrowRight } from "lucide-react";

const CAR_COLORS = [
  { name: "Phantom Black", value: "#0f172a" },
  { name: "Crystal White", value: "#ffffff" },
  { name: "Titan Grey", value: "#475569" },
  { name: "Fiery Red", value: "#991b1b" },
  { name: "Electric Blue", value: "#1e40af" },
];

export default function Overlay({ carColor, setCarColor }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between p-6 sm:p-12">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
            <span className="font-bold text-black text-xl">C</span>
          </div>
          <span className="text-xl font-bold tracking-tighter text-white uppercase">
            CRETA 2024
          </span>
        </div>

        <nav className="pointer-events-auto hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">
            Overview
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Performance
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Features
          </a>
          <a
            href="#"
            className="bg-white/10 px-4 py-2 rounded-full text-white border border-white/20 hover:bg-white/20 transition-all"
          >
            Support
          </a>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl"
        >
          <h1 className="text-6xl font-black text-white sm:text-8xl leading-none">
            UNLEASH <br />
            <span className="text-white/20">PREMIUM.</span>
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-sm">
            Discover the perfect blend of innovation and elegance. Experience
            the future of driving with the all-new Creta.
          </p>

          <div className="pointer-events-auto mt-10 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-white px-8 py-4 rounded-xl text-black font-bold hover:bg-zinc-200 transition-all active:scale-95">
              Explore Now <ArrowRight size={20} />
            </button>
            <button className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-8 py-4 rounded-xl text-white font-bold border border-white/10 hover:bg-white/10 transition-all active:scale-95">
              Book Test Drive
            </button>
          </div>
        </motion.div>

        {/* Specs & Customizer */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="pointer-events-auto flex flex-col gap-6 w-full md:w-80"
        >
          {/* Specifications */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <div className="flex items-center gap-2 mb-2 text-zinc-500">
                <Gauge size={16} />{" "}
                <span className="text-xs uppercase font-bold tracking-widest">
                  Top Speed
                </span>
              </div>
              <div className="text-2xl font-bold text-white">
                190<span className="text-xs text-zinc-500 ml-1">km/h</span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <div className="flex items-center gap-2 mb-2 text-zinc-500">
                <Zap size={16} />{" "}
                <span className="text-xs uppercase font-bold tracking-widest">
                  Adaptive
                </span>
              </div>
              <div className="text-2xl font-bold text-white">AWD</div>
            </div>
          </div>

          {/* Color Picker */}
          <div className="p-6 rounded-3xl bg-zinc-900/80 backdrop-blur-xl border border-white/5">
            <div className="flex items-center gap-2 mb-4">
              <Palette size={18} className="text-zinc-500" />
              <span className="text-xs uppercase font-bold tracking-widest text-zinc-500">
                Exterior Finish
              </span>
            </div>

            <div className="flex justify-between items-center bg-black/40 p-2 rounded-2xl mb-4">
              {CAR_COLORS.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setCarColor(color.value)}
                  className={`h-10 w-10 rounded-xl transition-all ${
                    carColor === color.value
                      ? "ring-2 ring-white scale-90 ring-offset-2 ring-offset-zinc-900"
                      : "opacity-80 hover:scale-110 hover:opacity-100"
                  }`}
                  style={{
                    backgroundColor: color.value,
                    border:
                      color.value === "#ffffff" ? "1px solid #333" : "none",
                  }}
                  title={color.name}
                />
              ))}
            </div>

            <div className="text-sm font-medium text-zinc-400 text-center uppercase tracking-widest">
              {CAR_COLORS.find((c) => c.value === carColor)?.name}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
