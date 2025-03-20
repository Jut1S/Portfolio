import '../styles/globals.css';
import Footer from '../components/Footer/Footer';
import Nav from "@/components/Nav/Nav";
import styles from './Layout.module.css';

// @ts-ignore
export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body className={styles.layout}>
                <Nav />
                <main className={styles.main}>{children}</main>
                <Footer />
            </body>
        </html>
    );
}