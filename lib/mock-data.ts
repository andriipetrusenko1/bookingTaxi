import { Booking } from "@/lib/types";

export const mockBookings: Booking[] = [
  {
    id: "TX-1234",
    date: "2025-04-10",
    time: "09:30",
    pickup: "123 Main St, New York, NY",
    dropoff: "JFK International Airport, Queens, NY",
    status: "completed",
    vehicle: "Sedan",
    price: 45.99,
    passengers: 2
  },
  {
    id: "TX-1235",
    date: "2025-04-15",
    time: "14:00",
    pickup: "456 Park Ave, New York, NY",
    dropoff: "Grand Central Terminal, New York, NY",
    status: "upcoming",
    vehicle: "SUV",
    price: 28.50,
    passengers: 3
  },
  {
    id: "TX-1236",
    date: "2025-04-05",
    time: "18:45",
    pickup: "789 Broadway, New York, NY",
    dropoff: "LaGuardia Airport, Queens, NY",
    status: "cancelled",
    vehicle: "Luxury",
    price: 65.75,
    passengers: 1
  },
  {
    id: "TX-1237",
    date: "2025-04-12",
    time: "10:15",
    pickup: "321 5th Avenue, New York, NY",
    dropoff: "Brooklyn Bridge, New York, NY",
    status: "upcoming",
    vehicle: "Sedan",
    price: 32.25,
    passengers: 2
  },
  {
    id: "TX-1238",
    date: "2025-04-08",
    time: "07:30",
    pickup: "555 Madison Ave, New York, NY",
    dropoff: "Newark Liberty International Airport, NJ",
    status: "completed",
    vehicle: "Minivan",
    price: 75.00,
    passengers: 4
  },
  {
    id: "TX-1239",
    date: "2025-04-20",
    time: "19:00",
    pickup: "888 Times Square, New York, NY",
    dropoff: "One World Trade Center, New York, NY",
    status: "upcoming",
    vehicle: "SUV",
    price: 38.50,
    passengers: 3
  },
  {
    id: "TX-1240",
    date: "2025-04-03",
    time: "13:45",
    pickup: "200 Central Park West, New York, NY",
    dropoff: "Metropolitan Museum of Art, New York, NY",
    status: "completed",
    vehicle: "Sedan",
    price: 22.75,
    passengers: 2
  }
];