
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ActivitySquare, Users, Stethoscope, Calendar, BarChart, ArrowRight } from 'lucide-react';

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 px-6 border-b flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-medical-blue flex items-center justify-center text-white">
            <ActivitySquare size={24} />
          </div>
          <span className="text-xl font-bold">Care Compass</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link to="/patient-portal">
            <Button className="bg-medical-blue hover:bg-blue-600">Patient Portal</Button>
          </Link>
        </div>
      </header>
      
      <main className="flex-1">
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-medical-darkText">
                  Intelligent Healthcare <br />
                  <span className="text-medical-blue">for Small Clinics</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-lg">
                  Streamline patient care, simplify rounds, and detect potential adverse drug reactions with our smart assistant.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/dashboard">
                    <Button className="bg-medical-blue hover:bg-blue-600 h-12 px-6">
                      Clinician Dashboard
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                  <Link to="/patient-portal">
                    <Button variant="outline" className="h-12 px-6">
                      Patient Portal
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex-1">
                <div className="rounded-xl shadow-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" 
                    alt="Doctor using tablet" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-medical-blue mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Patient Management</h3>
                <p className="text-gray-600">
                  Comprehensive dashboard for tracking patients, vitals, and medications in one place.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-medical-green mb-4">
                  <Stethoscope size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Streamlined Rounds</h3>
                <p className="text-gray-600">
                  Fast data entry for rounds with templates and voice-to-text capabilities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-4">
                  <Calendar size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Daily Summaries</h3>
                <p className="text-gray-600">
                  Auto-generated end-of-day summaries and patient handoff sheets.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-medical-alert mb-4">
                  <BarChart size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">ADR Detection</h3>
                <p className="text-gray-600">
                  Intelligent alerts for critical symptoms and potential adverse drug reactions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-10 px-6 bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-medical-blue flex items-center justify-center text-white">
              <ActivitySquare size={18} />
            </div>
            <span className="font-semibold">Care Compass</span>
          </div>
          
          <div className="flex gap-8">
            <Link to="/dashboard" className="text-gray-600 hover:text-medical-blue">
              Dashboard
            </Link>
            <Link to="/patient-portal" className="text-gray-600 hover:text-medical-blue">
              Patient Portal
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-medical-blue">
              Login
            </Link>
          </div>
          
          <div className="text-sm text-gray-500">
            © 2025 Care Compass. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
