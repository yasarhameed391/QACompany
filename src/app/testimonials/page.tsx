export default function Testimonials() {
    const testimonials = [
      {
        name: 'CTO, FinTech Startup, UAE',
        feedback:
          'QACompany helped us cut our regression cycle from 3 days to 4 hours. Their automation setup was production-grade from day one.',
      },
      {
        name: 'Product Manager, E-commerce Firm',
        feedback:
          'Their expertise in Cypress and CI/CD pipelines improved our software quality drastically.',
      },
    ]
  
    return (
      <section className="py-20 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">What Our Clients Say</h1>
        <div className="space-y-10">
          {testimonials.map(({ name, feedback }) => (
            <blockquote
              key={name}
              className="border-l-4 border-primary pl-6 italic text-gray-800 dark:text-gray-200"
            >
              <p>"{feedback}"</p>
              <footer className="mt-2 font-semibold text-gray-900 dark:text-white">
                — {name}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    )
  }
  