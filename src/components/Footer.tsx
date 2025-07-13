import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-10 text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

        <div>
          <h4 className="font-bold mb-3">Company</h4>
          <ul className="space-y-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Services</h4>
          <ul className="space-y-2">
            <li><Link href="/services">QA Automation</Link></li>
            <li><Link href="/services">Performance Testing</Link></li>
            <li><Link href="/services">Manual Testing</Link></li>
            <li><Link href="/services">CI/CD QA</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Resources</h4>
          <ul className="space-y-2">
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/book">Book Consultation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Connect</h4>
          <ul className="flex gap-4 mt-2">
            <li>
              <a href="https://github.com/yasarhameed391" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="w-5 h-5 hover:text-primary" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/yasarhameed" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5 hover:text-primary" />
              </a>
            </li>
            <li>
              <a href="mailto:hello@qa-company.com" aria-label="Email">
                <FaEnvelope className="w-5 h-5 hover:text-primary" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 text-xs text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Humance Inc. All rights reserved.
      </div>
    </footer>
  )
}
