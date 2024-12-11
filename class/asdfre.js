class Car {
    name = ""
    model = ""
    outgo = ""

    constructor(name, model, outgo) {
        this.name = name
        this.model = model
        this.outgo = outgo
    }

}

let bmw = new Car("BMW", "M5", "15L")
let nexia2 = new Car("NEXIA2", "M4", "5L")
let matiz = new Car("MATIZ", "BEST", "15L")

console.log(bmw.name + " " + bmw.model + " " + bmw.outgo)
console.log(nexia2.name + " " + nexia2.model + " " + nexia2.outgo)
console.log(matiz.name + " " + matiz.model + " " + matiz.outgo)


function Person(name, age, phone, address) {
    return [name, age, phone, address]
}

let odam1 = Person("ali", 21, 992341243, "Beshariq")
let odam2 = Person("sherzod", 23, 983412343, "furqat")
let odam3 = Person("bahrom", 25, 913412343, "qoqon")
let odam4 = Person("aziz", 27, 92312343, "andijon")

console.log(odam1)
console.log(odam2)
console.log(odam3)
console.log(odam4)