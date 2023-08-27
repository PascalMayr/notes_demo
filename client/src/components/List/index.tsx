import styles from './styles.module.sass'
import ListItem from 'components/ListItem'

function List() {
  return (
    <div className={styles.list}>
      <div className={styles.note} onClick={addNote}>
        +
      </div>
    </div>
  )
}

export default List
