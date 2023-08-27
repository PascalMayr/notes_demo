import { INote } from 'context/AppContext'
import styles from './styles.module.sass'
import formatDate from 'utils/formatDate'

function ListItem(note: INote) {
  return (
    <div className={styles.item}>
      <span className={styles.itemTitle}>{note.title}</span>
      {note.updatedAt && (
        <span className={styles.itemDate}>{formatDate(note.updatedAt)}</span>
      )}
    </div>
  )
}

export default ListItem
