// styles
import styles from './Post.module.css'

// usuarios
import usuario from '../assets/usuario1.png'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src={usuario} />
                    <div className={styles.authorInfo}>
                        <strong>Jane Coper Freier</strong>
                        <span>Dev Front-end</span>
                    </div>
                </div>

                <time title='23 de outubro ás 16:30' datetime="2024-10-23 16:30:32">Publicado há 1hr</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉<a href="#">jane.design/doctorcare</a></p>

                <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}