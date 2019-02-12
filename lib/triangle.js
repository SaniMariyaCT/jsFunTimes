class Triangle {
   constructor(a,b,c) {
       this.a = a,
       this.b = b,
       this.c = c;
   };
   kind () {
       if(this.a===0 || this.b===0 || this.c===0) {
         throw new Error();
       }
       else if(this.a<=0 || this.b<=0 || this.c<=0){
          throw new Error();
       }       
       else if(this.a+this.b >= this.c && this.a+this.c >=this.b && this.b+this.c >=this.a) {
            if(this.a===this.b && this.b===this.c && this.a===this.c)
            return "equilateral";
            else if(this.a===this.b || this.b===this.c || this.a===this.c)
            return "isosceles";
            else
            return "scalene";
        }
        else {
          throw new Error();
        };
    };      
};
module.exports = Triangle;