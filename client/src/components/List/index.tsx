import { useApp } from 'context/AppContext'
import styles from './styles.module.sass'
import ListItem from 'components/ListItem'
import { useCallback } from 'react'

function List() {
  const { setCurrent, notes } = useApp()
  const handleAddNote = useCallback(() => {
    setCurrent({ title: 'title', content: '' })
  }, [])
  return (
    <div className={styles.list}>
      <div className={styles.note} onClick={handleAddNote}>
        +
      </div>
      {notes.map((note) => (
        <ListItem key={note.id} {...note} />
      ))}
    </div>
  )
}

export default List
