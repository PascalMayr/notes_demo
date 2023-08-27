import styles from './styles.module.sass'

function Note() {
  return (
    <div className={styles.list}>
      <div className={styles.tools}>
        <div className={styles.tool}>💾</div>
        <div className={styles.tool}>🗑️</div>
      </div>
      <div contentEditable className={styles.title}>
        {title}
      </div>
      <div contentEditable className={styles.content}>
        {content}
      </div>
    </div>
  )
}

export default Note
