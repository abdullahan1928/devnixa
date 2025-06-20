import About from "@/components/shared/about";
import ContactForm from "@/components/shared/contact-form";
import FAQs from "@/components/shared/faq";
import Features from "@/components/shared/features";
import Hero from "@/components/shared/hero";
import Portfolio from "@/components/shared/portfolio";
import Stats from "@/components/shared/stats";
import Testimonials from "@/components/shared/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Stats />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <ContactForm />
    </>
  );
}
