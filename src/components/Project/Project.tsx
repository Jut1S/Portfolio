import Link from 'next/link';
import styles from './Project.module.css';

const Project = ({ id, title, imgSrc }) => {
    return (
        <Link href={`/projects/${id}`}>
            <div className={styles.project}>
                <img src={imgSrc} alt={title} className={styles.project_img} />
                <h2 className={styles.project_title}>{title}</h2>
            </div>
        </Link>
    );
};

export default Project;