// components
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
// styles
import styles from './App.module.css'

import './global.css'

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/166747903?v=4',
      name: 'Thiago Hens Suchi',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2024-10-31 17:21:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/134097567?v=4',
      name: 'Guilherme Krauser Ramos',
      role: 'Dev Front-end'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2024-10-22 13:10:50'),
  },
];

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )

}

export default App // Deafault export
