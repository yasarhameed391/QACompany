export default function Services() {
  const services = [
    {
      title: 'QA Automation',
      description:
        'Design and implementation of automation frameworks for web and mobile. Tools: Selenium, Cypress, Appium, Playwright.',
    },
    {
      title: 'Performance Testing',
      description:
        'Ensure your app is fast and scalable using JMeter, Gatling, or Locust.',
    },
    {
      title: 'Manual Testing',
      description:
        'Comprehensive functional, UI/UX, and exploratory testing.',
    },
    {
      title: 'QA Strategy & Consulting',
      description:
        'Define test processes, shift-left approaches, test planning, and maturity assessments.',
    },
    {
      title: 'CI/CD Integration',
      description:
        'Embed automated testing into your deployment pipelines using Jenkins, GitHub Actions, Azure DevOps.',
    },
    {
      title: 'Mobile App Testing',
      description:
        'iOS & Android testing with device cloud integration.',
    },
    {
      title: 'Security Testing',
      description:
        'Application vulnerability scanning and API security validation.',
    },
    {
      title: 'Regression Testing as a Service',
      description:
        'On-demand regression suite execution before release cycles.',
    },
  ]

  return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-12 text-center">Our QA Services</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, description }) => (
          <div
            key={title}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-2xl transition cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
