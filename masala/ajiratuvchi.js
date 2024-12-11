let task = "mexanizatsiyalashtirolmaganliklaringizdandir"
let word = "chegaradagilarimiznikidagilardanmisiz"

let find = 'chegaradagilarimiz'
let newWord = ''

for (let i = 0; i < word.length; i++) {

    if (newWord !== find)
        newWord = newWord + word[i]

}


console.log(newWord)








