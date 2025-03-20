import styles from './Contacts.module.css'
import Container from "@/components/Container/Container";

const Contacts = () => {
    // @ts-ignore
    return (
        <div className={styles.section}>
            <Container>
                <h1 className={styles.title_1}>Contacts</h1>

                <ul className={styles.content_list}>
                    <li className={styles.content_item}>
                        <h2 className={styles.title_2}>Location</h2>
                        <p>Ekaterinburg, Russia</p>
                    </li>
                    <li className={styles.content_item}>
                        <h2 className={styles.title_2}>Telegram</h2>
                        <p>
                            <a href="tel:+79961780091">+7 (996) 178-00-91</a>
                        </p>
                    </li>
                    <li className={styles.content_item}>
                        <h2 className={styles.title_2}>Email</h2>
                        <p>
                            <a href="vip.nikita.bulygin@gmail.com">
                                vip.nikita.bulygin@gmail.com
                            </a>
                        </p>
                    </li>
                </ul>
            </Container>
        </div>
    )
}

export default Contacts;