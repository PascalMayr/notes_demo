import express from 'express'
import NoteController from '../../../../controllers/note.js'
import { Request, Response } from 'express'
import tryCatch from '../../../../utils/tryCatch.js';

const router = express.Router();

/**
 * @swagger
 * /api/v1/note:
 *   get:
 *     description: get all notes
 *     responses:
 *       200:
 *         description: Returns an array of notes object.
 */
router.get('/', tryCatch(async (_req: Request, res: Response) => {
  const { getNotes } = new NoteController()
  const notes = await getNotes()
  res.status(200).json(notes)
}))

/**
 * @swagger
 * /api/v1/note:
 *   post:
 *     description: create a new note
 *     responses:
 *       200:
 *         description: Returns an array of notes object.
 */
router.post('/', tryCatch(async (req: Request, res: Response) => {
  const { setNote } = new NoteController()
  const notes = await setNote(req.body)
  res.status(200).json(notes)
}))

/**
 * @swagger
 * /api/v1/note/{id}:
 *   put:
 *     description: updates a note
 *     parameters:
 *      - in: path
 *        name: id
 *     responses:
 *       200:
 *         description: Returns the updated note.
 */
router.put('/', tryCatch(async (req: Request, res: Response) => {
  const { updateNote } = new NoteController()
  const note = await updateNote(req.body)
  res.status(200).json(note)
}))

/**
 * @swagger
 * /api/v1/note/{id}:
 *   delete:
 *     description: deletes a note
 *     parameters:
 *      - in: path
 *        name: id
 *     responses:
 *       200:
 *         description: Returns an array of notes object without the deleted object.
 */
router.delete('/', tryCatch(async (req: Request, res: Response) => {
  const { deleteNote } = new NoteController()
  const notes = await deleteNote(req.body.id)
  res.status(200).json(notes)
}))

export default router
