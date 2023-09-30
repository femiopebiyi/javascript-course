const nums = [10,20,30];

nums[2]= 99;
console.log(nums);

function getLastValue(numbers){
    const lastNumber = numbers.length  - 1;
    console.log(numbers[lastNumber]);
}

getLastValue([2,3,4,4,5,5,664345,678])

function arraySwap (array){
    let lastIndex = array.length-1;
    let firstNum = array[0]
    let lastNum = array[lastIndex]

    array[0] = lastNum
    array[lastIndex] = firstNum
    
    

    console.log(array)
}
