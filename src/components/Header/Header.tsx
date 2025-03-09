import styles from './Header.module.css'
import Link from 'next/link';

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
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
        </div>
    );
}

export default Header;