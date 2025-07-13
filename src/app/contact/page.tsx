export default function Contact() {
  return (
    <section className="py-20 max-w-3xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-semibold">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 font-semibold">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            required
          />
        </div>
        <div>
          <label htmlFor="company" className="block mb-2 font-semibold">
            Company
          </label>
          <input
            id="company"
            type="text"
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 font-semibold">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary-dark transition"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8 text-center text-gray-700 dark:text-gray-300">
        <p>Email: <a href="mailto:hello@qa-company.com" className="underline">hello@qa-company.com</a></p>
        <p>Phone / WhatsApp: +971 50 123 4567</p>
      </div>
    </section>
  )
}
