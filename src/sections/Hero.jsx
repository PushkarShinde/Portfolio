import HeroText from '../components/HeroText'
import ParallaxBackground from '../components/ParallaxBackground';
import { Canvas } from '@react-three/fiber';
import Astronaut from '../components/Astronaut';

function Hero() {
  return (
    <section
      className="flex items-start justify-center md:item-start md:justify-start min-h-screen  c-space"
    >
      <HeroText />
      <ParallaxBackground />
      <figure 
        className="absolute inset-0"
        style={{ width: '100vw', height: '100%'}}
      >
        <Canvas>
          <Astronaut />
        </Canvas>
      </figure>
    </section>
  )
}

export default Hero;