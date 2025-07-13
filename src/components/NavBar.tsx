'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'


export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    }
  }, [])

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }
    setDarkMode(!darkMode)
  }

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Book', href: '/book' },
  ]

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-primary dark:text-primary-light">
          QACompany
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href} className="hover:text-primary dark:hover:text-primary-light text-gray-700 dark:text-gray-300">
              {label}
            </Link>
          ))}
        </div>

        {/* Right: Theme + Hamburger */}
        <div className="flex items-center space-x-4">
          {/* Theme toggle */}
          <button
            onClick={toggleDarkMode}
            className="appearance-none bg-transparent border-none p-0 m-0 text-gray-700 dark:text-gray-100 hover:text-primary dark:hover:text-primary-light transition"
            aria-label={darkMode ? 'Light Mode' : 'Dark Mode'}
            title={darkMode ? 'Light Mode' : 'Dark Mode'}
          >
            {darkMode ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>

          {/* Mobile menu */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            <svg className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href} className="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light">
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
