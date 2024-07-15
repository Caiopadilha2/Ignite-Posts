import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'

import {PencilLine } from 'phosphor-react'

export function Sidebar () {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1720709734276-cd14a216bcad?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
      />

      <div className={styles.profile}>
        <Avatar hasBorder src={"https://github.com/caiopadilha2.png"}/>
        <strong>Caio Padilha</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}