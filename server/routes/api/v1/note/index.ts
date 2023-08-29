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
 *         content:
 *          application/json:
 *            schema:
 *             $ref: '#/components/schemas/Notes'
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
 *     parameters:
 *      - in: body
 *        description: the new note object without id
 *        schema:
 *          $ref: '#/components/schemas/Note'
 *     responses:
 *       200:
 *         description: Returns an array of notes object, including the new created note
 *         content:
 *          application/json:
 *            schema:
 *             $ref: '#/components/schemas/Notes'
 */
router.post('/', tryCatch(async (req: Request, res: Response) => {
  const { setNote } = new NoteController()
  const notes = await setNote(req.body)
  res.status(200).json(notes)
}))

/**
 * @swagger
 * /api/v1/note:
 *   put:
 *     description: updates a note
 *     parameters:
 *      - in: body
 *        description: the note object with id to update
 *        schema:
 *          $ref: '#/components/schemas/Note'
 *     responses:
 *       200:
 *         description: Returns the updated note.
 *         content:
 *          application/json:
 *            schema:
 *             $ref: '#/components/schemas/Note'
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
 *         description: Returns the deleted note.
 *         content:
 *          application/json:
 *            schema:
 *             $ref: '#/components/schemas/Note'
 *
 * components:
 *   schemas:
 *    Notes:
 *     type: array
 *     items:
 *       $ref: '#/components/schemas/Note'
 *    Note:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         description: The note ID.
 *       title:
 *         type: string
 *         description: The note title.
 *       content:
 *         type: string
 *         description: The note content.
 *       createdAt:
 *         type: string
 *         description: The note creation date.
 *       updatedAt:
 *         type: string
 *         description: The note update date.
 *
 */
router.delete('/:id', tryCatch(async (req: Request, res: Response) => {
  const { deleteNote } = new NoteController()
  const notes = await deleteNote(Number(req.params.id))
  res.status(200).json(notes)
}))

export default router
