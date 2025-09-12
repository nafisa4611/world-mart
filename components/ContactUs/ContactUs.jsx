
import StoreMap from "./StoreMap"
import FAQAccordion from "./FAQAccordion"
import ContactForm from "./ContactForm"

export default function ContactUs() {
  return (
    <div>
      <StoreMap />

      <section className="container mx-auto py-16 grid md:grid-cols-2 gap-12 px-6">
        <FAQAccordion />
        <ContactForm />
      </section>
    </div>
  )
}
