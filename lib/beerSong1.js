function getVerse(count) {
    if (count === 0) {
      return `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`;
    }
    if (count === 1) {
      return `1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`;
    }
    return `${count} bottles of beer on the wall, ${count} bottles of beer.\nTake one down and pass it around, ${(count-1)+' bottle'+(count - 1 > 1?'s':'')} of beer on the wall.\n`;
  }

  class BeerSong {
    verse(index) {
      return getVerse(index);
    }

    sing (begin, end) {
        if(end === undefined) end = 0;
        if(begin === undefined) begin = 99;
        let string = '';
        for(let i = begin; i >= end; i--) {
          if(i==end) string += this.verse(i);
          else string += this.verse(i) + `\n`;
          }
        return string;
        };
  };
  
  module.exports = BeerSong;
  