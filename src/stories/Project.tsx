import Icon from "./Icon";

export default function Project({ title, desc, tech, img, githublink, link }: { title: string, desc: string, tech: string, img: string, githublink: string, link:string }) {
    return (
        <div className={"project-item flex flex-col justify-center items-center"}>
            {(img != "" || img == null) &&
                <img src={img} className={"max-w-full max-h-80 shadow-lg mx-auto m-3 border-2"} />
            }            
            <p className="font-bold text-2xl underline m-1">
                {title}
            </p>
            <p className="m-1 text-sm italic"> {tech} </p>
            <span>
                {(githublink != "" || githublink == null) &&
                    <Icon
                        link={githublink}
                        iconname="github"
                        size={2}
                        tooltip="Github"
                    />
                }
                {(link != "" || link == null) &&
                    <Icon
                        link={link}
                        iconname="motion-play-outline"
                        size={2}
                        tooltip="Demo"
                    />
                }
            </span>
            <p className="m-1"> {desc} </p>
        </div>
        
    );
}