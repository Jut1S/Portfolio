import styles from './Projects.module.css'
import Container from "@/components/Container/Container";
import Project from "@/components/Project/Project";

export default function projects() {
    return (
        <div className={styles.section}>
            <Container>
                <h2 className={styles.title}>Projects</h2>
                <div className={styles.project}>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                </div>
            </Container>
        </div>
    )
}