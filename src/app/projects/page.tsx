import styles from './Projects.module.css';
import Container from "@/components/Container/Container";
import Project from "@/components/Project/Project";

// Пример данных о проектах
const projectsData = [
    { id: 1, title: "Project 1", imgSrc: "/images/projects/01.jpg" },
    { id: 2, title: "Project 2", imgSrc: "/images/projects/01.jpg" },
    { id: 3, title: "Project 3", imgSrc: "/images/projects/01.jpg" },
    { id: 4, title: "Project 4", imgSrc: "/images/projects/01.jpg" },
    { id: 5, title: "Project 5", imgSrc: "/images/projects/01.jpg" },
    { id: 6, title: "Project 6", imgSrc: "/images/projects/01.jpg" },
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