function charCount(str) {
    const result = {};
    for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/i.test(char)) {
    result[char] = ++result[char] || 1;
    }
}
    return result;
}
 
console.log(charCount('Hello'));