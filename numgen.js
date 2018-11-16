function NumGen() {
    this.generate = function (length) {
        
        this.length = length;

        let number = ''

        for (var n = 0; n < this.length; n++) {
            number += Math.floor(Math.random() * 10)
        }

        return number
    }

    this.filter = function (number, start, end, requirement) {

        // console.log(number.slice(start, end) == requirement)

        if(number.slice(start, end) == requirement){
            console.log(`${number}`)
        }
    }

}


let newgen = new NumGen()

for (var i = 0; i < 100000; i++) {
    newgen.filter(newgen.generate(8), 0, 2, 84)
}

// console.log(newgen.generate(true).length)
// newgen.filter({start: 0, end: 1, requirement: 8})