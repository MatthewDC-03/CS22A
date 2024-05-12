// components/Loading.tsx
"use client"
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

const Loading: React.FC = () => {
    const container = useRef(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  useGSAP(()=>{
  },{scope: container})

  return loading ? <div className='fixed w-full h-full grid place-items-center bg-[#F6F6F6] z-[999]' ref={container}>
    
    <div id='load' className="flex flex-row gap-2 opacity-1">
  <div className="w-4 h-4 rounded-full ease-linear bg-[#008DDA] animate-bounce [animation-delay:.5s]"></div>
  <div className="w-4 h-4 rounded-full ease-linear bg-[#008DDA] animate-bounce [animation-delay:.3s]"></div>
  <div className="w-4 h-4 rounded-full ease-linear bg-[#008DDA] animate-bounce [animation-delay:.5s]"></div>
</div>


    </div> : null;
};

export default Loading;
