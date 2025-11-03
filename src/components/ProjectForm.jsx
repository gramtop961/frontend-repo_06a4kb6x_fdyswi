import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function ProjectForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [link, setLink] = useState('')
  const [tags, setTags] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    const project = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      image: image.trim(),
      link: link.trim(),
      tags: tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
    }
    onAdd(project)
    setTitle('')
    setDescription('')
    setImage('')
    setLink('')
    setTags('')
  }

  return (
    <section id="add" className="relative">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-white text-2xl font-semibold tracking-tight">Add a Project</h2>
        <p className="text-white/60 mt-1 mb-6">
          Create entries instantly. Your changes are saved locally for convenience.
        </p>
        <form
          onSubmit={submit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/5 border border-white/10 rounded-xl p-4"
        >
          <div className="space-y-2">
            <label className="text-sm text-white/70">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Blade of Code"
              className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-rose-500/50"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-white/70">Tags (comma separated)</label>
            <input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="React, FastAPI, Tailwind"
              className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-rose-500/50"
            />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-sm text-white/70">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="A calm, powerful web experience inspired by Edo-era aesthetics."
              className="w-full min-h-[90px] rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-rose-500/50"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-white/70">Image URL</label>
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://images.unsplash.com/..."
              className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-rose-500/50"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-white/70">Project Link</label>
            <input
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="https://yourproject.com"
              className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-rose-500/50"
            />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-rose-600 to-red-600 text-white px-4 py-2 font-medium hover:brightness-110 active:scale-[0.99] transition"
            >
              <Plus size={18} /> Add Project
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
