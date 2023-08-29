const formatter = new Intl.DateTimeFormat('en-GB', {
  dateStyle: 'short',
  timeStyle: 'long',
  timeZone: 'Europe/Rome',
})

/**
 * formats date to YYYY-MM-DD HH:MM
 * @param {date} date
 * @returns {string}
 */
const formatDate = (date: Date) => formatter.format(date)

export default formatDate
