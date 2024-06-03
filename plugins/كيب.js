function handler(m, { text }) {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  m.reply(teks.replace(/[a-z]/gi, v => {
      return { 
          'a': 'Ǎ',
          'b': 'β',
          'c': 'Ć',
          'd': 'Ḍ',
          'e': 'Ė',
          'f': 'Ｆ',
          'g': 'Ġ',
          'h': 'Η',
          'i': 'ì',
          'j': 'Ј',
          'k': 'Κ',
          'l': 'Ｌ',
          'm': 'M',
          'n': 'Ň',
          'o': 'Ǿ',
          'p': 'P',
          'q': 'Ｑ',
          'r': 'Ŗ',
          's': 'Ｓ',
          't': 'Ṫ',
          'u': 'Ū',
          'v': 'Ｖ',
          'w': 'Ⱳ',
          'x': 'χ',
          'y': 'Ŷ',
          'z': 'Ꙃ', 
      }[v.toLowerCase()] || v
  }))
}
handler.help = ['M E G O']
handler.tags = ['M E G O']
handler.command =  /^(زغرفه|زغرفة)$/i

export default handler
