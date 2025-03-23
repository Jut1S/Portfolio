import styles from './Project.module.css';

const Project = () => {
    // @ts-ignore
    return (
        <div className={styles.project}>
            <img src='/images/projects/01.jpg' alt="Сервис" className={styles.project_img}/>
            <h2 className={styles.project_title}>Project title</h2>
        </div>
    )
}

export default Project;