import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Basic navigation header */}
      <header className="bg-slate-800 text-white p-4">
        <nav className="flex gap-4">
          <Link to="/" className="hover:text-slate-300">Home</Link>
          <Link to="/sprints" className="hover:text-slate-300">Sprints</Link>
          <Link to="/tasks" className="hover:text-slate-300">Tasks</Link>
        </nav>
      </header>

      {/* Main content area */}
      <main className="flex-1 container mx-auto">
        <Outlet />
      </main>

      {/* Simple footer */}
      <footer className="bg-slate-100 p-4 text-center text-sm text-slate-600">
        SprintSpace - Development Version
      </footer>
    </div>
  )
} 