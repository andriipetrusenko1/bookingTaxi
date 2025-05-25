export interface Booking {
  id: string;
  date: string;
  time: string;
  pickup: string;
  dropoff: string;
  status: 'completed' | 'upcoming' | 'cancelled';
  vehicle: string;
  price: number;
  passengers: number;
}