
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { AlertCircle, ArrowRight, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Sample data for demonstration
const patients = [
  {
    id: 1,
    name: 'Robert Johnson',
    age: 68,
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
    diagnosis: 'COPD, Heart Failure',
    status: 'declining',
    room: '109-B',
    lastUpdate: '45 mins ago',
    alertLevel: 'medium',
  },
];

export default function PatientList() {
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
        <Clock size={16} className="text-amber-500 mr-1" />
        <span className="text-xs text-amber-500">Review</span>
      </div>
    );
  };
  
  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Current Patients</CardTitle>
          <CardDescription>Manage your active patients</CardDescription>
        </div>
        <Button size="sm" className="bg-medical-blue hover:bg-blue-600">
          View All Patients
        </Button>
      </CardHeader>
      <CardContent>
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
                    <div>
                      <div className="font-medium">{patient.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {patient.age} yrs | {patient.diagnosis}
                      </div>
                      {getAlertIndicator(patient.alertLevel)}
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(patient.status)}</TableCell>
                  <TableCell>{patient.room}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1 text-muted-foreground" />
                      <span className="text-sm">{patient.lastUpdate}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
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
  );
}
