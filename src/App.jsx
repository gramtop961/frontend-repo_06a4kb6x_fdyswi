import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import ProjectForm from './components/ProjectForm'
import Footer from './components/Footer'

const DEFAULT_PROJECTS = [
  {
    id: 1,
    title: 'Crimson Torii Landing',
    description:
      'A minimalist landing experience with a rising sun motif, subtle motion, and pristine typography.',
    image:
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=1600&auto=format&fit=crop',
    link: 'https://example.com',
    tags: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    id: 2,
    title: 'Silent Blade API',
    description:
      'Fast and reliable backend endpoints forged with discipline and clarity.',
    image:
      'https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1600&auto=format&fit=crop',
    link: 'https://example.com',
    tags: ['FastAPI', 'MongoDB'],
  },
]

export default function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const raw = localStorage.getItem('edo-projects')
    if (raw) {
      try {
        const parsed = JSON.parse(raw)
        setProjects(parsed)
        return
      } catch {}
    }
    setProjects(DEFAULT_PROJECTS)
  }, [])

  useEffect(() => {
    localStorage.setItem('edo-projects', JSON.stringify(projects))
  }, [projects])

  const addProject = (p) => setProjects((prev) => [p, ...prev])
  const deleteProject = (id) => setProjects((prev) => prev.filter((p) => p.id !== id))

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Ambient gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-120px] right-[-120px] h-[380px] w-[380px] rounded-full bg-rose-700/30 blur-3xl" />
        <div className="absolute bottom-[-140px] left-[-120px] h-[420px] w-[420px] rounded-full bg-red-600/20 blur-3xl" />
      </div>

      <Header />
      <main>
        <Hero />
        <Projects projects={projects} onDelete={deleteProject} />
        <ProjectForm onAdd={addProject} />
      </main>
      <Footer />
    </div>
  )
}
