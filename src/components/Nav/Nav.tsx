'use client'

import styles from './Nav.module.css'
import Link from 'next/link'
import Container from "@/components/Container/Container"
import { useTheme } from '@/context/ThemeContext'
import SunIcon from '@/components/Icons/SunIcon';
import MoonIcon from '@/components/Icons/MoonIcon';
import { FC } from 'react';

const Nav: FC = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={styles.header}>
            <Container>
                <div className={styles.nav_wrapper}>
                    <h1 className={styles.logo}>
                        <Link href="/">Portfolio</Link>
                    </h1>
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
                    <button
                        className={styles.theme_switch}
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        <div className={`${styles.switch_thumb} ${theme === 'dark' ? styles.dark : ''}`}>
                            <SunIcon className={`${styles.icon} ${styles.sun}`}/>
                            <MoonIcon className={`${styles.icon} ${styles.moon}`}/>
                        </div>
                    </button>
                </div>
            </Container>
        </div>
    )
}

export default Nav;