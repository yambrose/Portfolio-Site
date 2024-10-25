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
                            Hey there! I'm a computer science student at Ontario Tech University, and I absolutely love software development. My journey kicked off when I started creating cool visuals for my YouTube channel, which sparked my passion for crafting seamless and user-friendly digital experiences.

                            These days, I've got a solid handle on front-end technologies like HTML, CSS, JavaScript, React, and Vue.js. I've also dived into back-end development, data analysis, and machine learning, so I can work across the full stack and tackle data-driven projects.

                            What really drives me is turning complex ideas into innovative and functional solutions. I'm all about building software that's not just visually appealing but also efficient, scalable, and reliable. I take pride in paying attention to the details and always put the user experience first. I'm committed to delivering high-quality work and adapting to whatever challenges come my way.
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