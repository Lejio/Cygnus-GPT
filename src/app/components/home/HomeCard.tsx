'use client'
import React from 'react';

const HomeCard = () => {

  return (
    <div className='relative h-[30vh] w-[15vw] hover:rotate-y-180 transition-transform duration-500 ease-in-out'>
        <div className='absolute h-full w-full p-2 bg-blue-400'>
            <h2>Front</h2>
        </div>
        <div className='absolute h-full w-full p-2 bg-red-400'>
            <h2>Back</h2>
        </div>
    </div>
  );
};

export default HomeCard;
