export default function Portfolio() {
  const projects = [
    {
      name: 'Mock QA Automation Framework',
      challenge: 'Lack of reliable automated tests causing release delays.',
      solution: 'Designed a Cypress framework with reusable components and parallel tests.',
      tools: 'Cypress, Jenkins, GitHub Actions',
      impact: 'Reduced regression cycle by 60% and increased release confidence.',
      repoUrl: 'https://github.com/yasarhameed391/qa-company-cypress-framework',
    },
    {
      name: 'Performance Test for Public App',
      challenge: 'Unpredictable load causing downtime.',
      solution: 'Implemented JMeter load tests integrated into CI pipelines.',
      tools: 'JMeter, Azure DevOps',
      impact: 'Detected bottlenecks early, reduced downtime by 30%.',
      repoUrl: 'https://github.com/yasarhameed391/api-testing-suite',
    },
  ]

  return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-12 text-center">Portfolio / Case Studies</h1>
      <div className="space-y-12">
        {projects.map(({ name, challenge, solution, tools, impact, repoUrl }) => (
          <div
            key={name}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-2xl transition"
          >
            <h2 className="text-2xl font-semibold mb-2 text-primary">{name}</h2>
            <p><strong>Challenge:</strong> {challenge}</p>
            <p><strong>Solution:</strong> {solution}</p>
            <p><strong>Tools Used:</strong> {tools}</p>
            <p><strong>Impact:</strong> {impact}</p>
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-primary underline"
            >
              View Repository
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
