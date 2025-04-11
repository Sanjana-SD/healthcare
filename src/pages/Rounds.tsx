
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  ClipboardCheck, 
  ClipboardList, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  Stethoscope,
  FileText,
  UserRound,
  ListChecks
} from 'lucide-react';

export default function Rounds() {
  const [selectedWard, setSelectedWard] = useState<string>('all');
  
  // Sample data for rounds
  const rounds = [
    {
      id: 1,
      name: 'Morning Rounds',
      description: 'Regular check of patients in Ward A',
      time: '08:00 AM - 10:00 AM',
      ward: 'Ward A',
      status: 'in-progress',
      progress: 60,
      patientsTotal: 10,
      patientsCompleted: 6,
    },
    {
      id: 2,
      name: 'Afternoon Rounds',
      description: 'Follow-up checks for post-op patients',
      time: '02:00 PM - 04:00 PM',
      ward: 'Ward B',
      status: 'scheduled',
      progress: 0,
      patientsTotal: 8,
      patientsCompleted: 0,
    },
    {
      id: 3,
      name: 'Evening Rounds',
      description: 'Final check before night shift handover',
      time: '06:00 PM - 07:30 PM',
      ward: 'Ward C',
      status: 'scheduled',
      progress: 0,
      patientsTotal: 12,
      patientsCompleted: 0,
    },
    {
      id: 4,
      name: 'ICU Rounds',
      description: 'Detailed assessment of ICU patients',
      time: '11:00 AM - 12:30 PM',
      ward: 'ICU',
      status: 'completed',
      progress: 100,
      patientsTotal: 5,
      patientsCompleted: 5,
    },
  ];

  // Sample patients for rounds
  const roundPatients = [
    {
      id: 1,
      name: 'Robert Johnson',
      age: 68,
      room: '204-A',
      diagnosis: 'Hypertension, Type 2 Diabetes',
      lastVitals: { bp: '130/85', hr: 72, temp: 36.8, spo2: 97 },
      status: 'stable',
      completed: true,
      notes: 'Patient is responding well to new medication regimen.',
      tasks: [
        { id: 1, description: 'Check blood pressure', completed: true },
        { id: 2, description: 'Review medication adherence', completed: true },
        { id: 3, description: 'Assess foot condition', completed: true },
      ],
    },
    {
      id: 2,
      name: 'Maria Garcia',
      age: 42,
      room: '105-B',
      diagnosis: 'Post-Op Recovery (Appendectomy)',
      lastVitals: { bp: '120/75', hr: 80, temp: 37.2, spo2: 98 },
      status: 'improving',
      completed: true,
      notes: 'Surgical site looks clean, minimal pain reported.',
      tasks: [
        { id: 1, description: 'Check surgical site', completed: true },
        { id: 2, description: 'Pain assessment', completed: true },
        { id: 3, description: 'Review discharge plan', completed: true },
      ],
    },
    {
      id: 3,
      name: 'James Williams',
      age: 54,
      room: '302-C',
      diagnosis: 'Pneumonia',
      lastVitals: { bp: '135/90', hr: 92, temp: 38.5, spo2: 93 },
      status: 'critical',
      completed: true,
      notes: 'Oxygen requirement has increased, consider respiratory therapy consult.',
      tasks: [
        { id: 1, description: 'Assess respiratory status', completed: true },
        { id: 2, description: 'Review oxygen therapy', completed: true },
        { id: 3, description: 'Check latest chest X-ray', completed: true },
        { id: 4, description: 'Adjust antibiotics if needed', completed: true },
      ],
    },
    {
      id: 4,
      name: 'Sophia Lee',
      age: 35,
      room: '201-A',
      diagnosis: 'Migraine, Anxiety',
      lastVitals: { bp: '115/70', hr: 75, temp: 36.6, spo2: 99 },
      status: 'stable',
      completed: true,
      notes: 'Migraine has improved with current medication.',
      tasks: [
        { id: 1, description: 'Pain assessment', completed: true },
        { id: 2, description: 'Assess for triggers', completed: true },
        { id: 3, description: 'Medication review', completed: true },
      ],
    },
    {
      id: 5,
      name: 'Michael Brown',
      age: 71,
      room: '109-B',
      diagnosis: 'COPD, Heart Failure',
      lastVitals: { bp: '145/85', hr: 85, temp: 36.9, spo2: 92 },
      status: 'declining',
      completed: true,
      notes: 'Increasing peripheral edema, consider adjustment of diuretics.',
      tasks: [
        { id: 1, description: 'Check lung sounds', completed: true },
        { id: 2, description: 'Assess for edema', completed: true },
        { id: 3, description: 'Review fluid intake', completed: true },
        { id: 4, description: 'Check weight', completed: true },
      ],
    },
    {
      id: 6,
      name: 'Emily Wilson',
      age: 29,
      room: '203-A',
      diagnosis: 'Pregnancy, Gestational Diabetes',
      lastVitals: { bp: '125/80', hr: 82, temp: 36.7, spo2: 99 },
      status: 'stable',
      completed: false,
      notes: '',
      tasks: [
        { id: 1, description: 'Check blood glucose levels', completed: false },
        { id: 2, description: 'Fetal heart rate check', completed: false },
        { id: 3, description: 'Nutritional assessment', completed: false },
        { id: 4, description: 'Review insulin regimen', completed: false },
      ],
    },
    {
      id: 7,
      name: 'David Kim',
      age: 62,
      room: '304-C',
      diagnosis: 'Post-Stroke Recovery',
      lastVitals: { bp: '140/85', hr: 78, temp: 36.6, spo2: 97 },
      status: 'improving',
      completed: false,
      notes: '',
      tasks: [
        { id: 1, description: 'Neurological assessment', completed: false },
        { id: 2, description: 'Mobility evaluation', completed: false },
        { id: 3, description: 'Swallowing assessment', completed: false },
        { id: 4, description: 'Speech therapy follow-up', completed: false },
      ],
    },
  ];

  // Filter rounds by ward
  const filteredRounds = selectedWard === 'all' 
    ? rounds 
    : rounds.filter(round => round.ward === selectedWard);
  
  // Get unique wards
  const wards = ['all', ...new Set(rounds.map(round => round.ward))];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'completed':
        return <Badge className="bg-green-500">Completed</Badge>;
      case 'in-progress':
        return <Badge className="bg-blue-500">In Progress</Badge>;
      case 'scheduled':
        return <Badge className="bg-gray-500">Scheduled</Badge>;
      default:
        return <Badge className="bg-gray-500">{status}</Badge>;
    }
  };

  const getVitalsDisplay = (vitals: {bp: string, hr: number, temp: number, spo2: number}) => {
    return (
      <div className="grid grid-cols-4 gap-2 mt-2">
        <div className="text-xs">
          <span className="block text-muted-foreground">BP</span>
          <span className="font-medium">{vitals.bp}</span>
        </div>
        <div className="text-xs">
          <span className="block text-muted-foreground">HR</span>
          <span className="font-medium">{vitals.hr} bpm</span>
        </div>
        <div className="text-xs">
          <span className="block text-muted-foreground">Temp</span>
          <span className="font-medium">{vitals.temp}°C</span>
        </div>
        <div className="text-xs">
          <span className="block text-muted-foreground">SpO2</span>
          <span className="font-medium">{vitals.spo2}%</span>
        </div>
      </div>
    );
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Rounds</h1>
            <p className="text-muted-foreground">
              Manage patient rounds and daily assessments
            </p>
          </div>
          <Button className="bg-medical-blue hover:bg-blue-600">
            <ClipboardList className="mr-2 h-4 w-4" />
            Start New Round
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          <Card className="md:col-span-4">
            <CardHeader>
              <CardTitle>Today's Rounds</CardTitle>
              <CardDescription>
                Monitor round progress across all wards
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                {/* Fix: Wrap TabsList in Tabs component */}
                <Tabs defaultValue={selectedWard} onValueChange={setSelectedWard}>
                  <TabsList className="w-full">
                    {wards.map((ward) => (
                      <TabsTrigger
                        key={ward}
                        value={ward}
                        className={selectedWard === ward ? 'bg-medical-blue text-white' : ''}
                      >
                        {ward === 'all' ? 'All Wards' : ward}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
              
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-4">
                  {filteredRounds.map((round) => (
                    <div 
                      key={round.id} 
                      className={`p-4 rounded-md border ${
                        round.status === 'completed' 
                          ? 'bg-green-50 border-green-200' 
                          : round.status === 'in-progress'
                            ? 'bg-blue-50 border-blue-200'
                            : 'bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{round.name}</h3>
                        {getStatusBadge(round.status)}
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{round.description}</p>
                      
                      <div className="flex items-center text-sm mb-2">
                        <Clock size={14} className="mr-1.5 text-muted-foreground" />
                        <span>{round.time}</span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{round.progress}%</span>
                        </div>
                        <Progress value={round.progress} className="h-2" />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>{round.patientsCompleted} of {round.patientsTotal} patients</span>
                          {round.status !== 'scheduled' && (
                            <span>
                              {round.status === 'completed' 
                                ? 'Completed' 
                                : 'In progress'}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {round.status === 'in-progress' && (
                        <Button 
                          className="w-full mt-3 bg-medical-blue hover:bg-blue-600"
                          size="sm"
                        >
                          Continue Round
                        </Button>
                      )}
                      
                      {round.status === 'scheduled' && (
                        <Button 
                          className="w-full mt-3"
                          size="sm"
                          variant="outline"
                        >
                          Start Round
                        </Button>
                      )}
                      
                      {round.status === 'completed' && (
                        <Button 
                          className="w-full mt-3"
                          size="sm"
                          variant="outline"
                        >
                          View Summary
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card className="md:col-span-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Morning Rounds - Ward A</CardTitle>
                  <CardDescription>
                    In Progress: 6 of 10 patients completed
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-1.5 h-4 w-4" />
                    Export Notes
                  </Button>
                  <Button size="sm" className="bg-medical-blue hover:bg-blue-600">
                    <CheckCircle2 className="mr-1.5 h-4 w-4" />
                    Complete Round
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="patients">
                <TabsList className="mb-4">
                  <TabsTrigger value="patients">Patients</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                </TabsList>
                
                <TabsContent value="patients" className="mt-0">
                  <div className="rounded-md border">
                    <ScrollArea className="h-[500px]">
                      <div className="space-y-4 p-4">
                        {roundPatients.map((patient) => (
                          <div 
                            key={patient.id}
                            className={`p-4 rounded-md border ${
                              patient.completed 
                                ? 'bg-green-50 border-green-200' 
                                : 'bg-white'
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex items-start space-x-3">
                                <Avatar>
                                  <AvatarImage src="" />
                                  <AvatarFallback className="bg-medical-lightBlue text-white">
                                    {patient.name.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                
                                <div>
                                  <div className="flex items-center">
                                    <h3 className="font-medium">{patient.name}</h3>
                                    {patient.status === 'critical' && (
                                      <AlertCircle size={16} className="ml-2 text-medical-alert" />
                                    )}
                                  </div>
                                  
                                  <div className="text-sm text-muted-foreground">
                                    {patient.age} yrs | Room {patient.room} | {patient.diagnosis}
                                  </div>
                                  
                                  {patient.completed && (
                                    <div className="mt-2 text-sm">
                                      <div className="flex items-center text-gray-700 font-medium">
                                        <FileText size={14} className="mr-1.5" />
                                        Notes:
                                      </div>
                                      <p className="text-gray-600 mt-1">
                                        {patient.notes}
                                      </p>
                                    </div>
                                  )}
                                  
                                  {getVitalsDisplay(patient.lastVitals)}
                                </div>
                              </div>
                              
                              <div className="flex flex-col items-end">
                                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  patient.status === 'stable' 
                                    ? 'bg-green-100 text-green-800' 
                                    : patient.status === 'improving' 
                                      ? 'bg-blue-100 text-blue-800'
                                      : patient.status === 'critical'
                                        ? 'bg-red-100 text-red-800'
                                        : 'bg-amber-100 text-amber-800'
                                }`}>
                                  {patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}
                                </div>
                                
                                <div className="mt-2 text-sm">
                                  <div className="flex items-center">
                                    <ListChecks size={14} className="mr-1.5 text-muted-foreground" />
                                    <span>
                                      {patient.tasks.filter(t => t.completed).length}/{patient.tasks.length} Tasks
                                    </span>
                                  </div>
                                </div>
                                
                                {!patient.completed && (
                                  <Button 
                                    size="sm"
                                    className="mt-3 bg-medical-blue hover:bg-blue-600"
                                  >
                                    <Stethoscope className="mr-1.5 h-4 w-4" />
                                    Assess
                                  </Button>
                                )}
                                
                                {patient.completed && (
                                  <Button 
                                    size="sm"
                                    variant="outline"
                                    className="mt-3"
                                  >
                                    <FileText className="mr-1.5 h-4 w-4" />
                                    View Details
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </TabsContent>
                
                <TabsContent value="completed" className="mt-0">
                  <div className="rounded-md border">
                    <ScrollArea className="h-[500px]">
                      <div className="space-y-4 p-4">
                        {roundPatients
                          .filter(patient => patient.completed)
                          .map((patient) => (
                            <div 
                              key={patient.id}
                              className="p-4 rounded-md border bg-green-50 border-green-200"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <CheckCircle2 size={20} className="text-green-500" />
                                  <div>
                                    <h3 className="font-medium">{patient.name}</h3>
                                    <div className="text-sm text-muted-foreground">
                                      Room {patient.room} | Completed
                                    </div>
                                  </div>
                                </div>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <ArrowRight size={16} />
                                </Button>
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    </ScrollArea>
                  </div>
                </TabsContent>
                
                <TabsContent value="pending" className="mt-0">
                  <div className="rounded-md border">
                    <ScrollArea className="h-[500px]">
                      <div className="space-y-4 p-4">
                        {roundPatients
                          .filter(patient => !patient.completed)
                          .map((patient) => (
                            <div 
                              key={patient.id}
                              className="p-4 rounded-md border"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <Clock size={20} className="text-amber-500" />
                                  <div>
                                    <h3 className="font-medium">{patient.name}</h3>
                                    <div className="text-sm text-muted-foreground">
                                      Room {patient.room} | Pending
                                    </div>
                                  </div>
                                </div>
                                <Button size="sm" className="bg-medical-blue hover:bg-blue-600">
                                  <Stethoscope className="mr-1.5 h-4 w-4" />
                                  Assess
                                </Button>
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    </ScrollArea>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
