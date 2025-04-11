import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Pill, Clock, Check, X, AlertTriangle, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';

interface MedicationDose {
  id: number;
  name: string;
  time: string;
  taken: boolean;
  skipped: boolean;
}

// Sample medication data
const todaysMedications: MedicationDose[] = [
  {
    id: 1,
    name: "Lisinopril 10mg",
    time: "08:00",
    taken: true,
    skipped: false,
  },
  {
    id: 2,
    name: "Metformin 500mg",
    time: "08:00",
    taken: true,
    skipped: false,
  },
  {
    id: 3,
    name: "Atorvastatin 20mg",
    time: "20:00",
    taken: false,
    skipped: false,
  },
  {
    id: 4,
    name: "Aspirin 81mg",
    time: "12:00",
    taken: false,
    skipped: true,
  },
];

// Sample medication options
const medicationOptions = [
  { name: "Lisinopril 10mg", frequency: "Daily, morning" },
  { name: "Metformin 500mg", frequency: "Twice daily" },
  { name: "Atorvastatin 20mg", frequency: "Daily, evening" },
  { name: "Aspirin 81mg", frequency: "Daily, with food" },
  { name: "Amlodipine 5mg", frequency: "Daily, morning" },
  { name: "Sertraline 50mg", frequency: "Daily, morning" },
];

export default function MedicationTracker() {
  const [medications, setMedications] = useState<MedicationDose[]>(todaysMedications);
  const [showAddMedication, setShowAddMedication] = useState(false);
  const [selectedMedication, setSelectedMedication] = useState("");
  const [selectedTime, setSelectedTime] = useState("08:00");
  const { toast } = useToast();

  const handleMedicationTaken = (id: number) => {
    setMedications(
      medications.map((med) =>
        med.id === id ? { ...med, taken: true, skipped: false } : med
      )
    );
    
    const medication = medications.find((med) => med.id === id);
    
    toast({
      title: "Medication taken",
      description: `${medication?.name} marked as taken`,
    });
  };

  const handleMedicationSkipped = (id: number) => {
    setMedications(
      medications.map((med) =>
        med.id === id ? { ...med, taken: false, skipped: true } : med
      )
    );
    
    const medication = medications.find((med) => med.id === id);
    
    toast({
      title: "Medication skipped",
      description: `${medication?.name} marked as skipped`,
      variant: "destructive",
    });
  };

  const handleAddMedication = () => {
    if (!selectedMedication) {
      toast({
        title: "Please select a medication",
        description: "You need to select a medication to add",
        variant: "destructive",
      });
      return;
    }
    
    const newMedication: MedicationDose = {
      id: Date.now(),
      name: selectedMedication,
      time: selectedTime,
      taken: false,
      skipped: false,
    };
    
    setMedications([...medications, newMedication]);
    setShowAddMedication(false);
    setSelectedMedication("");
    
    toast({
      title: "Medication added",
      description: `${selectedMedication} has been added to your schedule`,
    });
  };
  
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="flex items-center">
                <Pill size={18} className="mr-2 text-medical-blue" />
                Medication Tracker
              </CardTitle>
              <CardDescription>
                Track your daily medications
              </CardDescription>
            </div>
            <Button 
              size="sm" 
              onClick={() => setShowAddMedication(!showAddMedication)}
              className="bg-medical-blue hover:bg-blue-600"
            >
              <Plus size={16} className="mr-1" />
              Add
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {showAddMedication && (
            <Card className="mb-4">
              <CardContent className="p-4">
                <h3 className="font-medium mb-3">Add New Medication</h3>
                <div className="space-y-4">
                  <div>
                    <Label>Select Medication</Label>
                    <RadioGroup 
                      value={selectedMedication} 
                      onValueChange={setSelectedMedication}
                      className="mt-2"
                    >
                      <ScrollArea className="h-[150px] border rounded-md p-2">
                        <div className="space-y-2">
                          {medicationOptions.map((med) => (
                            <div key={med.name} className="flex items-center space-x-2">
                              <RadioGroupItem value={med.name} id={med.name} />
                              <Label htmlFor={med.name} className="font-normal cursor-pointer flex-1">
                                <span className="font-medium">{med.name}</span>
                                <br />
                                <span className="text-xs text-muted-foreground">{med.frequency}</span>
                              </Label>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </RadioGroup>
                  </div>
                  
                  <div>
                    <Label htmlFor="med-time">Time</Label>
                    <div className="flex mt-2 items-center">
                      <Clock size={16} className="mr-2 text-muted-foreground" />
                      <select 
                        id="med-time"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="border rounded-md px-3 py-2"
                      >
                        <option value="08:00">8:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="20:00">8:00 PM</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setShowAddMedication(false)}
                    >
                      Cancel
                    </Button>
                    <Button 
                      className="flex-1 bg-medical-blue hover:bg-blue-600"
                      onClick={handleAddMedication}
                    >
                      Add Medication
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          <div className="space-y-2">
            <div className="text-sm font-medium mb-2">Today's Medications</div>
            
            {medications.length > 0 ? (
              <div className="space-y-3">
                {medications.map((medication) => (
                  <div 
                    key={medication.id} 
                    className={`p-3 border rounded-md ${
                      medication.taken 
                        ? 'border-l-4 border-l-green-500' 
                        : medication.skipped 
                        ? 'border-l-4 border-l-amber-500' 
                        : ''
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">{medication.name}</span>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock size={12} className="mr-1" />
                          {medication.time.slice(0, 2)}:{medication.time.slice(2)} 
                          {parseInt(medication.time) < 12 ? ' AM' : ' PM'}
                        </div>
                      </div>
                      
                      {medication.taken ? (
                        <Badge className="bg-green-500 hover:bg-green-600">
                          <Check size={12} className="mr-1" />
                          Taken
                        </Badge>
                      ) : medication.skipped ? (
                        <Badge className="bg-amber-500 hover:bg-amber-600">
                          <X size={12} className="mr-1" />
                          Skipped
                        </Badge>
                      ) : (
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="h-8 border-red-200 text-red-500 hover:text-red-600 hover:bg-red-50"
                            onClick={() => handleMedicationSkipped(medication.id)}
                          >
                            <X size={14} className="mr-1" />
                            Skip
                          </Button>
                          <Button 
                            size="sm" 
                            className="h-8 bg-green-500 hover:bg-green-600"
                            onClick={() => handleMedicationTaken(medication.id)}
                          >
                            <Check size={14} className="mr-1" />
                            Take
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                <div className="mt-4 pt-3 border-t">
                  <div className="flex items-center text-sm text-amber-500">
                    <AlertTriangle size={16} className="mr-2" />
                    Remember to consult your doctor before changing any medication
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-8 text-center text-muted-foreground">
                No medications scheduled for today
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
