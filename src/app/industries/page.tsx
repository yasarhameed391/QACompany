export default function Industries() {
    const industries = [
      'FinTech & Banking',
      'E-commerce',
      'HealthTech',
      'Government Portals',
      'Startups & SaaS',
      'Logistics & Transportation',
      'Oil & Energy Platforms',
    ]
  
    return (
      <section className="py-20 max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Industries We Serve</h1>
        <ul className="list-disc list-inside space-y-4 text-lg max-w-xl mx-auto text-gray-800 dark:text-gray-300">
          {industries.map((industry) => (
            <li key={industry}>{industry}</li>
          ))}
        </ul>
      </section>
    )
  }
  