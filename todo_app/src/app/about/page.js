// learn common function for routing

"use client"

// Import dependencies
import React from 'react';
import { useRouter } from 'next/navigation';

// About component is redirect on login page by using next-config file
const About = () => {
  // Destructure the useRouter hook
  const router = useRouter();

  // Function to navigate to a specific page 
  const navigateToPage = (page) => {
    router.push(`/about/${page}`);
  };

  return (
    <>
      <div>This is About page</div>
      {/* Button to go to Home */}
      <button onClick={() => router.push('/')}>Go to Home</button>
      {/* Button to navigate to About student */}
      <button onClick={() => navigateToPage("aboutstudent")}>About student</button>
      {/* Button to navigate to About collage */}
      <button onClick={() => navigateToPage("aboutcollage")}>About collage</button>
    </>
  );
};

export default About;
