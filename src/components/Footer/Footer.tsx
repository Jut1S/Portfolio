import styles from './Footer.module.css'
import Container from "@/components/Container/Container";


const Footer = () => {
    return (
        <div className={styles.footer}>
            <Container>
                <div className={styles.content}>
                    <a href="https://github.com/Jut1S" target="_blank" rel="noopener noreferrer">
                        <img src="/images/gitHub.svg" alt="GitHub"/>
                    </a>
                    <a href="https://vk.com/nbulygin2000" target="_blank" rel="noopener noreferrer">
                        <img src="/images/vk.svg" alt="VK"/>
                    </a>
                    <a href="https://www.instagram.com/jut1s_/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/instagram.svg" alt="Instagram"/>
                    </a>
                </div>
            </Container>
        </div>

    );
}

export default Footer;