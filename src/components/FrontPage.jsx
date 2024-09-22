import ProfilePicture from '../assets/ProfilePicture.jpeg';

export default function FrontPage() {
    return (
        <>
            <section id='home'
                className='bg-gradient-to-b from-blueberry-700 to-blueberry-900 h-screen place-items-center justify-center gap-4 flex flex-col
                md:flex-row p-4'
            >
                <img src={ProfilePicture} className='min-h-80 lg:min-h-massive aspect-square m-12 rounded-lg' />

                <div className='h-fit flex flex-col'>
                    <div className='h-3/5'>
                        <h2 className='text-gray-50 text-center text-4xl h-massive text-shadow-md md:text-left xl:text-6xl'>
                            I'm Ambrose Yip, a
                            <div className='text-yellow-500 text-5xl md:text-6xl xl:text-7xl font-semibold'>Front-End Developer </div>
                            with a passion for crafting engaging and responsive websites.
                        </h2>
                    </div>
                    <div className='text-gray-50 text-4xl flex place-items-center justify-center
                        bg-blueberry-600 p-2 rounded-md shadow-lg
                        md:bg-transparent md:shadow-none md:justify-start'
                    >
                        <img className='w-16 md:w-20' src='https://img.icons8.com/color/48/000000/html-5--v1.png' />
                        <img className='w-16 md:w-20' src='https://img.icons8.com/color/48/000000/css3.png' />
                        <img className='w-16 md:w-20' src='https://img.icons8.com/color/48/000000/javascript--v1.png' />
                        <img className='w-16 md:w-20' src='https://img.icons8.com/color/48/000000/react-native.png' />
                    </div>
                </div>
            </section>
        </>
    );
}