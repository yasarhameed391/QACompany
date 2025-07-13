export default function Book() {
    return (
      <section className="py-20 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Book a Consultation</h1>
        <p className="mb-6 text-center text-gray-800 dark:text-gray-200">
          Not Sure Where to Start? Book a 30-Minute Free QA Strategy Call
        </p>
        {/* Replace below Calendly iframe URL with your actual link */}
        <iframe
          src="https://calendly.com/your-calendly-link"
          width="100%"
          height="600"
          frameBorder="0"
          className="rounded-lg shadow-lg"
        ></iframe>
      </section>
    )
  }
  