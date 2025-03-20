import styles from "@/components/Header/Header.module.css";
import Container from "@/components/Container/Container";

const Header = () => {
    return (
        <div className={styles.header}>
            <Container>
                <div className={styles.header_wrapper}>
                    <h1 className={styles.header_title}>
                        <strong>Hi, my name is <em>Nikita</em></strong>
                        <br/>a frontend developer
                    </h1>
                    <div className={styles.header_text}>
                        <p>with passion for learning and creating</p>
                    </div>
                    <a href="#!" className={styles.btn}>Download CV</a>
                </div>
            </Container>
        </div>
    )
}

export default Header;