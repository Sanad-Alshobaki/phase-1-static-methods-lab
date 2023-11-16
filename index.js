class Formatter {

  static capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  static sanitize(word) {
    return word.replaceAll(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(word) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = []
    let arrayOfWords = word.split(' ')
    for (let i = 0; i < arrayOfWords.length; i++) {
      if (i == 0) {
        result.push(this.capitalize(arrayOfWords[i]))
      } else {
        if (exceptions.includes(arrayOfWords[i])) {
          result.push(arrayOfWords[i])
        } else {
          result.push(this.capitalize(arrayOfWords[i]))
        }

      }
    }
    return result.join(" ");
  }
}