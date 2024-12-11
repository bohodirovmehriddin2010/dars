let person = `
{
"name" : "ali",
"age" : "21"
"phone" : "911232334"
}
`
let data = null

try{
    data = JSON.parse(person)
    console.log(data.name)
    console.log(data.age)
    console.log(data.phone)
}catch (error){
    console.log(error.message)
}


