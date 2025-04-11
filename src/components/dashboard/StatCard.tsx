
import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: string;
}

export default function StatCard({ 
  title, 
  value, 
  description, 
  icon, 
  trend,
  color = 'bg-medical-blue' 
}: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className={`${color} p-2 rounded-full text-white`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <p className="flex items-center text-sm">
            {trend.isPositive ? (
              <ArrowUp className="mr-1 h-4 w-4 text-medical-green" />
            ) : (
              <ArrowDown className="mr-1 h-4 w-4 text-medical-alert" />
            )}
            <span className={trend.isPositive ? 'text-medical-green' : 'text-medical-alert'}>
              {trend.value}%
            </span>
            <span className="text-muted-foreground ml-1">{description}</span>
          </p>
        )}
        {!trend && description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}
