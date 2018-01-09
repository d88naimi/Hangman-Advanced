// letter constuctor
var Letter = function (letter){
// character letter
    this.char = letter;
// default is hiding letter;
    this.show = false;
    // show "-" if unless true show the letter
    this.letterRender = function(){
        if(this.show === false){
            return " -";
        } else{
            return this.char;
        }
    };
};

//export this constuctor 
module.exports = Letter;