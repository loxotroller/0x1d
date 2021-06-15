function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function findWord(str, toFind){
    let word = toFind.exec(str);
    if(word == null) return 0;
    else return word;
}
function findNum(str){
    return findWord(str, /\d{1,}/g);
}
module.exports = {rand, findWord, findNum};