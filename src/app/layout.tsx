import './globals.css';
import Footer from '../components/Footer/Footer';
import Header from "@/components/Header/Header";
import styles from './Layout.module.css';

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body className={styles.layout}>
                <Header />
                <main className={styles.main}>{children}</main>
                <Footer />
            </body>
        </html>
    );
}