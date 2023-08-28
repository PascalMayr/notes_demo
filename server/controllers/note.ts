import { Note } from "@prisma/client"
import sanitize from 'sanitize-html'

export default class NoteController {
  /*
  * get Notes controller
  * @param {Request} req
  * @param {Response} res
  * @returns {Array<Object>} - Notes
  */
  public async getNotes(): Promise<Note[]> {
    try {
      // get all notes
      return await prisma.note.findMany();
    } catch(e: any) {
      throw new Error( 'Error getting notes', e)
    }
  }

  /*
  * set Notes controller
  * @param {Request} req
  * @param {Response} res
  * @returns {Array<Object>} - Notes
  */
  public async setNote(note: Note): Promise<Note[]> {
    // create new note
    const { title, content } = note;
    const sanitizeConf = {
      allowedTags: ['b', 'i', 'a', 'p', 'br', 'div', 'span'],
      allowedAttributes: { a: ['href'] },
    }

    // prevent xss attacks
    const sanitizedContent = sanitize(content, sanitizeConf)
    const sanitizedTitle = sanitize(title, sanitizeConf)
    await prisma.note.create({
      data: {
        title: sanitizedTitle,
        content: sanitizedContent
      },
    })
    // return all notes including the new one
    return await prisma.note.findMany();
  }

  /*
  * update Note controller
  * @param {Request} req
  * @param {Response} res
  * @returns {Object} - Note
  */
  public async updateNote(note: Note): Promise<Note> {
    try {
      // update note
      const updatedNote = await prisma.note.update({
        where: { id: note.id },
        data: {
          title: note.title,
          content: note.content
        }
      })
      return updatedNote;
    } catch(e: any) {
      throw new Error('Error updating note', e)
    }
  }

  /*
  * delete Note controller
  * @param {Request} req
  * @param {Response} res
  * @returns {Object} - Note
  */
  public async deleteNote(id: number): Promise<Note>{
    try {
      // set notes logic
      const deletedNote = await prisma.note.delete({
        where: { id }
      })
      return deletedNote;
    } catch(e: any) {
      throw new Error('Error deleting note', e)
    }
  }
}
