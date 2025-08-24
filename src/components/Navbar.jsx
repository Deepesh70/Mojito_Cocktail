import { navLinks } from '../../constants/index.js';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Navbar = () => {

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "bottom top",
                toggleActions: "play none none reverse"
            }
        });
        navTween.fromTo('nav',
            { backgroundColor: 'transparent', backdropFilter: 'blur(0px)' },
            {
                backgroundColor: '#00000050',
                backdropFilter: 'blur(10px)',
                duration: 1,
                ease: 'power1.inOut'
            }
        );
    }, []);


  return (
    <nav>
        <div>
            <a href="#home" className='flex items-center gap-2'>
                <img src= "/images/logo.png" alt="Logo" />
                <p>Velvet Pour</p>
            </a>
            <ul>
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar