
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Calendar } from '@/components/ui/calendar';
import { Activity, Save, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Symptom {
  id: number;
  name: string;
  value: number;
  date: Date;
}

const symptomOptions = [
  'Pain', 'Fatigue', 'Nausea', 'Headache', 'Dizziness', 
  'Shortness of Breath', 'Anxiety', 'Insomnia'
];

export default function SymptomTracker() {
  const [selectedSymptom, setSelectedSymptom] = useState('Pain');
  const [intensity, setIntensity] = useState(0);
  const [date, setDate] = useState<Date>(new Date());
  const [loggedSymptoms, setLoggedSymptoms] = useState<Symptom[]>([]);
  const [showSymptomSelector, setShowSymptomSelector] = useState(false);
  const { toast } = useToast();

  const handleAddSymptom = () => {
    if (intensity === 0) {
      toast({
        title: "Please set an intensity",
        description: "Move the slider to indicate symptom intensity",
        variant: "destructive",
      });
      return;
    }
    
    const newSymptom: Symptom = {
      id: Date.now(),
      name: selectedSymptom,
      value: intensity,
      date: date,
    };
    
    setLoggedSymptoms([...loggedSymptoms, newSymptom]);
    setIntensity(0);
    
    toast({
      title: "Symptom logged",
      description: `${selectedSymptom} has been recorded successfully`,
    });
  };
  
  const getIntensityLabel = (value: number) => {
    if (value === 0) return "None";
    if (value <= 3) return "Mild";
    if (value <= 6) return "Moderate";
    if (value <= 9) return "Severe";
    return "Extreme";
  };
  
  const getIntensityColor = (value: number) => {
    if (value === 0) return "bg-gray-200";
    if (value <= 3) return "bg-green-500";
    if (value <= 6) return "bg-yellow-500";
    if (value <= 9) return "bg-orange-500";
    return "bg-red-500";
  };
  
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Activity size={18} className="mr-2 text-medical-blue" />
            Symptom Tracker
          </CardTitle>
          <CardDescription>
            Log and track your symptoms over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Selected Symptom</Label>
                <div className="flex items-center mt-1">
                  <span className="text-lg font-medium">{selectedSymptom}</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="ml-2 h-8 w-8 p-0"
                    onClick={() => setShowSymptomSelector(!showSymptomSelector)}
                  >
                    <Plus size={16} />
                  </Button>
                </div>
              </div>
              <div>
                <Label>Date</Label>
                <div className="text-sm font-medium mt-1">
                  {date.toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
              </div>
            </div>
            
            {showSymptomSelector && (
              <Card>
                <CardContent className="p-2">
                  <ScrollArea className="h-[150px]">
                    <div className="grid grid-cols-2 gap-2">
                      {symptomOptions.map((symptom) => (
                        <Button
                          key={symptom}
                          variant={selectedSymptom === symptom ? "default" : "outline"}
                          className={selectedSymptom === symptom ? "bg-medical-blue" : ""}
                          size="sm"
                          onClick={() => {
                            setSelectedSymptom(symptom);
                            setShowSymptomSelector(false);
                          }}
                        >
                          {symptom}
                        </Button>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            )}
            
            <div>
              <div className="flex justify-between mb-2">
                <Label>Intensity: {intensity}/10</Label>
                <span className={`px-2 py-0.5 rounded text-xs text-white ${getIntensityColor(intensity)}`}>
                  {getIntensityLabel(intensity)}
                </span>
              </div>
              <Slider
                value={[intensity]}
                min={0}
                max={10}
                step={1}
                onValueChange={(value) => setIntensity(value[0])}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Select Date</Label>
                <div className="mt-2 border rounded-md">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(date) => date && setDate(date)}
                    className="rounded-md"
                    disabled={(date) => date > new Date()}
                  />
                </div>
              </div>
              
              <div>
                <Label>Recent Symptoms</Label>
                <ScrollArea className="h-[220px] mt-2 border rounded-md p-2">
                  {loggedSymptoms.length > 0 ? (
                    <div className="space-y-2">
                      {loggedSymptoms.map((symptom) => (
                        <div 
                          key={symptom.id} 
                          className="p-2 border-l-4 rounded-md shadow-sm flex justify-between items-center"
                          style={{
                            borderLeftColor: `var(--${getIntensityColor(symptom.value).replace('bg-', '')})`,
                          }}
                        >
                          <div>
                            <div className="font-medium">{symptom.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {symptom.date.toLocaleDateString()}
                            </div>
                          </div>
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center text-white ${getIntensityColor(symptom.value)}`}>
                            {symptom.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center text-sm text-muted-foreground">
                      No symptoms logged yet
                    </div>
                  )}
                </ScrollArea>
              </div>
            </div>
            
            <Button 
              onClick={handleAddSymptom} 
              className="w-full bg-medical-blue hover:bg-blue-600"
            >
              <Save size={16} className="mr-2" />
              Log Symptom
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
