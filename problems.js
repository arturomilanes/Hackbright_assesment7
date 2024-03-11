// function addToZero runtime is O(n) and space is O(1)
function addToZero(array){
    counter = 0;
    for(let i = 0; i< array.length; i++)
    {
        counter += array[i];
    }
    return counter == 0? true : false;
}

// function hasUniqueChars runtime is O(n) and space is O(n)
function hasUniqueChars(s){
    let set = new Set();
    for(let i = 0; i<s.length; i++)
    {
        if(set.has(s[i]))
        {
            return false;
        }
        else{
            set.add(s[i]);
        }
    }
    return true;
}

//function isPangram runtime is O(n) and space is o(n)
function isPangram(s){
    let set = new Set();
    let regex = /^[a-zA-Z]+$/;
    for(char of s)
    {
        if(regex.test(char))
        {
            set.add(char.toLowerCase());
        }
    }

    if(set.size===26)
    {
        return true;
    }
    return false;
}

// function findLongestWord runtime is O(n) and space is O(1)
function findLongestWord(arr)
{
    let largerCnt = 0;
    for(s of arr){
        if(s.length> largerCnt)
        {
            largerCnt = s.length;
        }
    }
    return largerCnt;
}

console.log(addToZero([1,-1,7]));
console.log(hasUniqueChars("Momnday"));
console.log(isPangram("The quick brown fo jumps over the lazy dog!"));
console.log(findLongestWord(['hi', 'hello']));