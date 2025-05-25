"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Booking } from "@/lib/types";
import { formatDate, formatTime } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Eye, X, MapPin } from "lucide-react";

interface BookingTableProps {
  bookings: Booking[];
}

export function BookingTable({ bookings }: BookingTableProps) {
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "upcoming":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "cancelled":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead className="hidden md:table-cell">Pickup</TableHead>
              <TableHead className="hidden md:table-cell">Drop-off</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  No bookings found
                </TableCell>
              </TableRow>
            ) : (
              bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.id}</TableCell>
                  <TableCell>{formatDate(booking.date)}</TableCell>
                  <TableCell>{formatTime(booking.time)}</TableCell>
                  <TableCell className="hidden md:table-cell max-w-[200px] truncate">
                    {booking.pickup}
                  </TableCell>
                  <TableCell className="hidden md:table-cell max-w-[200px] truncate">
                    {booking.dropoff}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={`${getStatusColor(booking.status)} capitalize`}
                    >
                      {booking.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedBooking(booking)}
                        >
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View details</span>
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle className="flex justify-between items-center">
                            Booking Details
                            <AlertDialogCancel className="p-0 m-0 h-8 w-8 rounded-full">
                              <X className="h-4 w-4" />
                              <span className="sr-only">Close</span>
                            </AlertDialogCancel>
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            {selectedBooking && (
                              <div className="mt-4 space-y-4">
                                <div className="flex justify-between">
                                  <span className="text-sm font-medium">Booking ID:</span>
                                  <span className="text-sm">{selectedBooking.id}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm font-medium">Date:</span>
                                  <span className="text-sm">{formatDate(selectedBooking.date)}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm font-medium">Time:</span>
                                  <span className="text-sm">{formatTime(selectedBooking.time)}</span>
                                </div>
                                <div className="space-y-2">
                                  <span className="text-sm font-medium">Pickup Location:</span>
                                  <div className="flex items-start gap-2">
                                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">{selectedBooking.pickup}</span>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <span className="text-sm font-medium">Drop-off Location:</span>
                                  <div className="flex items-start gap-2">
                                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">{selectedBooking.dropoff}</span>
                                  </div>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm font-medium">Status:</span>
                                  <Badge
                                    variant="outline"
                                    className={`${getStatusColor(selectedBooking.status)} capitalize`}
                                  >
                                    {selectedBooking.status}
                                  </Badge>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm font-medium">Vehicle:</span>
                                  <span className="text-sm">{selectedBooking.vehicle}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm font-medium">Price:</span>
                                  <span className="text-sm">${selectedBooking.price.toFixed(2)}</span>
                                </div>
                              </div>
                            )}
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogAction className="bg-yellow-500 hover:bg-yellow-600 text-black">
                            Close
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}