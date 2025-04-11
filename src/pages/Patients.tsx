
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Filter, UserPlus, ArrowRight, AlertCircle } from 'lucide-react';

export default function Patients() {
  // Sample patient data
  const patients = [
    {
      id: 1,
      name: 'Robert Johnson',
      age: 68,
      gender: 'Male',
      diagnosis: 'Hypertension, Type 2 Diabetes',
      status: 'stable',
      room: '204-A',
      lastUpdate: '2 hours ago',
      alertLevel: 'none',
    },
    {
      id: 2,
      name: 'Maria Garcia',
      age: 42,
      gender: 'Female',
      diagnosis: 'Post-Op Recovery (Appendectomy)',
      status: 'improving',
      room: '105-B',
      lastUpdate: '30 mins ago',
      alertLevel: 'none',
    },
    {
      id: 3,
      name: 'James Williams',
      age: 54,
      gender: 'Male',
      diagnosis: 'Pneumonia',
      status: 'critical',
      room: '302-C',
      lastUpdate: '15 mins ago',
      alertLevel: 'high',
    },
    {
      id: 4,
      name: 'Sophia Lee',
      age: 35,
      gender: 'Female',
      diagnosis: 'Migraine, Anxiety',
      status: 'stable',
      room: '201-A',
      lastUpdate: '1 hour ago',
      alertLevel: 'medium',
    },
    {
      id: 5,
      name: 'Michael Brown',
      age: 71,
      gender: 'Male',
      diagnosis: 'COPD, Heart Failure',
      status: 'declining',
      room: '109-B',
      lastUpdate: '45 mins ago',
      alertLevel: 'medium',
    },
    {
      id: 6,
      name: 'Emily Wilson',
      age: 29,
      gender: 'Female',
      diagnosis: 'Pregnancy, Gestational Diabetes',
      status: 'stable',
      room: '203-A',
      lastUpdate: '2 hours ago',
      alertLevel: 'none',
    },
    {
      id: 7,
      name: 'David Kim',
      age: 62,
      gender: 'Male',
      diagnosis: 'Post-Stroke Recovery',
      status: 'improving',
      room: '304-C',
      lastUpdate: '1 hour ago',
      alertLevel: 'none',
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { color: string, label: string }> = {
      stable: { color: 'bg-green-100 text-green-800', label: 'Stable' },
      improving: { color: 'bg-blue-100 text-blue-800', label: 'Improving' },
      critical: { color: 'bg-red-100 text-red-800', label: 'Critical' },
      declining: { color: 'bg-amber-100 text-amber-800', label: 'Declining' },
    };
    
    const statusInfo = statusMap[status] || { color: 'bg-gray-100 text-gray-800', label: status };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusInfo.color}`}>
        {statusInfo.label}
      </span>
    );
  };

  const getAlertIndicator = (level: string) => {
    if (level === 'none') return null;
    
    return level === 'high' ? (
      <div className="flex items-center">
        <AlertCircle size={16} className="text-medical-alert mr-1 animate-pulse" />
        <span className="text-xs text-medical-alert">Urgent</span>
      </div>
    ) : (
      <div className="flex items-center">
        <AlertCircle size={16} className="text-amber-500 mr-1" />
        <span className="text-xs text-amber-500">Review</span>
      </div>
    );
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Patients</h1>
            <p className="text-muted-foreground">
              Manage and monitor all patient information
            </p>
          </div>
          <Button className="bg-medical-blue hover:bg-blue-600">
            <UserPlus className="mr-2 h-4 w-4" />
            Add New Patient
          </Button>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Patient Directory</CardTitle>
            <CardDescription>
              View and manage all patients in your care
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search patients..."
                  className="pl-8 bg-white"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patient</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Room</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {patients.map((patient) => (
                    <TableRow key={patient.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src="" />
                            <AvatarFallback className="bg-medical-lightBlue text-white">
                              {patient.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{patient.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {patient.age} yrs | {patient.gender} | {patient.diagnosis}
                            </div>
                            {getAlertIndicator(patient.alertLevel)}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(patient.status)}</TableCell>
                      <TableCell>{patient.room}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{patient.lastUpdate}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <ArrowRight size={16} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
