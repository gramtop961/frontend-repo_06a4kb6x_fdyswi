import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />
        {/* Rising sun */}
        <div className="absolute -left-20 top-24 h-80 w-80 rounded-full bg-red-700/70 blur-2xl" />
        <div className="absolute right-[-60px] bottom-[-60px] h-96 w-96 rounded-full bg-rose-500/30 blur-3xl" />
        {/* Fog layers */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            A Tranquil Path of Craft
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Minimal, serene, and sharp. A portfolio forged with an Edo-era spirit—focused, elegant, and battle-tested.
          </p>
        </motion.div>

        {/* Torii Gate Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <svg
            width="420"
            height="180"
            viewBox="0 0 420 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white/80"
          >
            <circle cx="320" cy="70" r="60" className="fill-red-600/80" />
            <rect x="40" y="60" width="340" height="16" className="fill-white/80" />
            <rect x="20" y="40" width="380" height="12" className="fill-white" />
            <rect x="70" y="72" width="18" height="90" className="fill-white/80" />
            <rect x="332" y="72" width="18" height="90" className="fill-white/80" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
