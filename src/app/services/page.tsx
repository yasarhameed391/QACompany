export default function Home() {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold text-primary mb-6">QACompany</h1>
      <p className="text-lg max-w-xl mx-auto mb-8">
        We build fast, reliable test automation frameworks for modern tech companies.
      </p>
      <a
        href="/services"
        className="inline-block bg-primary text-white px-8 py-3 rounded hover:bg-primary-dark"
      >
        View Our Services
      </a>
    </section>
  )
}
