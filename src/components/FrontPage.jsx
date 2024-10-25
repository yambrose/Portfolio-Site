import ProfilePicture from '../assets/ProfilePicture.jpeg';
import RevealOnScroll from './RevealOnScroll';

import CSS from '../assets/codebase/css.svg';
import django from '../assets/codebase/django.svg';
import html from '../assets/codebase/html.svg';
import javascript from '../assets/codebase/javascript.svg';
import node from '../assets/codebase/node.svg';
import python from '../assets/codebase/python.svg';
import react from '../assets/codebase/react.svg';
import tailwind from '../assets/codebase/tailwind.svg';
import typescript from '../assets/codebase/typescript.svg';
import mysql from '../assets/codebase/mysql.svg';

export default function FrontPage() {
    return (
        <>
            <section id='home'
                className='bg-gradient-to-b from-blueberry-700 to-blueberry-900 h-full md:h-screen place-items-center justify-center gap-4 flex flex-col
                md:flex-row p-4'
            >
                <img src={ProfilePicture} className='object-cover max-h-80 lg:min-h-massive aspect-square m-12 rounded-lg' />

                <RevealOnScroll>
                    <div className='h-fit flex flex-col'>
                        <div className='h-3/5'>
                            <h2 className='text-gray-50 text-center text-4xl h-massive text-shadow-md md:text-left xl:text-6xl'>
                                I'm Ambrose Yip, a
                                <div className='text-yellow-500 text-5xl md:text-6xl xl:text-7xl font-semibold'>Software Developer</div>
                                with a passion for creating impactful digital experiences, from engaging and responsive websites to data-driven applications.
                            </h2>
                        </div>
                        <div className='text-gray-50 text-4xl flex flex-wrap gap-4 place-items-center justify-center
                        bg-blueberry-600 p-2 rounded-md shadow-lg m-4
                        md:bg-transparent md:shadow-none md:justify-start'
                        >
                            <div className='group'><img className='group-hover:animate-bounce w-16 md:w-19' src={html} /></div>
                            <div className='group'><img className='group-hover:animate-bounce w-16 md:w-19' src={CSS} /></div>
                            <div className='group'><img className='group-hover:animate-bounce w-16 md:w-19' src={javascript} /></div>
                            <div className='group'><img className='group-hover:animate-bounce w-16 md:w-19' src={react} /></div>
                            <div className='group'><img className='group-hover:animate-bounce w-16 md:w-19' src={tailwind} /></div>
                            <div className='group'><img className='group-hover:animate-bounce w-16 md:w-19' src={python} /></div>
                            <div className='group'><img className='group-hover:animate-bounce w-16 md:w-19' src={django} /></div>
                            <div className='group'><img className='group-hover:animate-bounce w-16 md:w-19' src={node} /></div>
                            <div className='group'><img className='group-hover:animate-bounce w-16 md:w-19' src={typescript} /></div>
                            <div className='group'><img className='group-hover:animate-bounce w-16 md:w-19' src={mysql} /></div>
                        </div>
                    </div>
                </RevealOnScroll>
            </section>
        </>
    );
}