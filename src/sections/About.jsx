import { Globe } from '../components/Globe';
import CopyEmailButton from '../components/CopyEmailButton';
import { Frameworks } from '../components/Frameworks';
import SocialConstellation from '../components/SocialConstellation';

function About() {
  return (
    <section className='section-spacing c-space'>
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
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className='grid-starfield-bg grid-5'>
          <div className="z-10 w-[50%]">
            <p className="headText">Tech Stack</p>
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
    </section>
  )
}

export default About