import { useState, useEffect } from 'react';
import MonogramIcon from '../assets/MonogramIcon.svg';

export default function TopBar() {
    const [isShrunk, setIsShrunk] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsShrunk(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`sticky top-0 z-10 flex items-center justify-between p-7 w-screen bg-blueberry-800 ${!isShrunk ? 'h-24' : 'h-14 shadow-md'} transition-all duration-300`}>
            <div className='flex items-center'>
                <img src={MonogramIcon} className={`${!isShrunk ? 'w-20' : 'w-10'} transition-all duration-300`} />
                <h2 className={`pl-2 font-mono ${!isShrunk ? 'text-4xl' : 'text-2xl'} text-cyan-500 transition-all duration-300`}>ambrosey<span className='text-yellow-500'>.dev</span></h2>
            </div>
            <div className='hidden md:flex gap-8'>
                <button onClick={() => scrollToSection('home')} className={`text-gray-50 ${!isShrunk ? 'text-xl' : 'text-lg'} transition-all duration-300`}>Home</button>
                <button onClick={() => scrollToSection('about')} className={`text-gray-50 ${!isShrunk ? 'text-xl' : 'text-lg'} transition-all duration-300`}>About Me</button>
                <button onClick={() => scrollToSection('projects')} className={`text-gray-50 ${!isShrunk ? 'text-xl' : 'text-lg'} transition-all duration-300`}>Projects</button>
                <button onClick={() => scrollToSection('contact')} className={`text-gray-50 ${!isShrunk ? 'text-xl' : 'text-lg'} transition-all duration-300`}>Contact</button>
                <button onClick={() => window.open('/Ambrose_Yip_CV_2024.pdf', '_blank')} className={`text-gray-50 ${!isShrunk ? 'text-xl p-2' : 'text-lg p-1'} bg-blueberry-900 border-yellow-500 box-border border-2 rounded-lg text-yellow-500 shadow-md hover:bg-yellow-500 hover:text-blueberry-900 transition-all duration-300`}>
                    Resume
                </button>
            </div>
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-gray-50 text-4xl focus:outline-none">
                    {isMenuOpen ? '×' : '='}
                </button>
            </div>
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-blueberry-800 md:hidden">
                    <div className="flex flex-col items-center p-4 gap-10">
                        <button onClick={() => scrollToSection('home')} className={`text-gray-50 ${!isShrunk ? 'text-xl' : 'text-lg'} transition-all duration-300`}>Home</button>
                        <button onClick={() => scrollToSection('about')} className={`text-gray-50 ${!isShrunk ? 'text-xl' : 'text-lg'} transition-all duration-300`}>About Me</button>
                        <button onClick={() => scrollToSection('projects')} className={`text-gray-50 ${!isShrunk ? 'text-xl' : 'text-lg'} transition-all duration-300`}>Projects</button>
                        <button onClick={() => scrollToSection('contact')} className={`text-gray-50 ${!isShrunk ? 'text-xl' : 'text-lg'} transition-all duration-300`}>Contact</button>
                        <button onClick={() => window.open('/Ambrose_Yip_CV_2024.pdf', '_blank')} className={`text-gray-50 ${!isShrunk ? 'text-xl p-2' : 'text-lg p-1'} bg-blueberry-900 border-yellow-500 box-border border-2 rounded-lg text-yellow-500 shadow-md hover:bg-yellow-500 hover:text-blueberry-900 transition-all duration-300`}>
                            Resume
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
