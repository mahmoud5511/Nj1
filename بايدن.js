let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  let too = `[❗] افصل النص  بـ *+*\n\n *مـثــال* :\n*${usedPrefix + command}* كرستيانو عمك+ميسي عمك`

  if (!text) throw too
  let lr = (`https://api.popcat.xyz/biden?text=${encodeURIComponent(text)}`)
  conn.sendFile(m.chat, lr, 'drake.png', ` pelro 3mk🐳`, m)
}
handler.help = ['drake']
handler.tags = ['maker']
handler.command = ['بايدن','meme']

export default handler
