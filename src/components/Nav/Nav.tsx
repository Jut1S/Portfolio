import styles from './Nav.module.css'
import Link from 'next/link';
import Container from "@/components/Container/Container";

const Nav = () => {
    return (
        <div className={styles.header}>
            <Container>
                <div className={styles.nav_wrapper}>
                    <h1>Portfolio</h1>
                    <nav>
                        <ul className={styles.nav}>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/projects">Projects</Link>
                            </li>
                            <li>
                                <Link href="/contacts">Contacts</Link>
                            </li>
                        </ul>
                    </nav>
                    <button className={styles.button}>Тема</button>
                </div>
            </Container>
        </div>
    );
}

export default Nav;