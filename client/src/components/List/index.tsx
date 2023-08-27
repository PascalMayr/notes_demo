import { useApp } from 'context/AppContext'
import styles from './styles.module.sass'
import ListItem from 'components/ListItem'

function List() {
  const { notes } = useApp()
  return (
    <div className={styles.list}>
      <div className={styles.note} onClick={addNote}>
        +
      </div>
      {notes.map((note) => (
        <ListItem key={note.id} {...note} />
      ))}
    </div>
  )
}

export default List
