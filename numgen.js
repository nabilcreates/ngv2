class NumGen{
    constructor(length){
        this.number = '';
        this.length = length
    }

    generate(){

        for(var i = 0; i < this.length; i++){
            this.number += Math.floor(Math.random() * 10)
        }

        console.log(`${this.number}`)

        return this.number
    }

    generateAndFilter(options){

        let number = this.generate(this.length)
        
        let {start,end,requirement} = options

        this.start = start;
        this.end = end;
        this.requirement = requirement;

        // consolelog [debug]
        // console.log(this.number.slice(this.start,this.end))
        // console.log(this.number.slice(this.start,this.end) == this.requirement)

        if(number.slice(this.start,this.end) == this.requirement){
            console.log(`Your number is ${this.number}`)
        }else{
            console.log('bad luck mate...')
        }
    }
}

var newgen = new NumGen(8)

// FIXME: Number is returning around 800 chars (8 from the length and 100 from the loop)
for(var i = 0; i < 100; i++){
    newgen.generateAndFilter({
        start: 0,
        end: 1,
        requirement: 8,
    })
}
// console.log(newgen.generate(true).length)
// newgen.filter({start: 0, end: 1, requirement: 8})
