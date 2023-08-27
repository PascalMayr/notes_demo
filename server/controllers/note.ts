import { Note } from "@prisma/client"
import { PrismaClient } from '@prisma/client/edge'

const prisma = new PrismaClient()

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
    try {
      // create new note
      const { title, content } = note;
      await prisma.note.create({
        data: {
          title,
          content
        },
      })
      // return all notes including the new one
      return await prisma.note.findMany();
    } catch(e: any) {
      throw new Error('Error creating note', e)
    }
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
