
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import StatCard from '@/components/dashboard/StatCard';
import PatientList from '@/components/dashboard/PatientList';
import AlertsCard from '@/components/dashboard/AlertsCard';
import { Users, Activity, Calendar, AlertTriangle, ClipboardCheck } from 'lucide-react';

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, Dr. Jayanth. Here's an overview of your clinic.
          </p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard 
            title="Total Patients" 
            value="24" 
            description="from last month" 
            icon={<Users size={18} />} 
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard 
            title="Today's Rounds" 
            value="8" 
            description="2 remaining" 
            icon={<Activity size={18} />} 
          />
          <StatCard 
            title="Scheduled Today" 
            value="15" 
            description="appointments" 
            icon={<Calendar size={18} />} 
          />
          <StatCard 
            title="Critical Alerts" 
            value="3" 
            description="require attention" 
            icon={<AlertTriangle size={18} />} 
            color="bg-medical-alert"
          />
        </div>
        
        <div className="grid gap-4 md:grid-cols-3">
          <PatientList />
          <AlertsCard />
        </div>
        
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-4">Today's Tasks</h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="medical-card">
              <div className="flex items-start">
                <div className="mr-3 text-medical-blue">
                  <ClipboardCheck size={24} />
                </div>
                <div>
                  <h3 className="font-medium">Morning Rounds</h3>
                  <p className="text-sm text-muted-foreground">Complete rounds for patients in Ward A</p>
                  <div className="mt-2 flex items-center text-xs text-muted-foreground">
                    <span className="font-medium text-medical-blue">4/5 Completed</span>
                    <span className="mx-2">•</span>
                    <span>Due by 11:00 AM</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="medical-card">
              <div className="flex items-start">
                <div className="mr-3 text-medical-blue">
                  <ClipboardCheck size={24} />
                </div>
                <div>
                  <h3 className="font-medium">Review Lab Results</h3>
                  <p className="text-sm text-muted-foreground">Check new lab results for 3 patients</p>
                  <div className="mt-2 flex items-center text-xs text-muted-foreground">
                    <span className="font-medium text-medical-blue">1/3 Completed</span>
                    <span className="mx-2">•</span>
                    <span>Due by 2:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="medical-card card-alert">
              <div className="flex items-start">
                <div className="mr-3 text-medical-alert">
                  <ClipboardCheck size={24} />
                </div>
                <div>
                  <h3 className="font-medium">Medication Review</h3>
                  <p className="text-sm text-muted-foreground">Review medication orders for critical patients</p>
                  <div className="mt-2 flex items-center text-xs text-muted-foreground">
                    <span className="font-medium text-medical-alert">0/2 Completed</span>
                    <span className="mx-2">•</span>
                    <span>Overdue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
