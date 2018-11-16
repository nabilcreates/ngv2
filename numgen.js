function NumGen() {
    this.generate = function (length) {

        this.length = length;

        let number = ''

        for (var n = 0; n < this.length; n++) {
            number += Math.floor(Math.random() * 10)
        }

        return number
    }

    this.filter = function (obj) {

        let {
            number,
            start,
            end,
            requirement,
            errors=false
        } = obj

        // console.log(number.slice(start, end) == requirement)

        if (number.slice(start, end) == requirement) {
            console.log(`${number}`)
        }

        if(errors){
            if (number.slice(start, end) !== requirement) {
                console.log(`No Match (${number})`)
            }
        }
    }

}


// DEMO:
// let newgen = new NumGen()

// for (var i = 0; i < 100000; i++) {
//     newgen.filter({
//         number: newgen.generate(8),
//         start: 0,
//         end: 2,
//         requirement: 84,
//         errors: true
//     })
// }