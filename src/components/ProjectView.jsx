import { useRef, forwardRef } from 'react';
import PROJECTS from '../data/projects';

const ProjectView = forwardRef(function ProjectView({handleCloseModal}, ref) {
    return (
        <dialog ref={ref}
            className="flex flex-col justify-center p-2 rounded-lg bg-blueberry-900 text-gray-50 text-4xl text-left
                    max-w-biggester absolute">
            <h1 className='uppercase font-semibold text-7xl' onClick={handleCloseModal}>
                <span className='text-cyan-500'>&gt;</span>
                {PROJECTS[2].title}
            </h1>
            <img className='aspect-video w-biggester rounded-md' src={PROJECTS[2].sampleImage} />
            <div className='flex'>
                <div className='w-full'>
                    <h2 className='text-3xl font-semibold text-yellow-500'>About</h2>
                    <p className='text-lg'>{PROJECTS[2].description}</p>
                </div>
                <div className='w-full'>
                    <h2 className='text-3xl font-semibold text-yellow-500'>Skills</h2>
                    <p className='text-lg'>{PROJECTS[2].description}</p>
                </div>
            </div>
            <div className='flex py-2'>
                <div className='w-3/4 flex flex-wrap gap-2'>
                    {PROJECTS[2].skills.map((skill) =>
                        <span className='text-lg rounded-full py-1 px-2 bg-blueberry-800'>
                            {skill}
                        </span>
                    )}
                </div>
                <div className='hover:bg-blueberry-700 w-1/4'>
                    <a href={PROJECTS[2].github} className='text-lg font-semibold uppercase text-left pt-4'>Github</a>
                </div>
            </div>
        </dialog>
    );
});

export default ProjectView;