"use client";

import { useState } from "react";
import { Calendar, Clock, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function BookingForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    passengers: "1",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.pickup || !formData.dropoff || !formData.date || !formData.time) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Mock form submission
    toast({
      title: "Booking submitted!",
      description: "Your taxi booking request has been received.",
    });
    
    // Reset form
    setFormData({
      pickup: "",
      dropoff: "",
      date: "",
      time: "",
      passengers: "1",
    });
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="booking">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Ride</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fill in the details below to book your taxi. It only takes a minute!
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Booking Details</CardTitle>
            <CardDescription>
              Enter your journey details to get a quote and book your ride
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pickup">Pickup Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="pickup"
                        name="pickup"
                        placeholder="Enter pickup address"
                        className="pl-10"
                        value={formData.pickup}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="dropoff">Drop-off Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="dropoff"
                        name="dropoff"
                        placeholder="Enter destination address"
                        className="pl-10"
                        value={formData.dropoff}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        className="pl-10"
                        value={formData.date}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="time">Time</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="time"
                        name="time"
                        type="time"
                        className="pl-10"
                        value={formData.time}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="passengers">Passengers</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Select
                      value={formData.passengers}
                      onValueChange={(value) => handleSelectChange("passengers", value)}
                    >
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="Select number of passengers" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "passenger" : "passengers"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
              onClick={handleSubmit}
            >
              Book Now
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}