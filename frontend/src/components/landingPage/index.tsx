import { Navbar } from "./navbar";
import Introduction from "./introduction";
import { HeroSection } from "./hero";
import Features from "./features";
import Pricing from "./Pricing";
import GettingStarted from "./GettingStarted";
import { ACTIONS, TESTIMONIALS } from "./data";
import { Testimonials } from "../ui/testimonials";
import CallToValue from "./CallToValue";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="landing-page w-full min-h-screen flex flex-col">
      <Navbar />

      <HeroSection
        title="AI that works for you."
        subtitle="Transform your workflow with intelligent automation. Simple, powerful, reliable."
        actions={ACTIONS}
        titleClassName="text-5xl md:text-6xl font-extrabold"
        subtitleClassName="text-lg md:text-xl max-w-[600px]"
        actionsClassName="mt-16"
      />
      <section
        id="features"
        className="w-full flex flex-col pt-20 pb-12 items-center"
      >
        <Introduction />
        <Features />
      </section>

      <section
        id="getting-started"
        className="w-full flex flex-col items-center pt-20"
      >
        <GettingStarted />
      </section>

      <section id="pricing" className="w-full flex flex-col items-center pt-20">
        <Pricing />
        <Testimonials
          title="Trusted by top students worldwide"
          desc="Join thousands of students who are already learning effectively with our AI platform"
          testimonials={TESTIMONIALS}
        />
        <CallToValue />
      </section>
      <Footer />
    </div>
  );
}
