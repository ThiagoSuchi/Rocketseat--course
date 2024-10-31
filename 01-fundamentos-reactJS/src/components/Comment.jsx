import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/166747903?v=4" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Thiago Hens Suchi</strong>
                            <time title='23 de outubro ás 16:30' datetime="2024-10-23 16:30:32">Publicado há 1hr</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Jane, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplausos <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}