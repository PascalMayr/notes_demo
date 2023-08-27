import React, {
  useContext,
  useState,
  ReactNode,
  createContext,
  useEffect,
} from 'react'

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
  const [current, setCurrent] = useState<INote>()


  useEffect(() => {
    // call api to get newest notes
  }, [])

  return (
    <AppContext.Provider
      value={{ notes, addNote, saveNote, removeNote, current }}
    >
      {children}
    </AppContext.Provider>
  )
}

// Export app context
export { AppContextProvider, useApp }
