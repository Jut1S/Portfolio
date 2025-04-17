import styles from './Project.module.css';
import Container from "@/components/Container/Container";
import { projectsData } from "@/app/projects/page";

interface ProjectParams {
    params: {
        id: string;
    };
}

interface Project {
    id: number;
    title: string;
    bigImgSrc: string;
    url: string;
}

export default function ProjectPage({ params }: ProjectParams) {
    const { id } = params;
    const project = projectsData.find((project: Project) => project.id === Number(id));

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className={styles.section}>
            <Container>
                <h1 className={styles.title}>{project.title}</h1>
                <img
                    src={project.bigImgSrc}
                    alt={project.title}
                    className={styles.project_img}
                />
                <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.button}>
                    GitHub repository
                </a>
            </Container>
        </div>
    );
}