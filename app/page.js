import About from "@/components/About";
import Agent from "@/components/Agent";
import Amenities from "@/components/Amenities";
import BackToTop from "@/components/BackToTop";
import ContactForm from "@/components/ContactForm";
import FeaturedProperties from "@/components/FeaturedProperties";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

/**
 * Home — single-page landing that assembles every section in order.
 * Content and copy live in components/data.js for easy editing.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <FeaturedProperties />
        <About />
        <Amenities />
        <WhyChooseUs />
        <Testimonials />
        <Location />
        <Agent />

        {/* Contact */}
        <section id="contact" className="relative overflow-hidden bg-background py-20 sm:py-28">
          <div
            aria-hidden="true"
            className="blob right-[-10%] top-[-20%] h-[420px] w-[420px] bg-primary/15"
          />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="Contact Us"
                  title="Schedule Your Private Viewing"
                  description="Tell us a little about the home you're dreaming of, and our team will arrange a private, no-pressure tour at your convenience."
                />
                <Reveal delay={100}>
                  <div className="mt-8 space-y-5 text-[15px] text-muted">
                    <p className="leading-relaxed">
                      Prefer to talk? Call us any time — our advisors are
                      available seven days a week.
                    </p>
                    <p className="font-medium text-ink">
                      Office hours: Mon – Sat, 9:00 AM – 7:00 PM
                    </p>
                  </div>
                </Reveal>
              </div>
              <Reveal delay={150}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
