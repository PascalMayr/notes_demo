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

export const initialContext = {
  notes: [],
  loading: false,
  current: { title: 'title', content: '' },
  setCurrent: (_note: React.SetStateAction<INote>) => {},
  saveNote: (id?: number) => {},
  removeNote: (id?: number) => {},
}

// Create app context object
const AppContext = createContext<IAppContext>({
  notes: [],
})

// Create custom hook to use app context
const useApp = () => useContext(AppContext)

// Create app context provider
const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [notes, setNotes] = useState<INote[]>([])
  const [current, setCurrent] = useState<INote>(initialContext.current)
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
    setNotes(sorted)
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
