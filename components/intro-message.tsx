"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IntroMessage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the message has been dismissed before
    const dismissed = localStorage.getItem("introDismissed");
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("introDismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-50 pt-20 pb-3 flex justify-center">
      <div className="bg-white border border-gray-200 shadow-lg rounded-lg max-w-3xl mx-4 p-4 relative">
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Dismiss message"
        >
          <X size={18} />
        </button>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-2">
              Hi, I am Andrii, a full-stack developer with over 6 years of experience building advanced AI-based platforms. I am new to Upwork but have great technical skills. If Upwork require me a verification, I will complete the work and contact you within 1–2 hours.
            </p>
            <div className="flex justify-end">
              <Button variant="outline" size="sm" onClick={handleDismiss}>
                Dismiss
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}