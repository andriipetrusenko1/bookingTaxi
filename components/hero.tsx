import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <Image
          src="https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg"
          alt="Professional taxi service"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Book a Reliable Taxi in Seconds
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Professional drivers, transparent pricing, and 24/7 availability.
            Your reliable transportation partner for any journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium">
              <Link href="#booking">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="#how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}