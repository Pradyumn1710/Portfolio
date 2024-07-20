import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
// import LogoClear from '../Resources/Logo_clear.png'; // Adjust the import path

const Header = () => {
  return (
    <div className="bg-gray-200 py-1.8 px-6 flex justify-between">
      <div className="flex items-center space-x-4">
        <img src='' alt="Logo" className="h-14" /> {/* Use LogoClear variable */}
        <div className="text-xl font-bold text-slate-600 ">Website Na</div>
      </div>
      <AppBar />
    </div>
  );
};

function AppBar() {
  return (
    <div className="flex space-x-4 m-1 p-1">
      <button
        className="hover:underline hover:underline-offset-4 hover:text-slate-400 pr-2"
        
      >
        About
      </button>
      <button
        className="hover:underline hover:underline-offset-4 hover:text-slate-400 pr-2"
        
      >
        Work
      </button>
      <button
        className="hover:underline hover:underline-offset-4 hover:text-slate-400 pr-2"
        
      >
        Contact us 
      </button>
    
    </div>
  );
}

export default Header;
