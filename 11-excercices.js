// const nums = [10,20,30];

// nums[2]= 99;
// console.log(nums);

// function getLastValue(numbers){
//     const lastNumber = numbers.length  - 1;
//     console.log(numbers[lastNumber]);
// }

// getLastValue([2,3,4,4,5,5,664345,678])

// function arraySwap (array){
//     let lastIndex = array.length-1;
//     let firstNum = array[0]
//     let lastNum = array[lastIndex]

//     array[0] = lastNum
//     array[lastIndex] = firstNum
    
    

//     console.log(array)
// }

// let num = 10
// for(let i = 0; i<=num ; i+=2){
//     console.log(i)
// }

// for(let i = 5;  i>=0; i--){
//     console.log(i)
// }

// let num = 0;

// while(num <= 10){
//     console.log(num);
//     num+=2
// }

// let i = 5
// while(i>=0){
//     console.log(i)
//     i--
// }

// loop = [1,2,3,4];

// for(let i = 0; i<loop.length; i++){
//     loop[i]*=2
    
// }
// console.log(loop)


// function addOne (array){
//     for (let i = 0; i<array.length; i++){
//         array[i] +=1
//     }

//     console.log(array)
// }

// function addNum (array, num){
//     for(let i = 0; i<array.length; i++){
//         array[i]+=num
//     }
//     console.log(array)
// }

// function addArray (array1, array2){
//     for(let i = 0; i<array1.length && i<array2.length; i++){
//         array1[i] += array2[i]
//     }

//     console.log(array1)
// }

// function countPositive(nums){
//     let count = 0
//     for(let i = 0; i<nums.length; i++){
//         if(nums[i]<0){
//             count+=1
//         }

//     }
//     console.log(count)
// }


function minMax (nums){
    let answer = {};
    
    for(let i = 0; i<nums.length; i++){
        if (nums[i]> nums[i+1]){
            answer.min = nums[i]
        } 
        if(nums[i]<nums[i+1]){
            answer.max = nums[i]
        }
    }
    console.log(answer)
}