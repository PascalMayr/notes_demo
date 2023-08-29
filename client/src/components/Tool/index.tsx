import { useApp } from 'context/AppContext'
import styles from './styles.module.sass'

function Tool({
  onClick,
  children,
}: {
  onClick: () => void
  children: JSX.Element | string
}) {
  const { loading } = useApp()
  return (
    <div
      className={`${styles.tool} ${loading && styles.disabled}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Tool
