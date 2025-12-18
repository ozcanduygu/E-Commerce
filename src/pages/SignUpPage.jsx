import React from 'react';
import SignUpForm from '../components/SignUpForm';

export default function SignupPage() {
  return (
    // Tailwind ile sayfanın dikeyde tüm alanı kaplamasını ve hafif gri arka planı sağlıyoruz.
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      
    <SignUpForm/>
      
    </div>
  );
}