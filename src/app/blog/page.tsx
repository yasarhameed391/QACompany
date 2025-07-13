export default function Blog() {
    const posts = [
      {
        title: 'How to Shift Left Your QA Strategy',
        link: '#',
      },
      {
        title: 'Top 5 Automation Tools in 2025',
        link: '#',
      },
      {
        title: 'Why Every Startup in UAE Needs CI/CD Testing',
        link: '#',
      },
      {
        title: 'Manual vs. Automated Testing – When to Use What?',
        link: '#',
      },
    ]
  
    return (
      <section className="py-20 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog / Insights</h1>
        <ul className="list-disc list-inside space-y-4 text-lg text-gray-800 dark:text-gray-200 max-w-xl mx-auto">
          {posts.map(({ title, link }) => (
            <li key={title}>
              <a
                href={link}
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    )
  }
  