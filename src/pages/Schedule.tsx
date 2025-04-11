
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  UserRound, 
  Plus, 
  ArrowLeft, 
  ArrowRight,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';

export default function Schedule() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [viewMode, setViewMode] = useState<'day' | 'week'>('day');
  
  // Sample appointment data
  const appointments = [
    {
      id: 1,
      patient: 'Maria',
      time: '09:00 AM',
      duration: '30 min',
      type: 'Follow-up',
      status: 'scheduled',
    },
    {
      id: 2,
      patient: 'Rahul',
      time: '10:00 AM',
      duration: '45 min',
      type: 'Medication Review',
      status: 'scheduled',
    },
    {
      id: 3,
      patient: 'Sanjana',
      time: '11:30 AM',
      duration: '30 min',
      type: 'Consultation',
      status: 'scheduled',
    },
    {
      id: 4,
      patient: 'James',
      time: '01:15 PM',
      duration: '45 min',
      type: 'Check-up',
      status: 'completed',
    },
    {
      id: 5,
      patient: 'Aman',
      time: '02:30 PM',
      duration: '30 min',
      type: 'Follow-up',
      status: 'completed',
    },
    {
      id: 6,
      patient: 'Avani',
      time: '03:30 PM',
      duration: '45 min',
      type: 'Prenatal Check',
      status: 'scheduled',
    },
    {
      id: 7,
      patient: 'Ram',
      time: '04:30 PM',
      duration: '30 min',
      type: 'Post-op Review',
      status: 'scheduled',
    },
  ];

  // Time slots for day view
  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', 
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', 
    '4:00 PM', '5:00 PM'
  ];

  const getAppointmentsByStatus = (status: string) => {
    return appointments.filter(appointment => appointment.status === status);
  };

  // Format the currently selected date
  const formatDate = (date?: Date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  // Get appointments for the selected date
  const getAppointmentsForDate = () => {
    // In a real app, you would filter by the actual date
    // Here we're just returning all appointments for demo purposes
    return appointments;
  };

  const AppointmentCard = ({ appointment }: { appointment: typeof appointments[0] }) => {
    const isCompleted = appointment.status === 'completed';
    
    return (
      <div className={`p-3 mb-3 rounded-md border-l-4 ${
        isCompleted ? 'border-green-500 bg-green-50' : 'border-medical-blue bg-blue-50'
      }`}>
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center">
            <UserRound size={16} className="mr-1.5 text-gray-600" />
            <span className="font-medium">{appointment.patient}</span>
          </div>
          <Badge className={isCompleted ? 'bg-green-500' : 'bg-medical-blue'}>
            {isCompleted ? 'Completed' : appointment.type}
          </Badge>
        </div>
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <Clock size={14} className="mr-1.5" />
          <span>{appointment.time} ({appointment.duration})</span>
        </div>
      </div>
    );
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Schedule</h1>
            <p className="text-muted-foreground">
              Manage patient appointments and your daily schedule
            </p>
          </div>
          <Button className="bg-medical-blue hover:bg-blue-600">
            <Plus className="mr-2 h-4 w-4" />
            New Appointment
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          <Card className="md:col-span-4">
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
              <CardDescription>Select a date to view appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />

              <div className="mt-6 space-y-2">
                <h3 className="font-medium">Appointments Today</h3>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-medical-blue mr-2"></div>
                    <span className="text-sm">Scheduled</span>
                  </div>
                  <Badge className="bg-medical-blue">{getAppointmentsByStatus('scheduled').length}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm">Completed</span>
                  </div>
                  <Badge className="bg-green-500">{getAppointmentsByStatus('completed').length}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-8">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{formatDate(date)}</CardTitle>
                  <CardDescription>View and manage your appointments</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon">
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="day" onValueChange={(value) => setViewMode(value as 'day' | 'week')}>
                <div className="flex justify-between items-center mb-4">
                  <TabsList>
                    <TabsTrigger value="day">Day</TabsTrigger>
                    <TabsTrigger value="week">Week</TabsTrigger>
                  </TabsList>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarIcon className="mr-1 h-4 w-4" />
                    <span>Today, {new Date().toLocaleDateString()}</span>
                  </div>
                </div>

                <TabsContent value="day" className="mt-0">
                  <ScrollArea className="h-[500px] pr-4">
                    <div className="space-y-1">
                      {timeSlots.map((time, index) => {
                        const appsAtTime = appointments.filter(a => a.time.includes(time.replace(':00', '')));
                        
                        return (
                          <div key={index} className="grid grid-cols-12 gap-2">
                            <div className="col-span-2 py-3 text-right text-sm text-muted-foreground">
                              {time}
                            </div>
                            <div className="col-span-10 min-h-[60px] py-1 border-t">
                              {appsAtTime.length > 0 ? (
                                appsAtTime.map(app => (
                                  <div 
                                    key={app.id}
                                    className={`p-2 rounded-md shadow-sm mb-1 text-sm
                                      ${app.status === 'completed' 
                                        ? 'bg-green-100 border-l-2 border-green-500' 
                                        : 'bg-blue-100 border-l-2 border-medical-blue'
                                      }
                                    `}
                                  >
                                    <div className="flex items-center">
                                      {app.status === 'completed' 
                                        ? <CheckCircle2 size={14} className="text-green-500 mr-1" />
                                        : <Clock size={14} className="text-medical-blue mr-1" />
                                      }
                                      <span className="font-medium">{app.patient}</span>
                                    </div>
                                    <div className="text-xs text-gray-600 mt-1">
                                      {app.type} • {app.duration}
                                    </div>
                                  </div>
                                ))
                              ) : null}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </ScrollArea>
                </TabsContent>

                <TabsContent value="week" className="mt-0">
                  <div className="text-center py-10">
                    <CalendarIcon className="mx-auto h-10 w-10 text-muted-foreground mb-3" />
                    <h3 className="text-lg font-medium mb-1">Week View</h3>
                    <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                      The week view would display your schedule across the entire week.
                      Enable in a future update.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardDescription>Next scheduled appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {getAppointmentsForDate()
                .filter(a => a.status === 'scheduled')
                .slice(0, 3)
                .map(appointment => (
                  <AppointmentCard key={appointment.id} appointment={appointment} />
                ))
              }
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
