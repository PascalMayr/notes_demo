import List from 'components/List'
import Note from 'components/Note'

function App() {
  const { current } = useApp()
  return (
    <section className="containers">
      <List />
    </section>
  )
}

export default App
