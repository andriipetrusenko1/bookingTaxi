import { ShieldCheck, Clock, Headphones, CreditCard, Award, MapPin } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Clock className="h-10 w-10 text-yellow-500" />,
      title: "24/7 Availability",
      description: "Our taxis are available round the clock, whenever you need a ride.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-yellow-500" />,
      title: "Safe & Secure",
      description: "All our drivers are verified and vehicles regularly inspected for safety.",
    },
    {
      icon: <Award className="h-10 w-10 text-yellow-500" />,
      title: "Professional Drivers",
      description: "Experienced, professional drivers to ensure a comfortable journey.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-yellow-500" />,
      title: "Easy Payment",
      description: "Multiple payment options including card, cash, and mobile payments.",
    },
    {
      icon: <Headphones className="h-10 w-10 text-yellow-500" />,
      title: "Customer Support",
      description: "Dedicated support team ready to assist with any queries or issues.",
    },
    {
      icon: <MapPin className="h-10 w-10 text-yellow-500" />,
      title: "Real-time Tracking",
      description: "Track your ride in real-time and share your journey with loved ones.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide reliable, safe, and comfortable taxi services with a focus on customer satisfaction
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}