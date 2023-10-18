"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';

// Reveal component for the animation
interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  delay?: number; // Add this line
}

export const Reveal = ({ children, width = "fit-content", delay = 0.25 }: Props) => {
  const fadeIn = {
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 }
  };

  return (
      <motion.div 
          variants={fadeIn}
          initial="hidden" 
          animate="visible"
          transition={{ duration: 0.5, delay: delay }} // Use the delay here
      >
          {children}
      </motion.div>
  );
};


// Your main Home component
export default function Home() {
    return (
        <main className="relative min-h-screen bg-white animate-gradientBackground delay-500">
            <img src="/background.png" alt="Full screen background" className="absolute top-0 left-0 h-full w-full object-cover z-0"/>
            <div className="relative z-10 min-h-screen z-10 grid grid-rows-5 grid-flow-col gap-4 px-16">
                <div className='row-start-4'>
                    <Reveal>
                        <h1 className="text-8xl font-bold">👋🏼 Eesha Ulhaq </h1>
                    </Reveal>
                        <div className='pl-28'>
                            <Reveal delay={0.75}>
                            <h3 className="text-2xl">generalist of sorts? product - code - vibes</h3>
                            </Reveal>
                            <Reveal delay={1}>
                              <div>
                                <Link href="https://www.linkedin.com/in/eesha-ulhaq/" target="_blank"><LinkedInIcon/></Link>
                                <Link href="https://github.com/Eeshau" target="_blank"><GitHubIcon/></Link>
                              </div>

                            </Reveal>
                        </div>
                   =
                </div>
            </div>
            <style jsx>{`
                main {
                    background-image: linear-gradient(45deg, #FFB6C1 0%, #87CEEB 50%, #FF6347 75%, #8B008B 100%);
                    background-size: 200% 200%;
                }
            `}</style>
        </main>
    );
}





// "use client"
// import Image from 'next/image'

// export default function Home() {
//   return (
//     <main className="relative min-h-screen animate-gradientBackground delay-500">
//          <img src="/background.png" alt="Full screen background" className="absolute top-0 left-0 h-full w-full object-cover z-0"/>
//          <div className="relative z-10 min-h-screen z-10 grid grid-rows-5 grid-flow-col gap-4 px-16">
//             <div className='row-start-4'>
//               <h1 className="text-8xl font-bold">👋🏼 Eesha Ulhaq </h1>
//               <h3 className="text-2xl">generalist of sorts? product - code - vibes</h3>
//             </div>
//          </div>
//          <style jsx>{`
//             main {
//                 background-image: 
//                   repeating-radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 1%, transparent 1%, transparent 2%),
//                   linear-gradient(to bottom, #ADD8E6 0%, #FFA07A 50%, #8B0000 70%, #00008B 100%);
//                 background-size: 50px 50px, 100% 100%;
//             }
//          `}</style>
//     </main>
//   )
// }



