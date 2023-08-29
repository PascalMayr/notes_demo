import { Note } from "@prisma/client"
import prisma from "../prisma/config"
import sanitize from 'sanitize-html'

export default class NoteController {
  /*
  * get Notes controller
  * @param {Request} req
  * @param {Response} res
  * @returns {Array<Object>} - Notes
  */
  public async getNotes(): Promise<Note[]> {
    return await prisma.note.findMany();
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

    // sanitize content and title
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
    // update note
    const { id, title, content } = note
    const updatedNote = await prisma.note.update({
      where: { id },
      data: {
        title,
        content
      }
    })
    return updatedNote
  }

  /*
  * delete Note controller
  * @param {Request} req
  * @param {Response} res
  * @returns {Object} - Note
  */
  public async deleteNote(id: number): Promise<Note>{
    // set notes logic
    const deletedNote = await prisma.note.delete({
      where: { id }
    })
    return deletedNote;
  }
}
