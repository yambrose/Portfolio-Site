import ProfilePicture from '../assets/ProfilePicture2.jpeg';
import RevealOnScroll from './RevealOnScroll';

export default function AboutMe() {
    return (
        <>
            <section id='about'
                className='bg-gradient-to-b from-blueberry-700 to-blueberry-900 h-max justify-start gap-4 flex flex-col p-8
        lg:flex-row lg:justify-center lg:items-center md:h-screen'
            >
                <div className="h-fit flex flex-col justify-start text-center
        md:justify-center lg:text-left overflow-hidden"
                >
                    <RevealOnScroll>
                        <h1 className="font-semibold text-yellow-500 text-5xl mt-16 lg:mt-0 md:text-6xl">About Me</h1>
                        <h2 className='font-semibold text-cyan-500 text-xl md:text-3xl'>
                            A dedicated student in Toronto, Ontario
                        </h2>
                    </RevealOnScroll>
                    <RevealOnScroll>
                        <p className='text-gray-50 text-sm overflow-y-auto text-ellipsis whitespace-normal
                     min-h-40 lg:text-lg pt-2 lg:pt-4'>
                            As a passionate computer science student at Ontario Tech University, I bring a blend of creativity and technical expertise to the field of software development. My journey started with creating engaging visuals for my YouTube channel, sparking an enduring interest in crafting seamless, user-friendly digital experiences. Today, I am skilled in front-end technologies like HTML, CSS, JavaScript, React, and Vue.js, and I also have robust experience with back-end, data analysis, and machine learning, which allow me to work across full-stack development and data-driven applications. I excel in transforming complex requirements into innovative, functional solutions and am driven to build software that is not only visually appealing but also efficient, scalable, and reliable. My commitment to quality and adaptability ensures that each project I undertake is delivered with attention to detail and a user-first mindset.
                        </p>
                    </RevealOnScroll>

                </div>
                <RevealOnScroll>
                    <div className='flex justify-center'>
                        <img src={ProfilePicture}
                            className='object-cover h-52 w-52 md:h-64 md:w-64 lg:min-h-massive lg:min-w-massive aspect-square m-12 rounded-lg' />
                    </div>
                </RevealOnScroll>
            </section>
        </>
    );
}