import Hero from "@/components/hero";
import BookingForm from "@/components/booking-form";
import HowItWorks from "@/components/how-it-works";
import Features from "@/components/features";
import IntroMessage from "@/components/intro-message";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <IntroMessage />
      <Hero />
      <HowItWorks />
      <BookingForm />
      <Features />
    </div>
  );
}