import { INote, useApp } from 'context/AppContext'
import styles from './styles.module.sass'
import { useCallback } from 'react'
import sanitize from 'sanitize-html'
import Tool from 'components/Tool'

function Note({ id }: INote) {
  const { removeNote, saveNote, setCurrent, current, loading } = useApp()
  const handleSave = async () => {
    if (loading) return
    saveNote(id)
  }
  const handleRemove = async () => {
    if (loading) return
    removeNote(id)
  }

  // change title and content in current note
  const onContentBlur = useCallback(
    (event) => {
      const sanitizeConf = {
        allowedTags: ['b', 'i', 'a', 'p', 'br', 'div', 'span'],
        allowedAttributes: { a: ['href'] },
      }

      // sanitize
      const content = sanitize(event.target.innerHTML, sanitizeConf)
      const dataContent = event.target.getAttribute('data-content')
      if (dataContent === 'title') {
        setCurrent((current) => ({ ...current, title: content }))
      }
      if (dataContent === 'content') {
        setCurrent((current) => ({ ...current, content }))
      }
    },
    [current]
  )
  return (
    <div className={styles.list}>
      <div className={styles.tools}>
        <Tool onClick={handleSave}>💾</Tool>
        <Tool onClick={handleRemove}>🗑️</Tool>
      </div>
      <div
        onBlur={onContentBlur}
        data-content="title"
        contentEditable
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: current?.title || '' }}
      />
      <div
        onBlur={onContentBlur}
        data-content="content"
        contentEditable
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: current?.content || '' }}
      />
    </div>
  )
}

export default Note
