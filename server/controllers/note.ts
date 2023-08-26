export default class NoteController {
  /*
  * get Notes controller
  * @param {Request} req
  * @param {Response} res
  * @returns {Array<Object>} - Notes
  */
  public async getNotes(): Promise<any> {
    try {
      // get notes logic
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
  public async setNote(note: any): Promise<any> {
    try {
      // set notes logic
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
  public async updateNote(note: any): Promise<any> {
    try {
      // set notes logic
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
  public async deleteNote(id: number): Promise<any>{
    try {
      // set notes logic
    } catch(e: any) {
      throw new Error('Error deleting note', e)
    }
  }
}
