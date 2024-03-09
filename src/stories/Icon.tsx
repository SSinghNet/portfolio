export default function Icon({link, iconname, size, tooltip} : {link: string, iconname: string, size: number, tooltip:string}) {
    return (
        <a href={link} target="_blank" className="group relative inline-block underline duration-300">
            <span className={"hover:bg-slate-400 m-2 mdi--" + iconname} style={{width: size + "em", height: size + "em"}}>
            </span>
            <span
                className="absolute hidden group-hover:flex -left-0.5 -top-2 -translate-y-full w-auto px-2 py-1 bg-gray-700 rounded-lg text-center text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                {tooltip}
            </span>
        </a>
        
    );
}