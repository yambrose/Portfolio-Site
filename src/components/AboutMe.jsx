import ProfilePicture from '../assets/ProfilePicture.jpeg';
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
                            Hello! I’m Ambrose Yip, a dedicated computer science student at Ontario Tech University with a strong passion for Front-End Development. I specialize in crafting seamless user experiences and responsive website designs. My journey began as a teenager when I created graphics and thumbnails for my YouTube channel, and that experience ignited my enthusiasm for web design.I have a sharp eye for detail and a commitment to delivering high-quality work that not only looks impressive but also functions flawlessly. Proficient in HTML, CSS, JavaScript, and modern frameworks like React and Vue.js, I’m equipped to build everything from simple landing pages to intricate web applications.
                        </p>
                    </RevealOnScroll>

                </div>
                <RevealOnScroll>
                    <div className='flex justify-center'>
                        <img src={ProfilePicture}
                            className='h-52 w-52 md:h-64 md:w-64 lg:min-h-massive lg:min-w-massive aspect-square m-12 rounded-lg' />
                    </div>
                </RevealOnScroll>
            </section>
        </>
    );
}