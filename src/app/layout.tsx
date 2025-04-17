import '../styles/globals.css';
import Footer from '../components/Footer/Footer';
import Nav from "@/components/Nav/Nav";
import styles from './Layout.module.css';
import { ThemeProvider } from '@/context/ThemeContext'
import { ReactNode } from 'react';

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="ru">
        <body className={styles.layout}>
        <ThemeProvider>
            <Nav />
            <main className={styles.main}>{children}</main>
            <Footer />
        </ThemeProvider>
        </body>
        </html>
    );
}