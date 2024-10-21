// components
import { Header } from "./components/Header"
import { Post } from "./post"
import { Sidebar } from "./components/Sidebar"
// styles
import styles from './App.module.css'
import './global.css'

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <h1>Hello World!</h1>

          <Post
            author="Thiago Hens"
            content="Duis amet nulla tempor laboris culpa. Reprehenderit exercitation excepteur do esse consectetur cupidatat minim. Minim culpa culpa eiusmod adipisicing culpa excepteur consectetur eu quis Lorem voluptate."
          />

          <Post
            author="Letícia Almeida"
            content="Sunt do eiusmod amet laborum sunt proident veniam quis commodo duis reprehenderit duis. Labore reprehenderit officia do qui anim ex ullamco nostrud elit enim proident nulla minim do. Eu sit eu veniam minim in sunt sunt irure velit. Amet proident reprehenderit laboris pariatur culpa laborum. Anim laborum adipisicing incididunt Lorem minim et consequat labore. Ut qui enim duis qui elit Lorem. Nulla ut in sunt ea laborum do magna anim." /></main>
      </div>
    </div>
  )

}

export default App // Deafault export
