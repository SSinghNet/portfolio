import Header from "./stories/Header";
import Project from "./stories/Project";
import data from "./projects.json";

export default function App() {

    const projects = data.map(({ title, desc, tech, img, githublink, link }: { title: string, desc: string, tech: string, img: string, githublink: string, link:string }) => {
        return (
            <Project
                title={title}
                desc={desc}
                tech={tech}
                img={img}
                githublink={githublink}
                link={link}
            />
        );
    });

    return (
        <>
            <Header
                title="Sumeet Singh"
                subtitle="Fullstack Developer"
                github="https://github.com/SSinghNet"
                linkedin="https://www.linkedin.com/in/sumeet-singh-net"
                email="sumeet605@gmail.com"
            />
            <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {projects}
            </div>
        </>
    )
}
