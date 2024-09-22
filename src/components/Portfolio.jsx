import { useState, useRef } from 'react';
import PROJECTS from '../data/projects';
import Card from './Card';
import ProjectView from './ProjectView';

export default function Portfolio() {

    const [selectedProject, setSelectedProject] = useState(null);

    function expandProject(project) {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    }

    function closeProject() {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    }

    return (
        <section id="projects"
            className='bg-gradient-to-b from-blueberry-700 to-blueberry-900 min-h-screen h-max
                place-items-center justify-center gap-4 flex flex-col p-8
                lg:flex-row lg:justify-start'
        >
            <div className="h-fit flex flex-col justify-start text-center
                lg:justify-center lg:text-left"
            >
                <h1 className="font-semibold text-yellow-500 text-5xl mt-16 lg:mt-0 md:text-6xl">
                    Projects
                </h1>
                <h2 className='font-semibold text-cyan-500 text-xl md:text-3xl'>
                    A collection of my work
                </h2>
                <ul className='flex flex-wrap gap-2'>
                    {PROJECTS.map((project, index) => (
                        <Card index={index} project={project} onClick={expandProject} />
                    ))}
                </ul>
                {selectedProject && 
                    <ProjectView project={selectedProject} handleCloseView={closeProject} />
                }
            </div>
        </section>
    );
}