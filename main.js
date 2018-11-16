let newgen = new NumGen()

var app = new Vue({
    el: ".app",

    data(){
        return{
            numbers: []
        }
    },

    methods: {
        getNumbers(){

            // LOOP
            for(var i = 0; i < 10000; i++){
                var number = newgen.filter({
                    number: newgen.generate(8),
                    start: 0,
                    requirement: 8,
                })

                // SINCE NUMBERS THAT DOESNT MATCH RETURN UNDEFINED SO WE ONLY PUSH NUMBERS THAT DO NOT RETURN UNDEFINED (OR NUMBERS THAT MATCH)
                if(number !== undefined){
                    this.numbers.push(number)
                }

                // CONSOLE LOG THE ARRAY
                // console.log(this.numbers)
            }
        }
    },

    mounted(){
        this.getNumbers()
    }
})