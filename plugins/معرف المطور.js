let handler = async (m, { conn, command, text }) => {
let love = `

〆◖ــــــــــــــــــــــــــ〔 〕ــــــــــــــــــــــــــ◗〆
معلومات المطووور
moaaz
من القاهره
طالب
مطؤر

〆◖ــــــــــــــــــــــــــ〔 〕ــــــــــــــــــــــــــ◗〆
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(تعريف_المطور|معرف_المطور)$/i
export default handler
