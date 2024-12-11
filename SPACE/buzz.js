function fizzBuzz(son){

    if ( typeof son !== 'number')
        return "son emas"

    if (son % 5 === 0 && son % 3 === 0  )
        return "fizzbuzz"

    if (son % 3 === 0)
        return "fizz"

    if (son % 5 === 0)
        return "buzz"

  if (son % 5 !== 0 && son % 3 !== 0  )
        return "son"
}

console.log(fizzBuzz(123))