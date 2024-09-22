import RevealOnScroll from "./RevealOnScroll";

export default function Card({ index, project, onClick }) {

    return (
        <RevealOnScroll>
            <li key={index} className='group flex flex-col bg-blueberry-900 text-gray-50 text-4xl text-left
            p-2 rounded-lg shadow-lg max-w-biggest gap-2 mt-4 overflow-hidden
            hover:bg-blueberry-800 select-none cursor-pointer'
            >
                <img className="aspect-video w-biggest rounded-md
                    group-hover:scale-105 group-hover:-translate-y-[10px]
                    transition-all duration-200" src={project.sampleImage} />
                <h2 className="text-3xl font-semibold text-cyan-500">{project.title}</h2>
                <p className="text-lg overflow-ellipsis overflow-hidden line-clamp-2">
                    {project.description}
                </p>
                <button className="text-lg font-semibold uppercase text-left pt-4" onClick={() => onClick(project)}>Learn More</button>
            </li>
        </RevealOnScroll>
    );
}
