import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const popupVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
        },
    },
};

const ProjectView = forwardRef(function ProjectView({ project, handleCloseView }, ref) {

    const handleOuterClick = (event) => {
        if (event.target === event.currentTarget) {
            handleCloseView();
        }
    };

    return (
        <div className='fixed inset-0 flex justify-center place-items-center bg-black bg-opacity-50 z-50 w-screen'
            onClick={handleOuterClick}>
            <motion.div
                variants={popupVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                ref={ref}
                className="flex flex-col justify-center p-2 rounded-lg shadow-md bg-blueberry-900 text-gray-50 text-4xl text-left
                    w-96 md:w-biggester"
            >
                <span>
                    <h1 className='uppercase font-semibold text-4xl md:text-7xl'>
                        <span className='text-cyan-500'>&gt;</span>
                        {project.title}
                    </h1>
                </span>

                <img className='aspect-video w-biggester rounded-md' src={project.sampleImage} alt={project.title} />
                <div className='flex flex-col md:flex-row'>
                    <div className='w-full'>
                        <h2 className='font-semibold text-yellow-500 text-xl md:text-3xl'>About</h2>
                        <p className='text-lg'>{project.description}</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row py-2'>
                    <div className='w-3/4 flex flex-wrap gap-2 items-center'>
                        {project.skills.map((skill, index) => (
                            <span key={index} className='text-lg rounded-full py-1 px-2 bg-blueberry-800'>
                                {skill}
                            </span>
                        ))}
                    </div>
                    <div className='w-1/4 text-center flex justify-end'>

                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                            className='text-lg font-semibold uppercase text-center pt-4 cursor-pointer hover:bg-gray-900'>Github</a>

                    </div>
                </div>
            </motion.div>

        </div>
    );
});

export default ProjectView;