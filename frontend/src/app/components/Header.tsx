import styles from "@/app/page.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <p><i className="bi bi-link" id={styles.logo}></i>encurta<span className={styles.span}>.link</span></p>
            </div>
            <nav className={styles.nav}>
                <a href="#secondPage">Recursos</a>
                <a href="#thirdPage">Como funciona</a>
            </nav>
        </header>
    )
}