'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  function toggleDarkMode() {
    if (darkMode) {
      document.documentElement.classList.remove('dark')
      setDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    }
  }

  return (
    <nav className="bg-primary text-white dark:bg-black p-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div className="flex space-x-6">
          <Link href="/" className="font-bold text-lg hover:underline dark:text-gray-300">
            QACompany
          </Link>
          <Link href="/services" className="hover:underline dark:text-gray-300">
            Services
          </Link>
          <Link href="/portfolio" className="hover:underline dark:text-gray-300">
            Portfolio
          </Link>
          <Link href="/about" className="hover:underline dark:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="hover:underline dark:text-gray-300">
            Contact
          </Link>
        </div>

        <button
          onClick={toggleDarkMode}
          className="bg-gray-800 dark:bg-gray-200 text-white dark:text-black p-2 rounded"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            // Sun icon for light mode
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m14.142 5.657l-.707-.707M6.343 6.343l-.707-.707m12.02 12.02l-.707-.707M6.343 17.657l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z"
              />
            </svg>
          ) : (
            // Moon icon for dark mode
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="none"
            >
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  )
}
