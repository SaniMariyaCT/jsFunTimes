class PhoneNumber {
    constructor(input) {
        this.input = input;
    };
    number() {
        var string = this.input.replace(/[0-9]/g, '');
        const count = string.length;
        if (count === 10) {
        console.log(string) 
        return string;
        }
        else if (count === 11) {
            if(string[0] === 1) {
              string = string.substr(1);
              return string;
            } else
              return "Not an NA number"
        } else 
          return "Not an NA number"
    };
};
module.exports = PhoneNumber;
