"use client";

import { useState, useEffect } from "react";
import { MapPin, Car, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  // Using this to mock framer-motion and avoid adding a dependency
  const motion = {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  };

  const steps = [
    {
      icon: <MapPin className="h-8 w-8 text-yellow-500" />,
      title: "Choose Location",
      description: "Enter your pickup and drop-off locations",
    },
    {
      icon: <Car className="h-8 w-8 text-yellow-500" />,
      title: "Select Vehicle",
      description: "Choose from our range of vehicle options",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-yellow-500" />,
      title: "Confirm Ride",
      description: "Confirm and track your ride in real-time",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Book your ride in three simple steps and enjoy a smooth, hassle-free journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="mb-4 p-3 bg-gray-50 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="relative mt-16 md:mt-24 max-w-5xl mx-auto">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-10 hidden md:block"></div>
          <div className="flex justify-between">
            {[1, 2, 3].map((step, index) => (
              <div key={index} className="hidden md:block w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-medium">
                {step}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}