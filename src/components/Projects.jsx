import { motion } from 'framer-motion'
import { ExternalLink, Trash2 } from 'lucide-react'

function FallbackImage({ title }) {
  return (
    <div className="h-40 w-full bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center">
      <span className="text-white/40 text-sm">{title}</span>
    </div>
  )
}

export default function Projects({ projects, onDelete }) {
  return (
    <section id="projects" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-white text-2xl font-semibold tracking-tight">Featured Work</h2>
            <p className="text-white/60 mt-1">Curated creations with an Edo spirit.</p>
          </div>
          <div className="hidden md:block text-white/50 text-sm">
            {projects.length} project{projects.length === 1 ? '' : 's'}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-rose-500/40 transition"
            >
              {p.image ? (
                <img src={p.image} alt={p.title} className="h-40 w-full object-cover" />
              ) : (
                <FallbackImage title={p.title} />
              )}

              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-white font-semibold tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-white/60 text-sm mt-1 line-clamp-3">{p.description}</p>
                  </div>
                  <button
                    onClick={() => onDelete(p.id)}
                    className="shrink-0 inline-flex items-center justify-center rounded-md border border-white/10 bg-black/40 text-white/70 hover:text-white hover:border-rose-400 hover:bg-rose-600/10 transition h-8 w-8"
                    aria-label={`Delete ${p.title}`}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                {p.tags?.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-black/40 border border-white/10 text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm text-rose-300 hover:text-rose-200 transition"
                  >
                    Visit <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
