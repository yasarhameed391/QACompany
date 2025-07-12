export default function Contact() {
  return (
    <section className="py-10 max-w-md mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
      <h1 className="text-3xl font-semibold mb-4">Get in Touch</h1>
      <p className="mb-6">Schedule a meeting with us at your convenience:</p>


      <iframe
        src="https://calendly.com/yourusername/30min"
        className="w-full h-[600px] border-0"
        title="Calendly Booking"
      />
    </section>
  )
}
