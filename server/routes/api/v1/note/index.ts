import express from 'express'

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
router.get('/', async (_req: Request, res: Response) => {
})

/**
 * @swagger
 * /api/v1/note:
 *   post:
 *     description: create a new note
 *     responses:
 *       200:
 *         description: Returns an array of notes object.
 */
router.post('/', async (req: Request, res: Response) => {
})

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
router.put('/', async (req: Request, res: Response) => {
})

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
router.delete('/', async (req: Request, res: Response) => {
})

export default router
