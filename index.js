

var allFirstLetterCapitalize = function(givenString){
    let allString = givenString.split(" ")
    let stringLength = allString.length
    let result = []
    for(let i=0;i<stringLength;i++){
        let firstChar = allString[i].charAt(0).toUpperCase()
        let remainingString = allString[i].slice(1)
        let final = firstChar + remainingString
        result.push(final)
    }
    let finalResult = result.join(" ")
    return finalResult
}


var firstLetterCapitalize = function(givenString){
    let firstChar = givenString.charAt(0).toUpperCase()
    let remainingString = givenString.slice(1)
    let final = firstChar + remainingString
    return final
}

var firstWordCapitalize = function(givenString){
    let allString = givenString.split(" ")
    let firstChar = allString[0].toUpperCase()
    let remainingString = allString.slice(1)
    let final = firstChar+" " + remainingString.join(" ")
    return final
}

var allCapitalize = function(givenString){
    let result = givenString.toUpperCase()
    return result
}

var allLower = function(givenString){
    let result = givenString.toLowerCase()
    return result
}

var randomCapitalize = function(givenString,base = 3){
    givenString = givenString.split('').map(function(x){ 
            randomL = Math.floor(Math.random()*100);
            if(randomL % base == 0){
                return x.toUpperCase();
            }
            else{
                return x.toLowerCase();
                }
    }).join(''); 
    return givenString; 
}
var countWords = function(givenString){
    // let givenString = this;
    let words = givenString.split(" ");
    return words.length;
}


var maskEmail = function(givenString,element = "*"){
    // let givenString = this
    const emailParts = givenString.split('@')
    if(emailParts.length !== 2){
        throw new Error("Invalid Email")
    }
    const [name,domain] = emailParts
    const [provider, ending] = domain.split(".")

    const maskName = name.charAt(0) + element.repeat(name.length-1)
    const maskDomain = domain.charAt(0) + element.repeat(provider.length-1)
    
    const finalString = maskName + "@" + maskDomain + "." + ending
    return finalString
}

var readingTime = function(givenString,wordMin = 100){
    // let givenString = this
    let words = givenString.countWords()
    const wordPerMin = wordMin
    const minute = words/wordPerMin
    return minute
}

export {randomCapitalize,
    allLower,
    allCapitalize,
    firstWordCapitalize,
    firstLetterCapitalize,
    allFirstLetterCapitalize,
    countWords,
    maskEmail,
    readingTime}