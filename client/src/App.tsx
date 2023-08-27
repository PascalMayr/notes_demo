import List from 'components/List'
import Note from 'components/Note'
import { useApp } from 'context/AppContext'

function App() {
  const { current } = useApp()
  return (
    <section className="containers">
      <List />
      {current && <Note {...current} />}
    </section>
  )
}

export default App
