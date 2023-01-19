//1.//
new Set([1,1,2,2,3,4])

//{1,2,3,4}

//2.//
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

//{Array(3) => true}
//{Array(3) => false}

//3.//
const hasDuplicate = arr => new Set(arr).size !== arr.length

//4.//

function isVowel(str){
    return 'aeiou'.includes(str);
}

function vowelCount(str){
    const vowels = new Map();
    for(let char of str){
        let lowerChar = char.toLowerCase()
        if(isVowel(lowerChar)){
            if(vowels.has(lowerChar)){
                vowels.set(lowerChar, vowels.get(lowerChar) + 1);
            } else {
                vowels.set(lowerChar, 1);
            }
        }
    }
    return vowels;
}