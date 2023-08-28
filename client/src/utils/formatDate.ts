/**
 * formats date to YYYY-MM-DD HH:MM
 * @param {date} date
 * @returns {string}
 */
const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'short',
    timeStyle: 'long',
    timeZone: 'Europe/Rome',
  }).format(date)
}

export default formatDate
