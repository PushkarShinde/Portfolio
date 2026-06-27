import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Globe } from '../components/Globe';
import { Frameworks } from '../components/Frameworks';
import SocialConstellation from '../components/SocialConstellation';
import ResumeModal from '../components/ResumeModal';

function About() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section id="about" className='section-spacing c-space'>
      <h2 className='text-heading'>About Me</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[minmax(10rem,auto)] mt-12'>
        {/* Grid 1 */}
        <div className='flex items-end grid-cinematic-bg grid-1'>
          <img
            src="/assets/coding-pov.png"
            alt="Profile"
            className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] opacity-50'
          />
          <div className="z-10">
            <p className="headtext">Hi, I am Pushkar Shinde</p>
            <p className="subtext">
              <span className="text-gray-400 font-medium">
                An MCA student at <span className="text-white font-medium">NIT Allahabad</span>.
                <br /> I build <span className="text-white font-medium">backend systems </span>
                that tell the truth, in development, in staging, and at three in the morning in production.
              </span>
            </p>
          </div>
          <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-[#06060e]' />
        </div>

        {/* Grid 2 — Profile portrait with social presence constellation */}
        <div className='grid-constellation-bg grid-2'>
          <SocialConstellation />
        </div>

        {/* Grid 3 */}
        <div className='grid-constellation-bg grid-3'>
          <div className='z-10 w-[50%]'>
            <p className='headtext'>Time Zone</p>
            <p className='subtext'>
              <span className="text-gray-400 font-medium">
                I am based in <span className="text-white font-medium">India</span> (IST), open to opportunities <span className="text-white font-medium">worldwide</span>.
              </span>
              </p>
          </div>
          <figure className='absolute left-[30%] top-[10%]'>
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className='grid-cta-bg grid-4'>
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Hire Me?
            </p>
            <button
              onClick={() => setIsResumeOpen(true)}
              className="relative z-10 px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden flex items-center justify-center gap-2 hover:-translate-y-1 transition-transform duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              View Resume
            </button>
          </div>
        </div>

        {/* Grid 5 */}
        <div className='grid-starfield-bg grid-5'>
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              <span className="text-gray-400 font-medium">I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications</span>.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>

      {/* Resume Modal — same AnimatePresence pattern as Projects */}
      <AnimatePresence>
        {isResumeOpen && (
          <ResumeModal closeModal={() => setIsResumeOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default About