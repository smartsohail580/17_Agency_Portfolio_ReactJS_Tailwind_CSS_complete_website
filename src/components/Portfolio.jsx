import { useEffect, useState } from "react";
import { FaDribbble } from "react-icons/fa";
import arrow from "../assets/Vector.png"
function Portfolio() {
    const [projects, setProjects] = useState([]);

    // fetching data from json files
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <div className="lg:px-12 mx-4 my-32" id="portfolio">
            <div className="flex flex-col md:flex-row justify-between gap-8 mb-20 md:items-center">
                <div className="text-headingColor">
                    <p className="text-xl font-semibold mb-5">Recent Projects</p>
                    <h2 className="md:text-5xl text-4xl font-bold">My Portfolio</h2>
                </div>
                <div>
                    <button className="btnPrimary flex bg-dribble py-5"><FaDribbble className="w-6 h-6 inline-block mr-2" />Visit My Dribbble</button>
                </div>
            </div>
            {/* cards  */}
            <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {projects.map(project => (
                    <div key={project.id} className="shadow-xl rounded-lg cursor-pointer">
                        <img src={project.image} alt="" className="hover:scale-90 transition-all duration-300" />
                        <div className="p-8">
                            <h3 className="text-xl font-semibold mb-2 text-headingColor">{project.name}</h3>
                            <p className="text-body mb-4">{project.description}</p>
                            <a href="/" className="flex underline hover:underline-offset-8 hover:text-primary">View in Dribble <img src={arrow} alt="" className="w-3 h-3 mt-1 inline-block ml-3" /></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
