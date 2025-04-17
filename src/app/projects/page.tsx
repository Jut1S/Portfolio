import styles from './Projects.module.css';
import Container from "@/components/Container/Container";
import Project from "@/components/Project/Project";


export const projectsData = [
    { id: 1, title: "Auth", imgSrc: "/images/projects/Auth.png", bigImgSrc: "/images/projects/Auth.png" , url: "https://github.com/Jut1S/Auth"},
    { id: 2, title: "Internet Shop", imgSrc: "/images/projects/Shop.png", bigImgSrc: "/images/projects/Shop.png", url: "https://github.com/Jut1S/Internet-shop" },
    { id: 3, title: "Quiz", imgSrc: "/images/projects/Quiz.png", bigImgSrc: "/images/projects/Quiz.png" , url: "https://github.com/Jut1S/Quiz"},
    { id: 4, title: "ToDo-list", imgSrc: "/images/projects/ToDo.png", bigImgSrc: "/images/projects/ToDo.png", url: "https://github.com/Jut1S/ToDo-list"},
    { id: 5, title: "WeatherApp", imgSrc: "/images/projects/Weather.png", bigImgSrc: "/images/projects/Weather.png" , url: "https://github.com/Jut1S/WeatherApp"},
];

export default function Projects() {
    return (
        <div className={styles.section}>
            <Container>
                <h2 className={styles.title}>Projects</h2>
                <div className={styles.project}>
                    {projectsData.map((project) => (
                        <Project
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            imgSrc={project.imgSrc}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
}