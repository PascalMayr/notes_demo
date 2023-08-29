import React, {
  useContext,
  useState,
  ReactNode,
  createContext,
  useEffect,
} from 'react'
import clientApi from 'utils/api'

export interface INote {
  id?: number
  title: string
  content: string
  createdAt?: Date
  updatedAt?: Date
}

// Create app context interface
interface IAppContext {
  notes: INote[]
  current?: INote
  loading: boolean
  saveNote: (id?: number) => void
  setCurrent: (note: React.SetStateAction<INote>) => void
  removeNote: (id?: number) => void
}

export const initialContext = {
  notes: [],
  loading: false,
  current: { title: 'unnamed note', content: '' },
  setCurrent: (_note: React.SetStateAction<INote>) => {},
  saveNote: (id?: number) => {},
  removeNote: (id?: number) => {},
}

// Create app context object
const AppContext = createContext<IAppContext>(initialContext)

// Create custom hook to use app context
const useApp = () => useContext(AppContext)

// Create app context provider
const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [notes, setNotes] = useState<INote[]>([])
  // current note
  const [current, setCurrent] = useState<INote>(initialContext.current)
  const [loading, setLoading] = useState<boolean>(initialContext.loading)

  // App context function to get all notes
  const getNotes = async () => {
    const result: INote[] = (await clientApi('/note')) || []

    const sorted = result.sort((noteA: INote, noteB: INote) => {
      const noteBUpdated = noteB.updatedAt
        ? new Date(noteB.updatedAt).getTime()
        : 0
      const noteAUpdated = noteA.updatedAt
        ? new Date(noteA.updatedAt).getTime()
        : 0
      return noteBUpdated - noteAUpdated
    })
    setCurrent(sorted[0] || initialContext.current)
    setNotes(sorted)
  }

  // App context function to delete a note
  const removeNote = async (id?: number) => {
    if (!id) {
      setCurrent(initialContext.current)
      return
    }
    setLoading(true)
    await clientApi(`/note/${id}`, { method: 'DELETE' })
    await getNotes()
    setLoading(false)
  }

  // App context function to create a new note or update it
  const saveNote = async (id?: number) => {
    // save current note
    if (current) {
      setLoading(true)
      // update or create note
      if (current.id) {
        await clientApi(`/note`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(current),
        })
        await getNotes()
        setLoading(false)
        return
      }
      await clientApi('/note', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(current),
      })
      await getNotes()
      setLoading(false)
    }
  }

  useEffect(() => {
    // call api to get newest notes
    getNotes()
  }, [])

  return (
    <AppContext.Provider
      value={{ notes, saveNote, removeNote, setCurrent, current, loading }}
    >
      {children}
    </AppContext.Provider>
  )
}

// Export app context
export { AppContextProvider, useApp }
