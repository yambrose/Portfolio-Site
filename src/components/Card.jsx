export default function Card({ index, project, onClick }) {

    return (
        <li key={index} className='flex flex-col bg-blueberry-900 text-gray-50 text-4xl text-left
            p-2 rounded-lg shadow-lg  max-w-biggest'
        >
            <img className="aspect-video w-biggest rounded-md" src={project.sampleImage} />
            <h2 className="text-3xl font-semibold text-cyan-500">{project.title}</h2>
            <p className="text-lg overflow-ellipsis overflow-hidden line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem expedita quas perspiciatis voluptate at sunt modi culpa earum? Natus quibusdam est explicabo ad molestiae earum assumenda veritatis. Quisquam, magni maiores?
            </p>
            <button className="text-lg font-semibold uppercase text-left pt-4" onClick={() => onClick(project)}>Learn More</button>
        </li>
    );
}
