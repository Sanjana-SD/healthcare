
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { 
  AlertCircle, 
  Thermometer, 
  PlusCircle, 
  AlertTriangle, 
  Clock, 
  UserRound, 
  Pill,
  Activity,
  Bell,
  BellOff
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Alerts() {
  // Sample data
  const alerts = [
    {
      id: 1,
      patient: 'James Williams',
      message: 'High fever (39.2°C) detected',
      time: '15 mins ago',
      type: 'critical',
      icon: Thermometer,
      category: 'vitals',
    },
    {
      id: 2,
      patient: 'Sophia Lee',
      message: 'Potential drug interaction: Sumatriptan and Fluoxetine',
      time: '45 mins ago',
      type: 'warning',
      icon: AlertTriangle,
      category: 'medications',
    },
    {
      id: 3,
      patient: 'Michael Brown',
      message: 'Oxygen saturation below 92%',
      time: '1 hour ago',
      type: 'critical',
      icon: AlertCircle,
      category: 'vitals',
    },
    {
      id: 4,
      patient: 'Maria Garcia',
      message: 'New lab results available',
      time: '2 hours ago',
      type: 'info',
      icon: PlusCircle,
      category: 'labs',
    },
    {
      id: 5,
      patient: 'Michael Brown',
      message: 'Medication schedule updated',
      time: '3 hours ago',
      type: 'info',
      icon: Clock,
      category: 'medications',
    },
    {
      id: 6,
      patient: 'Robert Johnson',
      message: 'Blood pressure reading: 170/95 mmHg',
      time: '1 hour ago',
      type: 'warning',
      icon: Activity,
      category: 'vitals',
    },
    {
      id: 7,
      patient: 'David Kim',
      message: 'Missed evening medication dose',
      time: '4 hours ago',
      type: 'warning',
      icon: Pill,
      category: 'medications',
    },
    {
      id: 8,
      patient: 'Emily Wilson',
      message: 'Patient reported increased pain (7/10)',
      time: '2 hours ago',
      type: 'warning',
      icon: AlertTriangle,
      category: 'symptoms',
    },
  ];

  const getAlertStyles = (type: string) => {
    const styles = {
      critical: {
        card: 'border-l-4 border-medical-alert',
        icon: 'text-medical-alert',
        badge: 'bg-medical-alert',
      },
      warning: {
        card: 'border-l-4 border-amber-500',
        icon: 'text-amber-500',
        badge: 'bg-amber-500',
      },
      info: {
        card: 'border-l-4 border-medical-blue',
        icon: 'text-medical-blue',
        badge: 'bg-medical-blue',
      },
    };
    
    return styles[type as keyof typeof styles] || styles.info;
  };

  // Filter alerts by category
  const filterAlertsByCategory = (category: string) => {
    if (category === 'all') return alerts;
    return alerts.filter(alert => alert.category === category);
  };

  const AlertCard = ({ alert }: { alert: typeof alerts[0] }) => {
    const styles = getAlertStyles(alert.type);
    const Icon = alert.icon;
    
    return (
      <div 
        key={alert.id} 
        className={`p-4 mb-3 rounded-md bg-white shadow-sm ${styles.card}`}
      >
        <div className="flex items-start">
          <div className={`mr-3 ${styles.icon}`}>
            <Icon size={20} />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center">
                <UserRound size={16} className="mr-1.5 text-gray-500" />
                <span className="font-medium">{alert.patient}</span>
              </div>
              <Badge variant="outline" className={`${styles.badge} text-white text-xs`}>
                {alert.type}
              </Badge>
            </div>
            <p className="text-sm">{alert.message}</p>
            <div className="text-xs text-muted-foreground mt-1 flex items-center justify-between">
              <div className="flex items-center">
                <Clock size={12} className="mr-1" />
                {alert.time}
              </div>
              <div className="flex space-x-1">
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <Bell size={14} />
                </Button>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <BellOff size={14} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Alerts</h1>
          <p className="text-muted-foreground">
            Monitor important notifications and patient alerts
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-4">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Alert Summary</CardTitle>
              <CardDescription>Current alert status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-md">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-medical-alert mr-2" />
                  <span>Critical</span>
                </div>
                <Badge className="bg-medical-alert">{alerts.filter(a => a.type === 'critical').length}</Badge>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-amber-50 rounded-md">
                <div className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                  <span>Warnings</span>
                </div>
                <Badge className="bg-amber-500">{alerts.filter(a => a.type === 'warning').length}</Badge>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-md">
                <div className="flex items-center">
                  <PlusCircle className="h-5 w-5 text-medical-blue mr-2" />
                  <span>Information</span>
                </div>
                <Badge className="bg-medical-blue">{alerts.filter(a => a.type === 'info').length}</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-3">
            <CardHeader className="pb-3">
              <CardTitle>Alert Feed</CardTitle>
              <CardDescription>All recent alerts and notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList className="mb-4">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="vitals">Vitals</TabsTrigger>
                  <TabsTrigger value="medications">Medications</TabsTrigger>
                  <TabsTrigger value="labs">Lab Results</TabsTrigger>
                  <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-0">
                  <ScrollArea className="h-[500px]">
                    {alerts.map(alert => (
                      <AlertCard key={alert.id} alert={alert} />
                    ))}
                  </ScrollArea>
                </TabsContent>

                {['vitals', 'medications', 'labs', 'symptoms'].map(category => (
                  <TabsContent key={category} value={category} className="mt-0">
                    <ScrollArea className="h-[500px]">
                      {filterAlertsByCategory(category).length > 0 ? (
                        filterAlertsByCategory(category).map(alert => (
                          <AlertCard key={alert.id} alert={alert} />
                        ))
                      ) : (
                        <div className="flex flex-col items-center justify-center py-10 text-center">
                          <Bell className="h-10 w-10 text-muted-foreground mb-2" />
                          <h3 className="font-medium mb-1">No alerts</h3>
                          <p className="text-sm text-muted-foreground">
                            There are currently no {category} alerts to display
                          </p>
                        </div>
                      )}
                    </ScrollArea>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
