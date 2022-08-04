/* 
function functionname(parameters) {

// function values 

// return 

}

var returnValues =  functionname('parameters values'); */


function getaverage(assirgnment1, assirgnment2, assirgnment3) {
    const total = assirgnment1 + assirgnment2 + assirgnment3;
    const average =total /3;
    return  average;

}
const assirgnment1Point = 60;  
const assirgnment2Point = 58;  
const assirgnment3Point = 59; 

var myAverage =getaverage(assirgnment1Point,assirgnment2Point,assirgnment3Point);

console.log(myAverage);