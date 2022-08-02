const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let splitExpr = expr.split('');
    let count = splitExpr.length / 10;
    let separatedArr = [];
    for (let i = 0; i < count; i++) {
      separatedArr.push(splitExpr.splice(0, 10));
    }
    let decimalArr = [];
    separatedArr.forEach((item) =>
      decimalArr.push(item.join('').replace(/^0+/, ''))
    );
    let morseArr = decimalArr.map((item) =>
      item.replace(/10/g, '.').replace(/11/g, '-')
    );
    return morseArr
      .map((item) => (item === '**********' ? ' ' : MORSE_TABLE[item]))
      .join('');
  }

module.exports = {
    decode
}