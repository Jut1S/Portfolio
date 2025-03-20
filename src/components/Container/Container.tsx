import styles from "./Container.module.css";

// @ts-ignore
const Container = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
}

export default Container;