var input = prompt('input a word');
var space = false;
var isChar = false;

function isCharacter() {
    if(isNaN(input)){
        isChar = true;
    }
  }

function hasWhiteSpace(s) {
  if(s.indexOf(' ') >= 0){
      space = true;
  }
}
isCharacter(input);
hasWhiteSpace(input);

function extractMiddle(str) {
    if (input !== '' && space !== true && isChar !== false){
        let position;
        let length;
    
        if(str.length % 2 === 1) {
            position = str.length / 2;
            length = 1;
        } else {
            position = str.length / 2 - 1;
            length = 2;
        }
        alert('Middle character is ' + str.substring(position, position + length));
        return str.substring(position, position + length)
        
    } else {
        alert('Invalid value');
        return 'Invalid value'
    }
    
}

console.log(extractMiddle(input));
