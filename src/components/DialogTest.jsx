import { useRef, useState } from "react";
import PROJECTS from '../data/projects';

export default function DialogTest() {

    const dialogRef = useRef();


    function handleDialogToggle() {
        if (dialogRef.current) {
            if (dialogRef.current.open) {
                dialogRef.current.close();
            } else {
                dialogRef.current.showModal(); // This adds a backdrop
            }
        }
    }

    return (
        <section
            className='bg-gradient-to-b from-blueberry-700 to-blueberry-900 h-screen
        place-items-center justify-center gap-4 flex flex-col p-8 lg:justify-start'
        >
            <h1 className="font-semibold text-yellow-500 text-5xl mt-16 lg:mt-0 md:text-6xl"
                onClick={handleDialogToggle}>
                Dialog Test
            </h1>
            <h2 className='font-semibold text-cyan-500 text-xl md:text-3xl'>
                Test Dialog
            </h2>
            {/* <dialog ref={dialogRef} className="bg-white rounded-lg shadow-lg p-4">
                <p className="text-gray-800">This is a test dialog.</p>
                <button onClick={handleDialogToggle}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                    Close
                </button>
            </dialog> */}

            <dialog ref={dialogRef}
                className="flex flex-col backdrop:bg-black/50 justify-center p-2 rounded-lg bg-blueberry-900 text-gray-50 text-4xl text-left
                    max-w-biggester absolute">
                <h1 className='uppercase font-semibold text-7xl' onClick={handleDialogToggle}>
                    <span className='text-cyan-500'>&gt;</span>
                    {PROJECTS[0].title}
                </h1>
                <img className='aspect-video w-biggester rounded-md' src={PROJECTS[0].sampleImage} alt={PROJECTS[0].title} />
                <div className='flex'>
                    <div className='w-full'>
                        <h2 className='text-3xl font-semibold text-yellow-500'>About</h2>
                        <p className='text-lg'>{PROJECTS[0].description}</p>
                    </div>
                    <div className='w-full'>
                        <h2 className='text-3xl font-semibold text-yellow-500'>Skills</h2>
                        {/* Display skills here if needed */}
                    </div>
                </div>
                <div className='flex py-2'>
                    <div className='w-3/4 flex flex-wrap gap-2'>
                        {PROJECTS[0].skills.map((skill, index) => (
                            <span key={index} className='text-lg rounded-full py-1 px-2 bg-blueberry-800'>
                                {skill}
                            </span>
                        ))}
                    </div>
                    <div className='hover:bg-blueberry-700 w-1/4'>
                        <a href={PROJECTS[0].github} className='text-lg font-semibold uppercase text-left pt-4'>Github</a>
                    </div>
                </div>
            </dialog>
        </section>
    );
}