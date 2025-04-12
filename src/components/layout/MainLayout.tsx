
import React, { ReactNode, useState } from 'react';
import { Home, Users, Activity, Calendar, AlertCircle, Settings, LogOut, Menu, X, PanelTop } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const menuItems = [
    { title: "Dashboard", path: "/dashboard", icon: Home },
    { title: "Patients", path: "/patients", icon: Users },
    { title: "Rounds", path: "/rounds", icon: Activity },
    { title: "Schedule", path: "/schedule", icon: Calendar },
    { title: "Alerts", path: "/alerts", icon: AlertCircle },
  ];
  
  const bottomMenuItems = [
    { title: "Settings", path: "/settings", icon: Settings },
    { title: "Logout", path: "/", icon: LogOut },
  ];
  
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-10 border-b border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-medical-blue text-white">
                <PanelTop size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold">Care Compass</span>
                <span className="text-xs text-muted-foreground">Smart Assistant</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <NavigationMenu>
                <NavigationMenuList>
                  {menuItems.map((item) => (
                    <NavigationMenuItem key={item.path}>
                      <Link to={item.path}>
                        <Button 
                          variant={location.pathname === item.path ? "default" : "ghost"} 
                          className={cn(
                            "flex items-center gap-2",
                            location.pathname === item.path && "bg-medical-blue text-white hover:bg-medical-blue/90"
                          )}
                        >
                          <item.icon size={18} />
                          <span>{item.title}</span>
                        </Button>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            
            {/* User Profile & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link to="/settings">
                    <Settings size={20} />
                  </Link>
                </Button>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-medical-lightBlue text-white">JD</AvatarFallback>
                  </Avatar>
                  <div className="hidden lg:flex flex-col overflow-hidden">
                    <span className="font-medium">Dr. Jayanth</span>
                    <span className="truncate text-xs text-muted-foreground">Junior Resident</span>
                  </div>
                </div>
              </div>
              
              {/* Mobile Menu Drawer Trigger */}
              <div className="md:hidden">
                <Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                  <DrawerTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu size={24} />
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent className="h-[80vh]">
                    <div className="px-4 py-6">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-medical-blue text-white">
                            <PanelTop size={20} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-lg font-semibold">Care Compass</span>
                            <span className="text-xs text-muted-foreground">Smart Assistant</span>
                          </div>
                        </div>
                        <DrawerClose asChild>
                          <Button variant="ghost" size="icon">
                            <X size={24} />
                          </Button>
                        </DrawerClose>
                      </div>
                      
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 mb-4 p-2 rounded-lg bg-gray-100">
                          <Avatar>
                            <AvatarImage src="" />
                            <AvatarFallback className="bg-medical-lightBlue text-white">JD</AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <span className="font-medium">Dr. Jayanth</span>
                            <span className="text-xs text-muted-foreground">Junior Resident</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          {menuItems.map((item) => (
                            <DrawerClose key={item.path} asChild>
                              <Link to={item.path} className="w-full">
                                <Button 
                                  variant={location.pathname === item.path ? "default" : "ghost"} 
                                  className={cn(
                                    "w-full justify-start gap-2",
                                    location.pathname === item.path && "bg-medical-blue text-white hover:bg-medical-blue/90"
                                  )}
                                >
                                  <item.icon size={18} />
                                  <span>{item.title}</span>
                                </Button>
                              </Link>
                            </DrawerClose>
                          ))}
                        </div>
                        
                        <div className="border-t pt-4 mt-2">
                          {bottomMenuItems.map((item) => (
                            <DrawerClose key={item.path} asChild>
                              <Link to={item.path} className="w-full">
                                <Button variant="ghost" className="w-full justify-start gap-2">
                                  <item.icon size={18} />
                                  <span>{item.title}</span>
                                </Button>
                              </Link>
                            </DrawerClose>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        {children}
      </main>
    </div>
  );
}
