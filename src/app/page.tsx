import styles from './Page.module.css'

export default function Home() {
  return (
      <div className={styles.container}>
        <div className={styles.content}>
            <h2>Hi, my name is Nikita</h2>
            <strong>a frontend developer</strong>
            <p>with passion for learning and creating</p>
        </div>
      </div>
  );
}