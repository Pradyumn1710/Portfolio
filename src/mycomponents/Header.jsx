// Things remaining here:
// Responsive ness

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
// import LogoClear from '../Resources/Logo_clear.png'; // Adjust the import path

const Header = () => {
  return (
    <div className="bg-black p-3 flex justify-between ">
      <div className="flex items-center space-x-4">
        <div className='flex justify-around'>
           <img className='h-14 p-1 ml-14 mt-2' src="resources/my_signature_white.png" alt="" />
          {/* <div className="text-l font-bold text-slate-600 pt-1 pl-1 ">Crafting Code & Creativity</div> */}
        </div>
      </div>
      <AppBar />
    </div>
  );
};

function AppBar() {
  return (
    <div className="flex space-x-4 m-2 p-4 mx-6">
      <button
        className="hover:underline hover:underline-offset-4 hover:text-pink-400 pr-2 text-gray-400 text-xl mx-2"
      >
        About
      </button>
      <button
        className="hover:underline hover:underline-offset-4 hover:text-pink-400 pr-2 text-gray-400 text-xl mx-2"
      >
        Experience
      </button>
      <button
        className="hover:underline hover:underline-offset-4 hover:text-pink-400 pr-2 text-gray-400 text-xl mx-2"
      >
        Projects
      </button>
    </div>
  );
}

export default Header;
