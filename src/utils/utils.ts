function generateRandomString() {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
  
    for (let i = 0; i < 11; i++) {
      if (i === 3 || i === 7) {
        result += '-';
      } else {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
    }
  
    return result;
  }

export { generateRandomString };