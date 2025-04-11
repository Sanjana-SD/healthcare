
import React from 'react';
import LoginForm from '@/components/auth/LoginForm';

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <LoginForm />
      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>Smart Care Assistant for Small Clinics and Junior Doctors</p>
        <p className="mt-1">© 2025 Care Compass. All rights reserved.</p>
      </div>
    </div>
  );
}
