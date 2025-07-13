import ServicesGrid from '../components/ServicesGrid';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
          QA That Scales With You
        </h1>
        <h2 className="text-2xl font-semibold mb-6">
          Automation-First QA Consulting for Startups & Enterprises in the Middle East
        </h2>
        <p className="mb-12 text-lg max-w-3xl mx-auto">
          Reduce release risks, improve user experience, and scale faster with our expert-led QA services.
        </p>
        <div className="space-x-4">
          <a
            href="/book"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
          >
            Schedule a Free QA Assessment
          </a>
          <a
            href="/contact"
            className="inline-block border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition"
          >
            Get a Quote
          </a>
        </div>
      </section>

      <ServicesGrid />

      {/* Optional: Add client logos or testimonial slider here */}
    </main>
  )
}
