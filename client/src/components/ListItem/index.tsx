import { INote, useApp } from 'context/AppContext'
import styles from './styles.module.sass'
import formatDate from 'utils/formatDate'
import { useCallback } from 'react'

function ListItem(note: INote) {
  // set current when selecting on click
  const { setCurrent, current } = useApp()
  const handleClick = useCallback(() => setCurrent(note), [note])
  return (
    <div onClick={handleClick} className={styles.item}>
      <span
        className={`${styles.itemTitle} ${
          current?.id === note.id ? styles.active : ''
        }`}
        dangerouslySetInnerHTML={{ __html: note.title }}
      />
      {note.updatedAt && (
        <span className={styles.itemDate}>
          {formatDate(new Date(note.updatedAt))}
        </span>
      )}
    </div>
  )
}

export default ListItem
