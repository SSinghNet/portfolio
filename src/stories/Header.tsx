import Icon from "./Icon";

export default function Header({ title, subtitle, github, linkedin, email } : {title:string, subtitle:string, github:string, linkedin:string, email:string}) {
    return (
        <div className={"header"}>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <Icon
                link={github}
                iconname="github"
                size={2.5}
                tooltip="Github"
            />
            <Icon
                link={linkedin}
                iconname="linkedin"
                size={2.5}
                tooltip="Linkedin"
            />
            <Icon
                link={"mailto:" + email}
                iconname="email"
                size={2.5}
                tooltip="E-Mail"
            />
        </div>
    );
}