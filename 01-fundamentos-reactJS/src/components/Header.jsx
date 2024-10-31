// Styless
import styles from './Header.module.css'
// Logo Safira
import safiraLogo from '../assets/safira-logo.png'

export function Header () {
    return (
        <header className={styles.header}>
            <img src={safiraLogo} alt="logotipo-Safria" />
            <h1>Sapphir<span>Us</span></h1>
        </header>
    )
}