export default function Footer() {
  return (
    <footer id="contact" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Crafted with calm precision.</p>
          <p>
            Reach out: <a className="text-rose-300 hover:text-rose-200" href="mailto:you@example.com">you@example.com</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
