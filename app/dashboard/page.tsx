import { Metadata } from "next";
import DashboardContent from "@/components/dashboard/dashboard-content";

export const metadata: Metadata = {
  title: "Dashboard - QuickRide",
  description: "View and manage your taxi bookings",
};

export default function DashboardPage() {
  return <DashboardContent />;
}