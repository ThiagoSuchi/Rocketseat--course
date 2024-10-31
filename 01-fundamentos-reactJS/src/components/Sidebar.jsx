// Componentes
import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar'

// styless
import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1690585703267-de31ea667ef0?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        
        <div className={styles.profile}>
            <Avatar src="https://avatars.githubusercontent.com/u/166747903?v=4"/>

            <strong>Thiago Hens Suchi</strong>
            <span>Web Developer</span>
        </div>

        <footer>
            <a href="#">
                <PencilLine size={20}/>
                Editar seu perfil
            </a>
        </footer>
        </aside>
    )
}