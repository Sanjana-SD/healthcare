
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AlertCircle, Thermometer, PlusCircle, AlertTriangle, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Sample alerts data
const alerts = [
  {
    id: 1,
    patient: 'James Williams',
    message: 'High fever (39.2°C) detected',
    time: '15 mins ago',
    type: 'critical',
    icon: Thermometer,
  },
  {
    id: 2,
    patient: 'Sophia Lee',
    message: 'Potential drug interaction: Sumatriptan and Fluoxetine',
    time: '45 mins ago',
    type: 'warning',
    icon: AlertTriangle,
  },
  {
    id: 3,
    patient: 'Michael Brown',
    message: 'Oxygen saturation below 92%',
    time: '1 hour ago',
    type: 'critical',
    icon: AlertCircle,
  },
  {
    id: 4,
    patient: 'Maria Garcia',
    message: 'New lab results available',
    time: '2 hours ago',
    type: 'info',
    icon: PlusCircle,
  },
  {
    id: 5,
    patient: 'Michael Brown',
    message: 'Medication schedule updated',
    time: '3 hours ago',
    type: 'info',
    icon: Clock,
  },
];

export default function AlertsCard() {
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
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <AlertCircle size={18} className="mr-2 text-medical-alert" />
          Alerts & Notifications
        </CardTitle>
        <CardDescription>
          Recent updates requiring your attention
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {alerts.map((alert) => {
              const styles = getAlertStyles(alert.type);
              const Icon = alert.icon;
              
              return (
                <div 
                  key={alert.id} 
                  className={`p-3 rounded-md bg-white shadow-sm ${styles.card}`}
                >
                  <div className="flex items-start">
                    <div className={`mr-3 ${styles.icon}`}>
                      <Icon size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">{alert.patient}</span>
                        <Badge variant="outline" className={`${styles.badge} text-white text-xs`}>
                          {alert.type}
                        </Badge>
                      </div>
                      <p className="text-sm">{alert.message}</p>
                      <div className="text-xs text-muted-foreground mt-1 flex items-center">
                        <Clock size={12} className="mr-1" />
                        {alert.time}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
