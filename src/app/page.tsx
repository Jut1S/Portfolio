import styles from './Page.module.css'
import Header from "@/components/Header/Header";
import Container from "@/components/Container/Container";

export default function Home() {
    return (
        <>
            <Header/>
            <main className={styles.section}>
                <Container>
                    <ul className={styles.content_list}>
                        <li className={styles.content_item}>
                            <h2 className={styles.title}>Stack</h2>
                            <p>
                                JavaScript, TypeScript, ReactJS, Redux,
                                HTML, CSS, NPM, Yarn.
                            </p>
                        </li>
                    </ul>
                </Container>
            </main>
        </>

    );
}