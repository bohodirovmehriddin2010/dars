
let son1=30
let son2 =11
let son3=112



function getMiddle(){

    if (son1>son2 && son1 < son3 || son1 < son2 && son1 > son3)
        return son1 ;
    if (son2 > son1 && son2 < son3 || son2 < son1 && son2 > son3)
        return son2 ;
        if (son3 > son1 && son3 < son2 || son3 < son1 && son3 > son1)
        return son3 ;

}
console.log(getMiddle())








