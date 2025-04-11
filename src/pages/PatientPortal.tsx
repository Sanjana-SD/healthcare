
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SymptomTracker from '@/components/patients/SymptomTracker';
import MedicationTracker from '@/components/patients/MedicationTracker';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Clock, Calendar, BarChart, Home, Settings } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function PatientPortal() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white border-b px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-medical-blue text-white rounded-full flex items-center justify-center">
            <User size={18} />
          </div>
          <div className="font-semibold text-lg">Care Compass</div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Settings size={18} />
          </Button>
          <Avatar>
            <AvatarFallback className="bg-medical-green text-white">TS</AvatarFallback>
          </Avatar>
        </div>
      </header>
      
      <main className="max-w-4xl mx-auto px-4 py-6">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold">My Health Portal</h1>
            <Button variant="link" className="text-medical-blue p-0">
              <Home size={16} className="mr-1" />
              Exit to Home
            </Button>
          </div>
          <p className="text-muted-foreground">
            Track and manage your health journey
          </p>
        </div>
        
        <Card className="mb-6">
          <CardContent className="p-5">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-14 w-14">
                  <AvatarFallback className="bg-medical-green text-xl font-medium text-white">TS</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-bold">Tom Smith</h2>
                  <p className="text-sm text-muted-foreground">
                    Patient ID: 12345 • DOB: 05/12/1980
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-medical-blue text-white mx-auto">
                    <Calendar size={20} />
                  </div>
                  <span className="text-xs block mt-1">Next Appt.</span>
                  <span className="text-sm font-medium">Apr 15</span>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-medical-green text-white mx-auto">
                    <Clock size={20} />
                  </div>
                  <span className="text-xs block mt-1">Last Check</span>
                  <span className="text-sm font-medium">7 days ago</span>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-medical-lightBlue text-white mx-auto">
                    <BarChart size={20} />
                  </div>
                  <span className="text-xs block mt-1">Entries</span>
                  <span className="text-sm font-medium">18</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="symptoms" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="symptoms">Symptom Tracker</TabsTrigger>
            <TabsTrigger value="medications">Medication Tracker</TabsTrigger>
          </TabsList>
          <TabsContent value="symptoms" className="space-y-4">
            <SymptomTracker />
          </TabsContent>
          <TabsContent value="medications" className="space-y-4">
            <MedicationTracker />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
