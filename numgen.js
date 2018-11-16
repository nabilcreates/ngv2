function NumGen() {

    // generate numbers
    this.generate = function (length) {

        // this.length is the length argument
        this.length = length;

        // number is an empty string (so it can concat with numbers later on)
        let number = ''

        // so for each iteration, it will concat to the number
        for (var n = 0; n < this.length; n++) {
            number += Math.floor(Math.random() * 10)
        }

        // return the number (can be used with filter)
        return number
    }

    // filter only stuff that matches the requirements set by the user
    this.filter = function (obj) {

        // takes obj as an argument, destructuring the object
        let {
            number,
            start,
            requirement,
            errors=false
        } = obj
        
        // convert to string and then find the length (that will be the end)
        let end = requirement.toString().length;
        
        // console.log(requirement.toString().length)

        // console.log the only ones that match the requirement
        if (number.slice(start, end) == requirement) {
            console.log(`${number}`)
            return number
        }

        // // but if errors is set to true (from the obj argument) then it will console log No Match followed by the number (wont console log if errors is set to false)
        if(errors){
            if (number.slice(start, end) !== requirement) {
                console.log(`No Match (${number})`)
            }
        }
    }

}


// DEMO:
// let newgen = new NumGen()

// for (var i = 0; i < 1000; i++) {
//     newgen.filter({
//         number: newgen.generate(8),
//         start: 0,
//         requirement: 84,
//         errors: false
//     })
// }