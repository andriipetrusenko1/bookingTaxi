"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Home, 
  Menu, 
  Car, 
  User, 
  LogOut, 
  Calendar, 
  Settings, 
  CreditCard, 
  HelpCircle 
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [open, setOpen] = useState(false);

  const routes = [
    {
      icon: <Home className="mr-2 h-4 w-4" />,
      href: "/",
      label: "Home",
      variant: "ghost" as const,
    },
    {
      icon: <Car className="mr-2 h-4 w-4" />,
      href: "/dashboard",
      label: "Bookings",
      variant: "default" as const,
    },
    {
      icon: <Calendar className="mr-2 h-4 w-4" />,
      href: "#",
      label: "Schedule",
      variant: "ghost" as const,
    },
    {
      icon: <CreditCard className="mr-2 h-4 w-4" />,
      href: "#",
      label: "Payments",
      variant: "ghost" as const,
    },
    {
      icon: <User className="mr-2 h-4 w-4" />,
      href: "#",
      label: "Profile",
      variant: "ghost" as const,
    },
    {
      icon: <Settings className="mr-2 h-4 w-4" />,
      href: "#",
      label: "Settings",
      variant: "ghost" as const,
    },
    {
      icon: <HelpCircle className="mr-2 h-4 w-4" />,
      href: "#",
      label: "Help",
      variant: "ghost" as const,
    },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Mobile sidebar trigger */}
      <div className="lg:hidden fixed top-3 left-3 z-30">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle sidebar</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <MobileSidebar routes={routes} setOpen={setOpen} />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-64 flex-col fixed inset-y-0 z-20">
        <DesktopSidebar routes={routes} />
      </aside>

      {/* Main content */}
      <div className="flex-1 lg:pl-64">
        <main className="pt-10 lg:pt-0">{children}</main>
      </div>
    </div>
  );
}

interface SidebarProps {
  routes: {
    icon: React.ReactNode;
    href: string;
    label: string;
    variant: "default" | "ghost";
  }[];
  setOpen?: (open: boolean) => void;
}

function MobileSidebar({ routes, setOpen }: SidebarProps) {
  return (
    <ScrollArea className="h-full py-6">
      <div className="px-4 mb-4">
        <h2 className="text-lg font-semibold">QuickRide</h2>
        <p className="text-sm text-muted-foreground">Dashboard</p>
      </div>
      <Separator />
      <div className="flex flex-col gap-1 p-2">
        {routes.map((route, i) => (
          <Button
            key={i}
            variant={route.variant}
            size="sm"
            className="justify-start"
            asChild
            onClick={() => setOpen?.(false)}
          >
            <Link href={route.href}>
              {route.icon}
              {route.label}
            </Link>
          </Button>
        ))}
      </div>
      <Separator className="my-4" />
      <div className="p-2">
        <Button
          variant="outline"
          size="sm"
          className="justify-start w-full text-red-500 hover:text-red-600 hover:bg-red-50"
          onClick={() => setOpen?.(false)}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </ScrollArea>
  );
}

function DesktopSidebar({ routes }: SidebarProps) {
  return (
    <div className="h-full border-r bg-background flex flex-col">
      <ScrollArea className="flex-1 py-6">
        <div className="px-6 mb-6">
          <h2 className="text-xl font-semibold">QuickRide</h2>
          <p className="text-sm text-muted-foreground">Dashboard</p>
        </div>
        <div className="space-y-1 px-3">
          {routes.map((route, i) => (
            <Button
              key={i}
              variant={route.variant}
              size="sm"
              className={cn("justify-start w-full", 
                route.variant === "default" && "bg-yellow-500 hover:bg-yellow-600 text-black"
              )}
              asChild
            >
              <Link href={route.href}>
                {route.icon}
                {route.label}
              </Link>
            </Button>
          ))}
        </div>
      </ScrollArea>
      <div className="border-t p-4">
        <Button
          variant="outline"
          size="sm"
          className="justify-start w-full text-red-500 hover:text-red-600 hover:bg-red-50"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}