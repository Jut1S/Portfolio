import Link from 'next/link';
import styles from './Project.module.css';
import { FC } from 'react';

interface ProjectProps {
    id: number;
    title: string;
    imgSrc: string;
}

const Project: FC<ProjectProps> = ({ id, title, imgSrc }) => {
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