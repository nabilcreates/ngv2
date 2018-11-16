function NumGen(length) {
    this.length = length;

    this.generate = function () {

        let number = ''

        for (var n = 0; n < this.length; n++) {
            number += Math.floor(Math.random() * 10)
        }

        // this.number = number

        console.log(number)
        return number
    }

    this.filter = function (number, start, end, requirement) {
        console.log(number.slice(start, end) == requirement)
    }
}

var newgen = new NumGen(8)

for (var i = 0; i < 100; i++) {
    newgen.filter(newgen.generate(), 0, 1, 8)
}

// console.log(newgen.generate(true).length)
// newgen.filter({start: 0, end: 1, requirement: 8})