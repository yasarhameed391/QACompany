export default function About() {
  return (
    <section className="py-20 max-w-4xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Why Choose Humance?</h1>

      <p className="mb-6 text-lg text-gray-800 dark:text-gray-300">
        Our mission is to accelerate product quality and reduce time-to-market for innovative businesses in the Middle East through scalable, automation-first QA solutions.
      </p>

      <h2 className="text-2xl font-semibold mb-4">What Makes Us Different</h2>
      <ul className="list-disc list-inside space-y-3 mb-6 text-gray-700 dark:text-gray-400">
        <li>QA frameworks built from Day 1</li>
        <li>Domain-specific testing experts</li>
        <li>Agile & DevOps aligned</li>
        <li>Fixed-cost models or staff augmentation</li>
        <li>Based in the Middle East timezone</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Founder’s Message</h2>
      <p className="text-gray-700 dark:text-gray-400 italic">
        “After a decade in QA, I launched Humance Consulting to help fast-growing companies eliminate QA bottlenecks and release with confidence.”
      </p>
    </section>
  )
}
